// @flow
import React, { Component } from "react";
import styled from "styled-components";
import _ from "lodash";
import { XCircle } from "styled-icons/boxicons-regular/XCircle";
import InputLabel from "../components/inputLabel";
import Button from "../components/buttons";

const Form = styled.form`
  margin: 100px auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > * {
    margin-bottom: 20px;
  }
`;

const TagWrapper = styled.div`
  padding: 5px 10px;
  border-radius: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #d6d6d6ab;
`;
const ButtonDelete = styled(XCircle)`
  margin-left: 8px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background: #e1e1e1;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const Tag = ({ text, handleDelete }: { text: string }) => (
  <TagWrapper>
    <span>{text}</span>
    <ButtonDelete onClick={handleDelete} />
  </TagWrapper>
);

type State = {
  data: {
    link: string,
    description: string,
    tag: string,
    tags: Array<string>
  },
  error: {
    link: string,
    description: string,
    tag: string
  }
};
class LinkCreator extends Component<{}, State> {
  state = {
    data: {
      link: "link",
      description: "description",
      tag: "tags",
      tags: []
    },
    error: {
      link: "Error",
      description: "",
      tag: "Error"
    }
  };
  addTag = data => {
    if (_.endsWith(_.trimStart(data.tag), " ")) {
      const tag = _.camelCase(data.tag);
      if (_.indexOf(data.tags, tag) === -1) data.tags.push(tag);
      data.tag = "";
    }
    return data;
  };
  deleteTag = tag => {
    const data = { ...this.state.data };
    _.remove(data.tags, function(n) {
      return n === tag;
    });
    this.setState({ data });
  };
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    this.setState(prevState => {
      const { data } = prevState;
      data[input.name] = input.value;
      if (input.name === "tag") return this.addTag(data);
      return data;
    });
  };

  render() {
    const { data, error } = this.state;
    return (
      <Form autoComplete="off">
        <InputLabel
          id="linkID"
          label="Link"
          error={error.link}
          name="link"
          value={data.link}
          onChange={this.handleChange}
        />
        <InputLabel
          id="tagID"
          label="Tag"
          name="tag"
          error={error.tag}
          value={data.tag}
          onChange={this.handleChange}
        />
        <div>
          {this.state.data.tags.map(tag => (
            <Tag
              text={tag}
              key={tag}
              handleDelete={() => this.deleteTag(tag)}
            />
          ))}
        </div>
        <InputLabel
          id="descriptionID"
          label="Description"
          name="description"
          error={error.description}
          value={data.description}
          onChange={this.handleChange}
        />
        <Button left>Shorten</Button>
      </Form>
    );
  }
}

export default LinkCreator;
