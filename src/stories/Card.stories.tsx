import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "@freenow/wave";

export default {
  title: "Basic Elements/Card",
  component: Card,
  argTypes: {
    children: {
      description: 'Contents of the Card element'
    },
    width: {
      description: "You can set the width of the Card container directly with width prop"
    },
    height: {
      description: "You can set the height of the Card container directly with height prop"
    },
    level: {
      description: "Set the visual depth of the card by adding a shadow",
      options: [0, 100, 200, 300],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Card content",
  width: '22rem',
  height: '10rem',
};

export const Level100 = Template.bind({});
Level100.args = {
  level: 100,
  width: '22rem',
  height: '10rem',
  children: "Card content",
};

export const Level200 = Template.bind({});
Level200.args = {
  level: 200,
  width: '22rem',
  height: '10rem',
  children: "Card content",
};

export const Level300 = Template.bind({});
Level300.args = {
  level: 300,
  width: '22rem',
  height: '10rem',
  children: "Card content",
};
