import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { Projects, Title, Subtitle, Content } from "./styles/lastProject.style";

export default ({ data }) => (
  <Layout>
    <Projects>
      <Title>{data.prismicProject.data.title.text}</Title>
      <Subtitle>{data.prismicProject.data.subtitle.text}</Subtitle>
      <Content>{data.prismicProject.data.content1.text}</Content>
      <Content>{data.prismicProject.data.content2.text}</Content>
    </Projects>
  </Layout>
);

export const query = graphql`
  {
    prismicProject(uid: { eq: "estella-and-ju" }) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        content1 {
          text
        }
        content2 {
          text
        }
      }
    }
  }
`;
