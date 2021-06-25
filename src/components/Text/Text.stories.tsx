import React from "react";
import { Story, Meta } from "@storybook/react";

import { Text, TextProps } from "./Text";


export default {
  title: "Text",
  component: Text,
  argTypes: {
    // onClick: { action: "clicked" },
  },
} as Meta;

// const Template: Story<TextProps> = (args) => <Text {...args} />;

// export const Text1 = Template.bind({});
// Text1.args = {
//     type: "primarypara",
//     number:"12",
//     label:"primary para",
// };

export const Default: React.FC = () => {
    return (
      <div>
        <Text type="para" number="12" label="normal para"></Text>
        <Text type="whitePara" number="12" label="white para"></Text> 
        <Text type="secondarypara" number="12" label="secondary para"></Text> 
        <Text type="primarypara" number="12" label="primary para"></Text> 
        <Text type="label" number="12" label="label"></Text> 
        <Text type="tag" number="12" label="tag"></Text> 
        <Text type="error" number="12" label="error"></Text> 
        <Text type="secondaryHead1" number="12" label="secondary Head 1"></Text> 
        <Text type="secondaryHead2" number="12" label="secondary Head 2"></Text> 

        <Text type="primaryhead" number="14" label="primary head"></Text> 
        <Text type="secondaryHead1" number="14" label="secondary Head 1"></Text> 
        <Text type="secondaryHead2" number="14" label="secondary Head 2"></Text> 
        <Text type="para" number="14" label="para"></Text> 
        <Text type="error" number="14" label="error"></Text>

        <Text type="para" number="16" label="para"></Text>   

        <Text type="head" number="18" label="head"></Text> 
        <Text type="head" number="20" label="head"></Text> 
        <Text type="head" number="32" label="head"></Text> 
      </div>
    );
  };

