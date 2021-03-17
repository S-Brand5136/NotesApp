import React, { useEffect, useState } from "react";
import { getNotes } from "../storageActions";
import Note from "./Note";
import { Box, Grid, CircularProgress } from "@material-ui/core";

const NotesGrid = ({ loading }) => {
  const [notes, setNotes] = useState([]);
  const [reload, setReload] = useState(true);

  // eslint-disable-next-line
  useEffect(() => {
    const notesArray = getNotes();
    notesArray.length > 0 ? setNotes(notesArray) : setNotes([]);
    setReload(false);
  }, [loading, reload]);

  return (
    <Box>
      {reload ? (
        <CircularProgress color="primary" />
      ) : (
        <Grid container spacing={2} direction="row" justify="center">
          {notes.length <= 0 ? (
            <div>No notes have been made</div>
          ) : (
            notes.map((note) => (
              <Grid item xs={12} key={note.title}>
                <Note note={note} setReload={setReload} reloadState={reload} />
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Box>
  );
};

export default NotesGrid;
