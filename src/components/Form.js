import React, { useState } from "react";
import { saveNote } from "../storageActions";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles({
  dialogText: {
    marginTop: "1rem",
  },
});

const Form = ({ open, handleClose, title, note }) => {
  const classes = useStyles();

  const [noteTitle, setNoteTitle] = useState(title);
  const [noteText, setNoteText] = useState(note);

  const addNote = () => {
    saveNote(noteTitle, noteText);
    setNoteText("");
    setNoteTitle("");
    handleClose();
  };

  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog"
    >
      <DialogTitle id="form-dialog">
        {title !== "" ? "Edit Note" : "Create a New Note"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText className={classes.dialogText}>
          {title !== "" ? "Edit note title" : "Enter a title for the new note"}
        </DialogContentText>
        <TextField
          fullWidth
          autoFocus
          margin="dense"
          id="Title"
          label="Title"
          type="text"
          onChange={(e) => setNoteTitle(e.target.value)}
          value={noteTitle}
        />
        <DialogContentText className={classes.dialogText}>
          {title !== "" ? "Edit note details" : "Enter note details"}
        </DialogContentText>
        <TextField
          fullWidth
          margin="dense"
          id="note"
          label="Note"
          type="text"
          multiline
          rows={4}
          onChange={(e) => setNoteText(e.target.value)}
          value={noteText}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={addNote} color="primary" variant="contained">
          Add
        </Button>
        <Button onClick={handleClose} variant="outlined" color="secondary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Form;
