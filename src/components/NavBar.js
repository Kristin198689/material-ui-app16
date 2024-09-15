import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import styles from "../styles/App.module.css";

const NavBar = () => {
  return (
    <AppBar position="static" className={styles.navBar}>
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          My Cool App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
