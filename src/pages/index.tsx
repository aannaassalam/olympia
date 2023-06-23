import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Wrapper from "@/layout/Wrapper";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Wrapper>
      <Container fixed>
        <p>hii</p>
      </Container>
    </Wrapper>
  );
}
