import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "@freenow/wave";

export default {
  title: "Form Elements/Checkbox",
  component: Checkbox,
  argTypes: {
    label: {
      description: "Sets a label for the checkbox",
    },
    defaultChecked: {
      description: "Sets the state of the checkbox to selected by default",
      options: [true, false],
      control: { type: "radio" },
    },
    disabled: {
      description: "Sets the state of the checkbox disabled",
      options: [true, false],
      control: { type: "radio" },
    },
    error: {
      description: "Sets styles to indicate an error",
      options: [true, false],
      control: { type: "radio" },
    },
    indeterminate: {
      description: "Sets the checkbox in the indeterminate state",
      options: [true, false],
      control: { type: "radio" },
    },
    size: {
      description: "Adjusts the size of the checkbox label",
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    textVerticalAlign: {
      description: "Adjusts the vertical alignment of the checkbox",
      options: ["top", "center"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default state",
  defaultChecked: false,
};

/**
 * You can use me several times on a page for neutral actions.
 */
export const DefaultSelected = Template.bind({});
DefaultSelected.args = {
  label: "Default selected",
  defaultChecked: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Error state",
  defaultChecked: false,
  error: true,
};

export const ErrorSelected = Template.bind({});
ErrorSelected.args = {
  label: "Error selected",
  defaultChecked: true,
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled state",
  defaultChecked: false,
  disabled: true,
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  label: "Disabled selected",
  defaultChecked: true,
  disabled: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: "Indeterminate selected state",
  defaultChecked: true,
  indeterminate: true,
};

export const IndeterminateError = Template.bind({});
IndeterminateError.args = {
  label: "Indeterminate selected state",
  defaultChecked: true,
  indeterminate: true,
  error: true,
};

export const IndeterminateDisabled = Template.bind({});
IndeterminateDisabled.args = {
  label: "Indeterminate selected state",
  defaultChecked: true,
  indeterminate: true,
  disabled: true,
};

