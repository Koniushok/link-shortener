// @flow
import React, { Component, Fragment } from "react";
import Joi from "joi-browser";
import Tags from "./tags";
import Input from "./input";
import Button from "./button";
import Form from "./form";
import { type LinkCreate, type Link } from "../types";

type LinkData = LinkCreate & { tag: string };
type State = {
  linkData: LinkData,
  errors: {
    title: string,
    url: string,
    description: string,
    tag: string
  }
};
type Props = {
  linkData?: Link,
  onSubmit: (linkData: LinkCreate) => void,
  loading: boolean
};
class LinkForm extends Component<Props, State> {
  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    url: Joi.string()
      .uri({ scheme: ["http", "https"] })
      .label("Link"),
    description: Joi.string()
      .required()
      .label("Description"),
    tag: Joi.string()
      .allow("")
      .label("Tag"),
    tags: Joi.array()
  };

  constructor(props: Props) {
    super(props);
    if (this.props.linkData) {
      const link = { ...this.props.linkData, tag: "" };
      delete link.shortLink;
      delete link.id;
      delete link.passage;
      this.state = {
        linkData: link,
        errors: {
          title: "",
          url: "",
          description: "",
          tag: ""
        }
      };
    } else {
      this.state = {
        linkData: {
          url: "",
          description: "",
          tag: "",
          title: "",
          tags: []
        },
        errors: {
          title: "",
          url: "",
          description: "",
          tag: ""
        }
      };
    }
  }

  validate = () => {
    const errors = {
      title: "",
      url: "",
      description: "",
      tag: ""
    };
    const { error } = Joi.validate(this.state.linkData, this.schema, {
      abortEarly: false
    });
    if (!error) {
      return errors;
    }
    error.details.forEach(item => {
      errors[item.path[0]] = item.message;
    });
    return errors;
  };

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.values(errors).every(error => !error)) {
      this.props.onSubmit(this.state.linkData);
    }
  };

  addTag = (linkData: LinkData) => {
    const { tag, tags } = linkData;
    if (tag[tag.length - 1] === " ") {
      const newTag = tag.replace(/\s/g, "");
      if (tags.indexOf(newTag) === -1) {
        tags.push(newTag);
      }
      return { ...linkData, tags, tag: " " };
    }
    return linkData;
  };

  deleteTag = (tag: string) => {
    this.setState(prevState => {
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
    this.setState(prevState => {
      let linkData = { ...prevState.linkData };
      linkData[input.name] = input.value;
      if (input.name === "tag") {
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
    const { loading } = this.props;
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
          {!!linkData.tags.length && (
            <Tags tagList={linkData.tags} handleDelete={this.deleteTag} />
          )}
          <Input
            label="Description"
            name="description"
            error={errors.description}
            value={linkData.description}
            onChange={this.handleChange}
          />
          <Button alignRight disabled={loading}>
            Shorten
          </Button>
        </Form>
      </Fragment>
    );
  }
}

export default LinkForm;