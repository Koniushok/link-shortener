// @flow
import React, { Component, Fragment } from 'react';
import Joi from 'joi-browser';
import Tags from './tags';
import Input from './input';
import Button from './button';
import Form from './form';
import { type LinkCreate } from '../types';

type LinkData = LinkCreate & { tag: string };
type State = {
  linkData: LinkData,
  errors: {
    title: string,
    url: string,
    description: string,
    tag: string,
  },
};
type Props = {
  buttonLabel: string,
  linkData?: LinkCreate,
  onSubmit: (linkData: LinkCreate) => void,
  loading: boolean,
};
class LinkForm extends Component<Props, State> {
  schema = {
    title: Joi.string()
      .required()
      .label('Title'),
    url: Joi.string()
      .uri({ scheme: ['http', 'https'] })
      .label('Link'),
    description: Joi.string()
      .required()
      .label('Description'),
    tag: Joi.string()
      .allow('')
      .label('Tag'),
    tags: Joi.array(),
  };

  static defaultProps = {
    linkData: undefined,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      linkData: this.props.linkData
        ? { ...this.props.linkData, tag: '' }
        : {
          url: '',
          description: '',
          tag: '',
          title: '',
          tags: [],
        },
      errors: {
        title: '',
        url: '',
        description: '',
        tag: '',
      },
    };
  }

  validate = () => {
    const errors = {
      title: '',
      url: '',
      description: '',
      tag: '',
    };
    const { error } = Joi.validate(this.state.linkData, this.schema, {
      abortEarly: false,
    });
    if (!error) {
      return errors;
    }
    error.details.forEach((item) => {
      errors[item.path[0]] = item.message;
    });
    return errors;
  };

  addTag = (linkData: LinkData) => {
    const { tag, tags } = linkData;
    if (tag[tag.length - 1] === ' ') {
      const newTag = tag.replace(/\s/g, '');
      if (tags.indexOf(newTag) === -1) {
        tags.push(newTag);
      }
      return { ...linkData, tags, tag: ' ' };
    }
    return linkData;
  };

  deleteTag = (tag: string) => {
    this.setState((prevState) => {
      const linkData = { ...prevState.linkData };
      const index = linkData.tags.indexOf(tag);
      if (index !== -1) {
        linkData.tags.splice(index, 1);
      }
      return { linkData };
    });
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    this.setState((prevState) => {
      let linkData = { ...prevState.linkData };
      linkData[input.name] = input.value;
      if (input.name === 'tag') {
        linkData = this.addTag(linkData);
      }
      return { linkData };
    });
  };

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.values(errors).every(error => !error)) {
      const link = { ...this.state.linkData };
      delete link.tag;
      this.props.onSubmit(link);
    }
  };

  render() {
    const { linkData, errors } = this.state;
    const { loading, buttonLabel } = this.props;
    return (
      <Fragment>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
          <Input
            label="Title"
            error={errors.title}
            name="title"
            value={linkData.title}
            onChange={this.handleChange}
          />
          <Input
            label="Link"
            error={errors.url}
            name="url"
            value={linkData.url}
            onChange={this.handleChange}
          />
          <Input
            label="Tag"
            name="tag"
            error={errors.tag}
            value={linkData.tag}
            onChange={this.handleChange}
          />
          {!!linkData.tags.length && <Tags tagList={linkData.tags} handleDelete={this.deleteTag} />}
          <Input
            label="Description"
            name="description"
            error={errors.description}
            value={linkData.description}
            onChange={this.handleChange}
          />
          <Button alignRight disabled={loading}>
            {buttonLabel}
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default LinkForm;
