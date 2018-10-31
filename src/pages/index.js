import React from "react";
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

export default props => (
  <Layout>
    <About>
      <Photo />
      <Name>Vinicius Gonzaga Rocha</Name>
      <Subtitle>Full Stack Developer / Photographer</Subtitle>
      <Bio>
        Hi there! I'm Computer Science student who loves to build new things and
        capture moments of life that deserve to be recordered. I'm also a
        cooking enthusiast always trying new foods. I'm from a very small
        country called Brazil, and we have a lot o places to travel down here!
      </Bio>

      <hr style={{ margin: "20px" }}/>

      <Subtitle style={{ margin: "25px" }}>These are some of my Skills</Subtitle>
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
