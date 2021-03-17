import React, { useState } from "react";
import Header from "./components/Header";
import NotesGrid from "./components/NotesGrid";
import "./App.css";
import { Box, Container } from "@material-ui/core";

const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Box>
      <Container>
        <Header setLoading={setLoading} loading={loading} />
        <NotesGrid loading={loading} />
      </Container>
    </Box>
  );
};

export default App;
