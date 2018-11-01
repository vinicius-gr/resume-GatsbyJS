import React from "react";
import { graphql } from "gatsby";

import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaReact,
  FaAngular,
  FaCameraRetro,
  FaGit,
  FaPython
} from "react-icons/fa";

import Layout from "../components/layout";
import {
  About,
  Photo,
  Name,
  Subtitle,
  Bio,
  Skills
} from "./styles/index.style";

export default ({ data }) => (
  <Layout>
    <About>
      <Name>{data.prismicAbout.data.title.text}</Name>
      <Subtitle>{data.prismicAbout.data.subtitle.text}</Subtitle>
      <Bio>{data.prismicAbout.data.description.text}</Bio>
    </About>
  </Layout>
);

export const query = graphql`
  {
    prismicAbout(uid: { eq: "about-vinicius" }) {
      data {
        title {
          text
        }
        subtitle {
          text
        }
        description {
          text
        }
        image {
          url
        }
      }
    }
  }
`;
