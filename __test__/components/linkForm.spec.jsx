import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LinkForm from '../../src/components/linkForm';

describe('LinkForm component', () => {
  const props = {
    buttonLabel: 'button',
    onSubmit: () => {},
    loading: false,
  };

  describe('LinkForm component initial', () => {
    const linkForm = shallow(<LinkForm {...props} />);
    it('render correctly component', () => {
      expect(shallowToJson(linkForm)).toMatchSnapshot();
    });
    it('Not render <ButtonAddTag />', () => {
      expect(linkForm.find('ButtonAddTag')).toHaveLength(0);
    });
    it('Not render <Tags />', () => {
      expect(linkForm.find('Tags')).toHaveLength(0);
    });
  });

  describe('LinkForm component isLoading', () => {
    const nextProps = {
      ...props,
      loading: true,
    };
    const linkForm = shallow(<LinkForm {...nextProps} />);
    it('button disabled', () => {
      expect(linkForm.find('Button').props().disabled).toEqual(true);
    });
  });

  describe('LinkForm component is not Loading', () => {
    const linkForm = shallow(<LinkForm {...props} />);
    it('button is not disabled', () => {
      expect(linkForm.find('Button').props().disabled).toEqual(false);
    });
  });

  describe('Change input[name=tag]', () => {
    const linkForm = shallow(<LinkForm {...props} />);
    const tagInput = linkForm.find('Input[name="tag"]');
    const event = { target: { value: 'testTag' } };
    tagInput.simulate('change', event);
    it('change inputTag value', () => {
      expect(linkForm.state('tag')).toEqual('testTag');
      expect(linkForm.find('Input[name="tag"]').props().value).toEqual('testTag');
    });
    it('Render <ButtonAddTag />', () => {
      expect(linkForm.find('ButtonAddTag')).toHaveLength(1);
    });
    it('Set error for Input[name=tag] when length tag is max', () => {
      tagInput.simulate('change', {
        target: { value: 'testTaggggggggggggggggggggggggggggggggggggggg' },
      });
      expect(linkForm.state().errors.tag).not.toEqual('');
    });
  });

  describe('Call addTag handler when click <ButtonAddTag />', () => {
    const linkForm = shallow(<LinkForm {...props} />);
    const tagInput = linkForm.find('Input[name="tag"]');
    const event = { target: { value: 'testTag' } };
    tagInput.simulate('change', event);
    const buttonAddTag = linkForm.find('ButtonAddTag');
    buttonAddTag.simulate('click');
    it('Change state. Add tag in tags array, tag reset', () => {
      expect(linkForm.state().tag).toEqual('');
      expect(linkForm.state().tags).toEqual(['testTag']);
    });
    it('Render <Tags/> component', () => {
      expect(linkForm.find('Tags')).toHaveLength(1);
    });
    it('Unmounting <ButtonAddTag/> component', () => {
      expect(linkForm.find('ButtonAddTag')).toHaveLength(0);
    });
    it('Dont add tag if tag exists', () => {
      tagInput.simulate('change', event);
      buttonAddTag.simulate('click');
      expect(linkForm.state().tags).toHaveLength(1);
    });
  });

  describe('Call deleteTag handler', () => {
    const linkForm = shallow(<LinkForm {...props} />);
    linkForm.setState({ tags: ['testTag'] });
    linkForm.instance().deleteTag('testTag');
    it('Unmounting <Tags/> component', () => {
      expect(linkForm.find('Tags')).toHaveLength(0);
    });
    it('Delete tag from tags state', () => {
      expect(linkForm.state().tags).toEqual([]);
    });
    it('not delete tag if tag missing', () => {
      linkForm.instance().deleteTag('testTag');
      expect(linkForm.state().tags).toEqual([]);
    });
  });

  describe('call handleSubmit when form submit', () => {
    const onSubmit = jest.fn();
    const nextProps = {
      ...props,
      onSubmit,
    };

    describe('call handleSubmit if not property linkDate', () => {
      const target = {
        title: { value: 'testTitle' },
        url: { value: 'https://testUrl' },
        description: { value: 'testDescription' },
      };
      const linkForm = shallow(<LinkForm {...nextProps} />);
      const form = linkForm.find('Form');
      form.simulate('submit', {
        preventDefault: () => {},
        target,
      });
      it('call property function onSubmit when form submit and not error', () => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
      it('reset date when call onSubmit and not error', () => {
        expect(target).toEqual({
          title: { value: '' },
          url: { value: '' },
          description: { value: '' },
        });
      });
      it('Not call property function onSubmit if there are error validate', () => {
        form.simulate('submit', {
          preventDefault: () => {},
          target,
        });
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });

    it('Dont reset date if there is props.linkData', () => {
      const linkData = {
        title: 'testTitle',
        url: 'testUrl',
        description: 'testDescr',
        tags: ['tag'],
      };
      const target = {
        title: { value: 'testTitle' },
        url: { value: 'https://testUrl' },
        description: { value: 'testDescription' },
      };
      const linkForm = shallow(<LinkForm {...nextProps} linkData={linkData} />);
      const form = linkForm.find('Form');
      form.simulate('submit', {
        preventDefault: () => {},
        target,
      });
      expect(target).not.toEqual({
        title: { value: '' },
        url: { value: '' },
        description: { value: '' },
      });
    });
  });
});
