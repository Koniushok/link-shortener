// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { AddCircleOutline } from 'styled-icons/material/AddCircleOutline';
import Joi from 'joi-browser';
import Tags from './tags';
import Input from './input';
import Button from './button';
import Form from './form';
import { type LinkCreate } from '../types';

const ButtonAddTag = styled(AddCircleOutline)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: white;
  position: absolute;
  right: 2px;
  top: 32px;
`;
const TagInputWrapper = styled.div`
  position: relative;
`;
type State = {
  tag: string,
  tags: Array<string>,
  errors: {
    title: string,
    url: string,
    description: string,
    tag: string,
  },
};
type FormTarget = {
  title: HTMLInputElement,
  url: HTMLInputElement,
  description: HTMLInputElement,
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
  };

  static defaultProps = {
    linkData: undefined,
  };

  state = {
    tag: '',
    tags: [],
    errors: {
      title: '',
      url: '',
      description: '',
      tag: '',
    },
  };

  validate = (linkData: $Diff<LinkCreate, { tags: Array<string> }>) => {
    const errors = {
      title: '',
      url: '',
      description: '',
      tag: this.state.errors.tag,
    };
    const { error } = Joi.validate(linkData, this.schema, {
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

  addTag = () => {
    this.setState((prevState) => {
      const tags = [...prevState.tags];
      if (tags.indexOf(prevState.tag) === -1) {
        tags.push(prevState.tag.trim());
      }
      return { tags, tag: '' };
    });
  };

  deleteTag = (tag: string) => {
    this.setState((prevState) => {
      const tags = [...prevState.tags];
      const index = tags.indexOf(tag);
      if (index !== -1) {
        tags.splice(index, 1);
      }
      return { tags };
    });
  };

  handleChangeTag = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const tag = e.currentTarget.value;
    this.setState({ tag: tag.trim() });
    this.setState((prevState) => {
      const errors = { ...prevState.errors };
      errors.tag = '';
      if (tag.length > 40) {
        errors.tag = 'The max character length is 40';
      }
      return { errors };
    });
  };

  handleSubmit = (
    e: {
      target: FormTarget,
    } & SyntheticEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const { title, url, description } = e.target;
    const linkData: $Diff<LinkCreate, { tags: Array<string> }> = {
      title: title.value,
      url: url.value,
      description: description.value,
    };
    const errors = this.validate(linkData);
    this.setState({ errors });
    if (Object.values(errors).every(error => !error)) {
      const link = { ...linkData, tags: this.state.tags };
      this.props.onSubmit(link);
    }
  };

  render() {
    const { errors, tag, tags } = this.state;
    const { loading, buttonLabel, linkData } = this.props;
    return (
      <Fragment>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
          <Input
            label="Title"
            error={errors.title}
            name="title"
            defaultValue={linkData && linkData.title}
          />
          <Input
            label="Link"
            error={errors.url}
            name="url"
            defaultValue={linkData && linkData.url}
          />
          <TagInputWrapper>
            <Input
              label="Tag"
              name="tag"
              error={errors.tag}
              value={tag}
              onChange={this.handleChangeTag}
            />
            {!errors.tag && tag && <ButtonAddTag onClick={this.addTag} />}
          </TagInputWrapper>
          {!!tags.length && <Tags tagList={tags} handleDelete={this.deleteTag} />}
          <Input
            label="Description"
            name="description"
            error={errors.description}
            defaultValue={linkData && linkData.description}
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
