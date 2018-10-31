import styled from "styled-components";

import media from "../../utils/mediaQueries.style";

export const Wrapper = styled.div`
  * {
    transition: all 150ms ease-in-out;
  }
`;

export const HeaderWrapper = styled.div`
  margin: 0;
  background-color: #fff;
  padding: 25px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  ${media.desktop`padding: 25px 5px;`};
`;

export const BodyWrapper = styled.div`
  width: 50vw;
  margin: 0 auto;
  padding: 25px;
  height: 100%;

  ${media.desktop`width: 50vw;`}
  ${media.tablet`width: 75vw;`}
  ${media.phone`width: 100vw; padding: 5vw;`}
`;

export const FooterWrapper = styled.div`
  bottom: 0;
  width: 100vw;
  color: #123456;
`;

export const Header = styled.div`
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

export const Footer = styled.div`
  width: 50vw;
  margin: 60px auto;

  * {
    text-align: center;
  }
`;

export const SocialMedias = styled.ul`
  list-style: none;
  margin: 0;
`;

export const IconLi = styled.li`
  display: inline-block;
  margin: 50px 20px -60px 0;
  margin-right:  20px;
  font-size: 20px;

  a {
    color: #123456;
  }

  a:visited {
    text-decoration: none;
    color: #123456;
  }
  svg:hover {
    text-decoration: none;
    color: #123456;
  }
  a:focus {
    text-decoration: none;
    color: #123456;
  }
`;
