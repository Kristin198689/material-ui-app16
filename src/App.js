import React, { useState } from "react";
import NavBar from "./components/NavBar";
import WelcomeDialog from "./components/WelcomeDialog";
import { Button, Container, Typography } from "@mui/material";
import styles from "./styles/App.module.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.appContainer}>
      <NavBar />
      <Container maxWidth="sm">
        <Typography variant="h4" className={styles.welcomeText}>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
          className={styles.openDialogButton}
        >
          Открыть диалог
        </Button>
        <WelcomeDialog open={open} handleClose={handleClose} />
      </Container>
    </div>
  );
}

export default App;
