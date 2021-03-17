import React, { useState } from "react";
import Form from "./Form";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
    marginBottom: "2rem",
  },
  btnText: {
    marginRight: "5px",
    fontWeight: "700",
  },
});

const Header = ({ setLoading, loading }) => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = () => {
    setDialogOpen(false);
    setLoading(!loading);
  };

  const handleOpen = () => {
    setDialogOpen(true);
  };

  return (
    <Box className={classes.root}>
      <Grid container direction="row" justify="center" alignContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2" align="center" component="h1">
            Notes App
          </Typography>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignContent="center"
          xs={12}
          md={6}
        >
          <Button color="primary" size="large" onClick={handleOpen}>
            <Typography variant="body1" className={classes.btnText}>
              Add Note
            </Typography>
            <AddCircle style={{ fontSize: "48px" }} />
          </Button>
        </Grid>
      </Grid>
      <Form
        open={dialogOpen}
        handleClose={handleClose}
        setLoading={setLoading}
        title={""}
        note={""}
      />
    </Box>
  );
};

export default Header;
