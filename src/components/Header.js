/** @jsx jsx */
import { Link, jsx } from "theme-ui";
import React from "react";

const Header = () => {
  return (
  <div style={{ position: "fixed", top: 0, width: "100%", backgroundColor: "#030506", zIndex: 1000 }}>
        <header
          sx={{
            display: "flex",
            alignItems: "center",
            mx: 4,
            my: 2,
          }}
        >
          <span sx={{ color: "#fff", fontWeight: "600" }}>Hello Beats</span>
          <div sx={{ mx: "auto" }} />
          <Link
            to="/about"
            sx={{
              variant: "styles.navlink",
              p: 2,
            }}
          >
            <span sx={{ color: "#fff", fontWeight: "600" }}>About</span>
          </Link>
        </header>
  </div>
  );
};
export default Header;
