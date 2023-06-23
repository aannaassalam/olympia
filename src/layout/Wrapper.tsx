import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <Box>
      <Header />
      {children}
      {/* <Footer/> */}
    </Box>
  );
}
