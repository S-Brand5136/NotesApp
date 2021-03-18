import React, { useState } from "react";
import { getNotesByName } from "../storageActions";
import {
  Divider,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: ".5px 2px",
    display: "flex",
    alignItems: "center",
    width: 350,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const SearchBar = ({ searchReload, setSearchReload, setNotes }) => {
  const classes = useStyles();

  const [searchInput, setSearchInput] = useState("");

  const search = (e) => {
    e.preventDefault();
    setNotes(getNotesByName(searchInput));
    setSearchReload(!searchReload);
    setSearchInput("");
  };

  return (
    <Paper
      component="form"
      onSubmit={(e) => search(e)}
      className={classes.root}
    >
      <InputBase
        className={classes.input}
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <Divider orientation="vertical" />
      <IconButton type="submit" className={classes.iconButton}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
