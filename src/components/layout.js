import React from "react";
import { Link } from "gatsby";

export default ({ children }) => (
  <div>
    <Link to={`/`}>About me</Link>
    <Link to={`/lastProject/`}>Last project</Link>
    <Link to={`/contact/`}>Contact me</Link>
    {children}
  </div>
);
