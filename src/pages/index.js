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
      <Photo src={data.prismicAbout.data.image.url} />
      <Name>{data.prismicAbout.data.title.text}</Name>
      <Subtitle>{data.prismicAbout.data.subtitle.text}</Subtitle>
      <Bio>{data.prismicAbout.data.description.text}</Bio>

      <hr style={{ margin: "20px" }} />

      <Subtitle style={{ margin: "25px" }}>
        These are some of my Skills
      </Subtitle>
      <Skills>
        <li>
          <FaNodeJs />
        </li>
        <li>
          <FaHtml5 />
        </li>
        <li>
          <FaCss3Alt />
        </li>
        <li>
          <FaJs />
        </li>
        <li>
          <FaJava />
        </li>
        <li>
          <FaAngular />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <FaPython />
        </li>
        <li style={{ gridColumnStart: "2" }}>
          <FaGit />
        </li>
        <li>
          <FaCameraRetro />
        </li>
      </Skills>
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
