import React, { useEffect, useState } from "react";
import { getNotes } from "../storageActions";
import SearchBar from "./SearchBar";
import Note from "./Note";
import {
  Box,
  Grid,
  CircularProgress,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { RotateLeft } from "@material-ui/icons";

const useStyles = makeStyles({
  btnText: {
    marginRight: "5px",
    fontWeight: "700",
  },
});

const NotesGrid = ({ loading }) => {
  const classes = useStyles();

  const [notes, setNotes] = useState([]);
  const [reload, setReload] = useState(true);
  const [searchReload, setSearchReload] = useState(true);

  // eslint-disable-next-line
  useEffect(() => {
    const notesArray = getNotes();
    notesArray.length > 0 ? setNotes(notesArray) : setNotes([]);
    setReload(false);
  }, [loading, reload]);

  useEffect(() => {
    setSearchReload(false);
  }, [searchReload]);

  return (
    <Box>
      {reload ? (
        <CircularProgress color="primary" />
      ) : (
        <Grid container spacing={2} direction="row" justify="center">
          <Grid item container justify="center" xs={8}>
            <SearchBar
              setNotes={setNotes}
              searchReload={searchReload}
              setSearchReload={setSearchReload}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              size="large"
              color="primary"
              onClick={() => setReload(!reload)}
            >
              <Typography className={classes.btnText} variant="body1">
                Reload Notes
              </Typography>
              <RotateLeft style={{ fontSize: "48px" }} />
            </Button>
          </Grid>
          {notes.length <= 0 ? (
            <Grid item xs={12}>
              <Typography align="center" variant="h6">
                No notes have been made
              </Typography>
            </Grid>
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
