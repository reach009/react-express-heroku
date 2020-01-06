import React from "react";
import CopyrightSharpIcon from "@material-ui/icons/CopyrightSharp";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright <CopyrightSharpIcon /> {year}
      </p>
    </footer>
  );
}

export default Footer;
