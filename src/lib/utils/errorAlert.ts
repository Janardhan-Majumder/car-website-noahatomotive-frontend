import { message } from "antd";

export const errorAlert = (props: { error: Error | string }) => {
  const errorMessage = props.error instanceof Error ? props.error.message : props.error;
  message.open({
    type: "error",
    content: errorMessage,
    duration: 3,
  });
};