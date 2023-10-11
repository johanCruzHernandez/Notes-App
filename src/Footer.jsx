import React from "react";

function Footer() {
  const currentDate = new Date();

  return (
    <footer>
      <p>Copyright {currentDate}</p>
    </footer>
  );
}

export default Footer;
