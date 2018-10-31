import styled from "styled-components";

export const About = styled.div`
  padding-top: 100px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  width: 450px;
  margin: 0 auto;
  color: #333;
`;

export const Photo = styled.img`
  border-radius: 50%;
  border: 3px solid #333;
  height: 200px;
  width: 200px;
  margin: 0 auto;
  background-color: #aaa;
`;

export const Name = styled.h1`
  text-align: center;
  margin: 25px;
`;

export const Subtitle = styled.h4`
  text-align: center;
    color: #666;
`;

export const Bio  = styled.p`
    text-align: justify;
    margin: 25px 0;
`;

export const Skills = styled.ul`

  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 20px auto;
  grid-gap: 20px 70px;

  font-size: 28px;
`;
