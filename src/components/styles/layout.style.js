import styled from "styled-components";

import media from "../../utils/medias.style";

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
  width: 50%;
  margin: 0 auto;
  padding: 25px;

  ${media.desktop`width: 50%;`}
  ${media.tablet`width: 75%;`}
  ${media.phone`width: 95%; padding: 5%;`}
`;

export const FooterWrapper = styled.div`
  bottom: 0;
  width: 100%;
  color: #333;
`;

export const Header = styled.div`
  width: 50%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  a{
    text-align: center;
  }

  h5 {
    color: #333;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    margin: 0;
  }

  ${media.desktop`width: 50%;`}
  ${media.tablet`width: 75%;`}
  ${media.phone`width: 95%;`}
`;

export const Footer = styled.div`
  width: 50%;
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
  margin:  20px;
  font-size: 20px;

  a {
    color: #333;
  }

  a:visited {
    text-decoration: none;
    color: #333;
  }
  svg:hover {
    text-decoration: none;
    color: #333;
  }
  a:focus {
    text-decoration: none;
    color: #333;
  }
`;
