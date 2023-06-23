import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";
import React from "react";

const StyledButton = styled(Button)`
  &.MuiButton-contained {
    padding: 16px 48px;
    background-color: var(--primary-green);
    color: var(--text-color);
    border-radius: 16px;
    box-shadow: none;
    &:hover {
      background-color: var(--hover-color);
    }
  }

  &.MuiButton-text {
    padding: 16px 10px 16px 16px;
    color: var(--text-color);
    &:hover {
      color: var(--text-green-color);
      background-color: transparent;
    }
  }
`;

interface buttonProps extends ButtonProps {
  children: JSX.Element;
  text?: boolean;
}

export default function CustomButton({
  children,
  ...others
}: buttonProps): JSX.Element {
  return <StyledButton {...others}>{children}</StyledButton>;
}
