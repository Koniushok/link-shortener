// @flow
import React, { Component } from "react";
import styled from "styled-components";
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
const TagButton = styled(XCircle)`
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
const Tag = ({ text }: { text: string }) => (
  <TagWrapper>
    <span>{text}</span>
    <TagButton />
  </TagWrapper>
);

type State = {
  data: {
    link: string,
    description: string,
    tags: string
  },
  error: {
    link: string,
    description: string,
    tags: string
  }
};
class LinkCreator extends Component<{}, State> {
  state = {
    data: {
      link: "link",
      description: "description",
      tags: "tags"
    },
    error: {
      link: "Error",
      description: "",
      tags: "Error"
    }
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    this.setState(prevState => {
      const { data } = prevState;
      data[input.name] = input.value;
      return { data };
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
          id="tagsID"
          label="Tags"
          name="tags"
          error={error.tags}
          value={data.tags}
          onChange={this.handleChange}
        />
        <div>
          <Tag text="tag1" />
          <Tag text="tag1" />
          <Tag text="tag1" />
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
