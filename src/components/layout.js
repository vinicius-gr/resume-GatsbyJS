import React from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

const Wrapper = styled.div`
  * {
    transition: all 150ms ease-in-out;
  }
`;

const HeaderWrapper = styled.div`
  margin: 0;
  background-color: #fff;
  padding: 25px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  ${media.desktop`padding: 25px 5px;`};
`;

const BodyWrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding: 25px;
  

  ${media.desktop`width: 50vw;`}
  ${media.tablet`width: 75vw;`}
  ${media.phone`width: 95vw;`}
`;

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

const Header = styled.div`
  width: 50vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  a{
    text-align: center;
  }

  h5 {
    color: rgb(18, 52, 86);
    text-decoration: none;
    display: inline-block;
    text-align: center;
    margin: 0;
  }

  ${media.desktop`width: 50vw;`}
  ${media.tablet`width: 75vw;`}
  ${media.phone`width: 95vw;`}
`;

const Footer = styled.div`
  width: 50vw;
  margin: 0 auto;

  * {
    text-align: center;
  }
`;

const SocialMedias = styled.ul`
  list-style: none;

  :hover {
    svg {
      color: #999;
    }
  }
`;

const IconLi = styled.li`
  display: inline;
  margin: 15px;
  font-size: 20px;

  a {
    color: #666;
  }

  a:visited {
    text-decoration: none;
    color: #666;
  }
  svg:hover {
    text-decoration: none;
    color: #333 !important;
  }
  a:focus {
    text-decoration: none;
    color: #333;
  }
`;

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
