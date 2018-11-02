import styled from "styled-components";

import media from "../../utils/medias.style";

export const Projects = styled.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  width: 520px;
  margin: 0 auto;
  color: #333;

  ${media.phone`
    width: 100%;
    padding-top: 5px;
  `};
`;

export const Title = styled.h1`
  text-align: center;
  margin: 25px;

  ${media.phone`
    font-size: 27px;
  `};
`;

export const Subtitle = styled.h4`
  text-align: center;
  color: #666;
`;

export const Content = styled.p`
  text-align: justify;
  margin: 25px 0;
`;
