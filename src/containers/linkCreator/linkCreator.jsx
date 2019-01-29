// @flow
import React, { Component, Fragment } from "react";
import Joi from "joi-browser";
import Tags from "../../components/tags";
import Input from "../../components/input";
import Button from "../../components/button";
import Form from "../../components/form";
import { type LinkCreate } from "../../types";
import Alert from "../../components/alert";

type LinkData = LinkCreate & { tag: string };
type State = {
  linkData: LinkData,
  errors: {
    url: string,
    description: string,
    tag: string
  }
};
type Props = {
  result: string,
  error: string,
  loading: boolean
};
class LinkCreator extends Component<Props, State> {
  state = {
    linkData: {
      url: "",
      description: "",
      tag: "",
      tags: []
    },
    errors: {
      url: "",
      description: "",
      tag: ""
    }
  };

  schema = {
    loginName: Joi.string()
      .required()
      .min(6)
      .label("LoginName"),
    url: Joi.string()
      .url()
      .label("Link"),
    description: Joi.string()
      .required()
      .label("Description"),
    tag: Joi.string().label("Tag"),
    tags: Joi.array()
  };

  validate = () => {
    const errors = {
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

  render() {
    const { linkData, errors } = this.state;
    const { result, error, loading } = this.props;
    return (
      <Fragment>
        {error && <Alert type="error">{error}</Alert>}
        {result && <Alert type="success">{result}</Alert>}
        <Form autoComplete="off">
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

export default LinkCreator;
