import React from "react";
import { Story, Meta } from "@storybook/react";

import { Modals, ModalsProps } from "./Modals";


export default {
  title: "Modals",
  component: Modals,
  argTypes: {
    // onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ModalsProps> = (args) => <Modals {...args} />;

export const Modal1 = Template.bind({});
Modal1.args = {
    modalHead: "Payment Processing",
    modalDesc : "Your payment is processing. It usually takes few seconds to complete the payment. Please be patient if its taking a bit longer than we expected.",
    modalFoot1 : "Authenticating your payment",
    headImg: "",
    footImg1: "",
    error: false,
};

