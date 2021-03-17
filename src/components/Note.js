import React, { useState } from "react";
import Form from "./Form";
import { deleteNote } from "../storageActions";
import { Button, Grid, makeStyles, Typography, Paper } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    border: "5px solid skyBlue",
  },
  header: {
    backgroundColor: "#f3f3f3",
    padding: "0 1rem 0 1rem",
  },
  note: {
    marginTop: "1rem",
    padding: "5rem",
  },
  button: {
    margin: ".2rem",
  },
});

const Note = ({ note, setReload, reloadState }) => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);

  const deleteHandler = () => {
    deleteNote(note.title);
    setReload(true);
  };

  const editHandler = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setReload(!reloadState);
  };

  return (
    <Paper className={classes.root}>
      <Grid container direction="row" justify="center" alignContent="center">
        <Grid
          className={classes.header}
          item
          container
          justify="space-between"
          xs={12}
        >
          <Typography variant="h4">{note.title}</Typography>
          <Typography variant="subtitle1">{note.date.dateAdded}</Typography>
          <Grid item>
            <Button
              className={classes.button}
              color="primary"
              onClick={editHandler}
            >
              <Edit fontSize="large" />
            </Button>
            <Button
              className={classes.button}
              color="secondary"
              onClick={deleteHandler}
            >
              <Delete fontSize="large" />
            </Button>
          </Grid>
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Typography className={classes.note} variant="body1">
            {note.note}
          </Typography>
        </Grid>
      </Grid>
      <Form
        open={dialogOpen}
        handleClose={handleClose}
        title={note.title}
        note={note.note}
      />
    </Paper>
  );
};

export default Note;
