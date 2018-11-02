import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import { About, Name, Subtitle, Bio } from "./styles/index.style";

export default ({ data }) => (
  <Layout>
    <About>
      <Name>{data.prismicProject.data.title.text}</Name>
      <Subtitle>{data.prismicProject.data.subtitle.text}</Subtitle>
      <Bio>{data.prismicProject.data.content1.text}</Bio>
      <Bio>{data.prismicProject.data.content2.text}</Bio>
    </About>
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
