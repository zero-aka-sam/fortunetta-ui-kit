import React from "react";
import { Story, Meta } from "@storybook/react";

import { Modals, ModalsProps } from "./Modals";


export default {
  title: "Widgets/Modal",
  component: Modals,
  argTypes: {
    // onClick: { action: "clicked" },
  },
} as Meta;

const Template: Story<ModalsProps> = (args) => <Modals {...args} />;

export const Modal1 = Template.bind({});
Modal1.args = {
    title: "Payment Processing",
    modalDesc : "Your payment is processing. It usually takes few seconds to complete the payment. Please be patient if its taking a bit longer than we expected.",
    modalFooter : "Authenticating your payment",
    error: false,
};

export const Modal2 = Template.bind({});
Modal2.args = {
    title: "Payment Complete",
    variant:"complete",
    modalDesc : "Congratulations, your betting for 2X Roulette is complete. You can continue with your roll now.",
    modalFooter : "Secure paymet by Metamask",
    error: false,
};
export const Modal3 = Template.bind({});
Modal3.args = {
    title: "Payment Incomplete",
    variant:"incomplete",
    modalDesc : "We’re sorry, your payment couldnot take place. It might be due to some technical error. Please retry now or try again sometime later.",
    modalFooter : "Error code #1233",
    error: true,
};
