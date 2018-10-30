import React from "react";
import { Link } from "gatsby";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
  Wrapper,
  HeaderWrapper,
  Header,
  BodyWrapper,
  Footer,
  FooterWrapper,
  IconLi,
  SocialMedias
} from "./styles/layout.style";

export default ({ children }) => (
  <Wrapper>
    <HeaderWrapper>
      <Header>
        {" "}
        <Link to={`/`}>
          <h5>About</h5>
        </Link>
        <Link to={`/lastProject/`}>
          <h5>Projects</h5>
        </Link>
        <Link to={`/contact/`}>
          <h5>Contact</h5>
        </Link>
      </Header>
    </HeaderWrapper>
    <BodyWrapper>{children}</BodyWrapper>
    <FooterWrapper>
      <Footer>
        <SocialMedias>
          <IconLi>
            <a href="https://github.com/vinicius-gr">
              <FaGithub />
            </a>
          </IconLi>
          <IconLi>
            <a href="https://www.linkedin.com/in/vinicius-gr/">
              <FaLinkedin />
            </a>
          </IconLi>
        </SocialMedias>
        <p>all work © Vinicius Rocha 2018 • all rights reserved</p>
      </Footer>
    </FooterWrapper>
  </Wrapper>
);
