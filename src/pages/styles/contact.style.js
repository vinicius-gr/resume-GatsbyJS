import styled from "styled-components";

export const Form = styled.form`
  width: 400px;
  height: 540px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  margin: calc(30vh - 220px) auto;
  padding: 40px 60px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
`;

export const Title = styled.h3`
  margin: 10px 0;
  padding-bottom: 10px;
  width: 180px;
  color: #123456;
  border-bottom: 3px solid #123456;
`;

export const Button = styled.button`
  float: right;
  padding: 8px 12px;
  margin: 8px 0 0;
  border: 2px solid #123456;
  background: 0;
  color: #123456;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background: #123456;
    color: #fff;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background: none;
  outline: none;
  resize: none;
  border: 0;
  transition: all 0.3s;
  border-bottom: 2px solid #123456;

  :focus {
    border-bottom: 2px solid #123456;
  }
`;

export const Label = styled.p`
  :before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: #123456;
  }
`;