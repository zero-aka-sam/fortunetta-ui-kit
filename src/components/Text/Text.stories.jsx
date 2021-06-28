import React from "react";
import { Story } from "@storybook/react";

import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
   
  },
} ;

export const Default = () => {
  return (
    <div>
      <Text label="default" ></Text>
      <Text variant="primary" fontSize="12px" label="primary12" ></Text>
      <Text variant="primary" label="primary14" ></Text>
      <Text variant="primary" fontWeight= {600} label="primary14_W600" ></Text>
      <Text variant="primary" fontSize="16px" lineHeight= "22px" fontWeight= {600} label="primary16_W600" ></Text>
      <Text variant="primary" fontSize="18px" lineHeight= "25px" fontWeight= {600} label="primary18_W600" ></Text>
      <Text variant="primary" fontSize="20px" lineHeight= "28px" fontWeight= {600} label="primary20_W600" ></Text>
      <Text variant="primary" fontSize="32px" lineHeight= "45px" fontWeight= {600} label="primary32_W600" ></Text>
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
