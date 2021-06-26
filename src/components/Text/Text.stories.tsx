import React from "react";
import { Story, Meta } from "@storybook/react";

import { Text, TextProps } from "./Text";

export default {
  title: "Text",
  component: Text,
  argTypes: {
    // color: {
    //   name: "color",
    //   table: {
    //     type: {
    //       summary: "string",
    //       detail: "Color from the theme, or CSS color",
    //     },
    //     defaultValue: { summary: "#FFFFFF" },
    //   },
    //   control: {
    //     type: null,
    //   },
    // },
    // fontSize: {
    //   name: "fontSize",
    //   table: {
    //     type: { summary: "string", detail: "Fontsize in px or em" },
    //     defaultValue: { summary: "14px" },
    //   },
    //   control: {
    //     type: null,
    //   },
    // },
    // fontWeight: {
    //   name: "fontWeight",
    //   table: {
    //     type: { summary: "number", detail: "fontWeight" },
    //     defaultValue: { summary: 400 },
    //   },
    //   control: {
    //     type: null,
    //   },
    // },
    // label: {
    //   name: "label",
    //   table: {
    //     type: {
    //       summary: "string",
    //       detail: "label",
    //     },
    //     defaultValue: { summary: "primary" },
    //   },
    //   control: {
    //     type: null,
    //   },
    // },
    // lineHeight: {
    //   name: "lineHeight",
    //   table: {
    //     type: {
    //       summary: "string",
    //       detail: "lineHeight",
    //     },
    //     defaultValue: { summary: "18px" },
    //   },
    //   control: {
    //     type: null,
    //   },
    // },
    // variant: {
    //   name: "variant",
    //   table: {
    //     type: {
    //       summary: "string",
    //       detail: "variant",
    //     },
    //     defaultValue: { summary: "primary" },
    //   },
    //   control: {
    //     type: null,
    //   },
    // },
    
  },
} as Meta;

export const Default: React.FC = () => {
  return (
    <div>
      <Text label="default" ></Text>
      <Text variant="primary" fontSize="12px" label="primary12" ></Text>
      <Text variant="primary" label="primary14" ></Text>
      <Text variant="primary" fontWeight= {600} label="primary14_W600" ></Text>
      <Text variant="primary" fontSize="16px" lineHeight= "22.72px" fontWeight= {600} label="primary16_W600" ></Text>
      <Text variant="primary" fontSize="18px" lineHeight= "25.56px" fontWeight= {600} label="primary18_W600" ></Text>
      <Text variant="primary" fontSize="20px" lineHeight= "28.4px" fontWeight= {600} label="primary20_W600" ></Text>
      <Text variant="primary" fontSize="32px" lineHeight= "45.44px" fontWeight= {600} label="primary32_W600" ></Text>
      <Text variant="secondary" color= "#D7D7D7" fontSize="12px" label="secondary12"></Text>
      <Text variant="secondary" color= "#D7D7D7" fontSize="12px" fontWeight= {600} label="secondary12_W600"></Text>
      <Text variant="secondary" color= "#D7D7D7" label="secondary14"></Text>
      <Text variant="secondary" color= "#D7D7D7" fontWeight= {600} label="secondary14_W600"></Text>
      <Text variant="label" color= "#C7BEB7" fontSize="12px" label="label12"></Text>
      <Text variant="label" color= "#C7BEB7" label="label14"></Text>
      <Text variant="error" color= "#f65151" fontSize="12px" label="error12"></Text>
      <Text variant="error" color= "#f65151" label="error14"></Text>
      <Text variant="tag" color= "#e6813c" fontSize="12px" label="tag12"></Text>
      <Text variant="tag" color= "#fdbb35" label="tag14"></Text>
    </div>
  );
};
