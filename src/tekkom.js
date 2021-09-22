import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  AppBar,
} from "@material-ui/core";
import Modal from "./component/Modal";

export const FontContext = createContext();

const Tekkom = () => {
  const Font = {
    primary: {
      value: "serif",
    },
    secondary: {
      value: "monospace",
    },
  };

  const [tekkom, setTekkom] = useState([]);
  const [modalShow, setModalshow] = useState(false);
  const [hobi, setHobi] = useState("");
  const [valuefont, setValuefont] = useState(Font.primary);

  const handleButton = (hobiValue) => {
    setModalshow(true);
    setHobi(hobiValue);
  };

  useEffect(() => {
    axios
      .get("infokelompok.json")
      .then((data) => {
        console.log(data.data);
        setTekkom(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <FontContext.Provider value={valuefont}>
      <div style={{ marginTop: 20 }}>
        <AppBar style={{ padding: "10px", marginBottom: "100px" }}>
          <Typography style={{ margin: "auto" }}>INFO KELOMPOK 3</Typography>
        </AppBar>
        <Modal
          hobi={hobi}
          show={modalShow}
          onHide={() => setModalshow(false)}
          changefont={() => setValuefont(Font.secondary)}
        />
        <Grid
          container
          md={11}
          spacing={5}
          style={{ marginTop: "250px", marginLeft: "425px" }}
        >
          {tekkom.map((results) => {
            return (
              <Grid item key={results.name} md={3}>
                <Card>
                  <CardActionArea onClick={() => handleButton(results.hobi)}>
                    <CardContent style={{ backgroundColor: "cfe8fc" }}>
                      <Typography>Name: {results.nama}</Typography>
                      <Typography>NIM: {results.nim}</Typography>
                      <Typography>Alamat: {results.alamat}</Typography>
                      <Typography>Hobi: {results.hobi}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </FontContext.Provider>
  );
};

export default Tekkom;
