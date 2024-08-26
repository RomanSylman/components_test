
import { Meta, StoryFn } from '@storybook/react';
import InputGroup from '../components/InputGroup/InputGroup';
import InputText from '../components/InputText/InputText';
import InputLabel from '../components/InputLabel/InputLabel';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
} as Meta;

const Template: StoryFn = (args) => (
  <InputGroup {...args}>
    <InputLabel text="Label:" htmlFor="input-id" />
    <InputText value="" onChange={() => {}} placeholder="Enter text..." />
  </InputGroup>
);

export const Default = Template.bind({});
Default.args = {};