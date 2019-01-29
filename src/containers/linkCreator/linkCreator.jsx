// @flow
import React, { Component, Fragment } from "react";
import Joi from "joi-browser";
import styled from "styled-components";
import Tags from "../../components/tags";
import Input from "../../components/input";
import Button from "../../components/button";
import Form from "../../components/form";
import { type LinkCreate } from "../../types";
import Alert from "../../components/alert";

const FormWrapper = styled.section`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    max-width: 400px;
  }
`;

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
  loading: boolean,
  createLink: (link: LinkCreate) => void
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

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.values(errors).every(error => !error)) {
      const link = { ...this.state.linkData };
      delete link.tag;
      this.props.createLink(link);
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

  render() {
    const { linkData, errors } = this.state;
    const { result, error, loading } = this.props;
    return (
      <Fragment>
        {error && <Alert type="error">{error}</Alert>}
        {result && <Alert type="success">{result}</Alert>}
        <FormWrapper>
          <h1>Create link</h1>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
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
        </FormWrapper>
      </Fragment>
    );
  }
}

export default LinkCreator;
