// @flow
import React, { Component } from "react";
import _ from "lodash";
import Tags from "../../components/tags";
import InputLabel from "../../components/inputLabel";
import Button from "../../components/buttons";
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
      link: "1",
      description: "2",
      tag: "3"
    }
  };

  addTag = (linkData: LinkData) => {
    const { tag, tags } = linkData;
    if (_.endsWith(_.trimStart(tag), " ")) {
      const newTag = _.camelCase(tag);
      if (_.indexOf(tags, newTag) === -1) tags.push(newTag);
      return _.assign(linkData, { tags, tag: " " });
    }
    return linkData;
  };

  deleteTag = (tag: string) => {
    const state = { ...this.state };
    const { linkData } = state;
    _.remove(linkData.tags, n => n === tag);
    this.setState({ linkData });
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    this.setState(prevState => {
      let { linkData } = prevState;
      linkData[input.name] = input.value;
      if (input.name === "tag") linkData = this.addTag(linkData);
      return { linkData };
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
        <Tags tagList={linkData.tags} handleDelete={this.deleteTag} />
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
