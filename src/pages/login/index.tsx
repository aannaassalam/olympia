import CustomInput from "@/components/CustomInput/CustomInput";
import Wrapper from "@/layout/Wrapper";
import { Container } from "@mui/material";
import React from "react";

export default function index() {
  return (
    <Wrapper>
      <Container fixed>
        <CustomInput label="Email address" placeholder="Valid email address" />
      </Container>
    </Wrapper>
  );
}
