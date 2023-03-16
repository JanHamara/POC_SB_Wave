import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, TextButton } from '@freenow/wave';

export default {
  title: 'Basic Elements/Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'Sets the button variant',
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' }
    },
    size: {
      description: 'Sets the button size',
      options: ['small', 'medium'],
      control: { type: 'radio' }
    },
    inverted: {
      description: 'Inverts the button for dark mode',
      options: [true, false],
      control: { type: 'radio' }
    }
  },
  subcomponents: { TextButton },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
const TextButtonTemplate: ComponentStory<typeof TextButton> = (args) => <TextButton {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Button'
};


export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  size: 'small',
  children: 'Button'
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  variant: 'secondary',
  size: 'small',
  children: 'Button'
};

export const DangerSmall = Template.bind({});
DangerSmall.args = {
  variant: 'danger',
  size: 'small',
  children: 'Button'
};

export const DefaultTextButton = TextButtonTemplate.bind({});
DefaultTextButton.args = {
  variant: 'default',
  children: 'Text Button'
};

export const DangerTextButton = TextButtonTemplate.bind({});
DangerTextButton.args = {
  variant: 'danger',
  children: 'Text Button'
};