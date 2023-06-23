import CustomButton from "@/components/CustomButton/CustomButton";
import styled from "@emotion/styled";
import { Box, List, ListItem, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../assets/O logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const StyledHeader = styled(Stack)`
  padding: 16px;
  border-bottom: 1px solid rgba(141, 213, 0, 0.34);
  box-shadow: rgba(170, 255, 0, 0.04) 0px 24px 48px -4px,
    rgba(170, 255, 0, 0.04) 0px 12px 24px -4px,
    rgba(170, 255, 0, 0.04) 0px 8px 16px -4px,
    rgba(170, 255, 0, 0.04) 0px 4px 8px -2px,
    rgba(170, 255, 0, 0.64) 0px 0px 1px 0px,
    rgba(170, 255, 0, 0.04) 0px 48px 96px -4px;
  img {
    height: 40px;
    width: 40px;
  }
  .brand {
    font-size: 22px;
    line-height: 35px;
  }
  .header_btns {
    margin-left: auto;
    .login_arrow {
      transform: rotate(-45deg);
      width: 18px;
      height: 18px;
      margin-left: 5px;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader direction="row" alignItems="center">
      <Stack direction="row" alignItems="flex-end">
        <Image src={logo} alt="logo" width={163} height={163} />
        <Typography variant="caption" className="brand">
          lympia
        </Typography>
      </Stack>
      <List disablePadding>
        <ListItem></ListItem>
      </List>
      <Stack direction="row" className="header_btns">
        <CustomButton variant="text">
          <Typography variant="caption">
            Log in
            <FontAwesomeIcon
              icon={faArrowRight}
              className="login_arrow"
              size="2x"
            />
          </Typography>
        </CustomButton>
        <CustomButton variant="contained" sx={{ marginLeft: "15px" }}>
          <Typography variant="caption">Sign up</Typography>
        </CustomButton>
      </Stack>
    </StyledHeader>
  );
}
