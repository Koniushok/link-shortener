// @flow
import React, { Component } from "react";
import Tags from "../../components/tags";
import InputLabel from "../../components/inputLabel";
import Button from "../../components/button";
import Form from "../../components/form";

type LinkData = {
  link: string,
  description: string,
  tag: string,
  tags: Array<string>
};

type State = {
  linkData: LinkData,
  error: {
    link: string,
    description: string,
    tag: string
  }
};
class LinkCreator extends Component<any, State> {
  state = {
    linkData: {
      link: "",
      description: "",
      tag: "",
      tags: []
    },
    error: {
      link: "",
      description: "",
      tag: ""
    }
  };

  addTag = (linkData: LinkData) => {
    const { tag, tags } = linkData;
    if (tag[tag.length - 1] === " ") {
      const newTag = tag.replace(/\s/g, "");
      if (tags.indexOf(newTag) === -1) tags.push(newTag);
      return Object.assign(linkData, { tags, tag: " " });
    }
    return linkData;
  };

  deleteTag = (tag: string) => {
    const state = { ...this.state };
    const { linkData } = state;
    const index = linkData.tags.indexOf(tag);
    if (index !== -1) linkData.tags.splice(index, 1);
    this.setState({ linkData });
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    this.setState(prevState => {
      let { linkData } = prevState;
      linkData[input.name] = input.value;
      if (input.name === "tag") linkData = this.addTag(linkData);
      return { linkData: { ...linkData } };
    });
  };

  render() {
    const { linkData, error } = this.state;
    return (
      <Form autoComplete="off">
        <InputLabel
          label="Link"
          error={error.link}
          name="link"
          value={linkData.link}
          onChange={this.handleChange}
        />
        <InputLabel
          label="Tag"
          name="tag"
          error={error.tag}
          value={linkData.tag}
          onChange={this.handleChange}
        />
        {linkData.tags.length > 1 && (
          <Tags tagList={linkData.tags} handleDelete={this.deleteTag} />
        )}
        <InputLabel
          label="Description"
          name="description"
          error={error.description}
          value={linkData.description}
          onChange={this.handleChange}
        />
        <Button alignRight>Shorten</Button>
      </Form>
    );
  }
}

export default LinkCreator;
