import styled from "@emotion/styled";
import {
  StandardTextFieldProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StyledInput = styled(Box)`
  display: flex;
  flex-direction: column;
  > span {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 8px;
  }
  .MuiInputBase-root {
    font-size: 14px;
    text-indent: 0.01px;
    border-radius: 8px;
    color: #1a1a1a;
    &:hover {
      fieldset {
        border-color: #e6e6e6;
      }
    }
    input {
      padding: 10px 14px;

      &::placeholder {
        color: #757575;
        font-weight: 400;
        opacity: 0.8;
      }
    }
    fieldset {
      border-color: #e6e6e6;
    }
    &.Mui-focused {
      fieldset {
        border-color: #e6e6e6;
        border-width: 1px;
      }
    }
  }
`;

interface CustomInputProps extends StandardTextFieldProps {
  label: string;
}

export default function CustomInput({ label, ...others }: CustomInputProps) {
  return (
    <StyledInput>
      <Typography variant="caption">{label}</Typography>
      <TextField {...others} />
    </StyledInput>
  );
}
