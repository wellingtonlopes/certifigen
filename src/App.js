import './App.css';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment, useEffect, useState } from 'react';
import { Description } from '@material-ui/icons'


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
    flexGrow: 1,
  },
}));

function App() {
  const [ name, setName ] = useState("");
  const [ course, setCourse ] = useState("");
  const classes = useStyles();

  const generateCertificate = async () => {
    if (name && course !== "") {
      const response = await fetch('http://localhost:3001/certificado', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          data: {
            name: name,
            course: course
          }
        })  
      });
      const data = await response.json();
      console.log("front", data);
    }
  };

  async function fetchData() {
    const response = await fetch('http://localhost:3001/')
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <Fragment>
      <Box>
        <Typography
          className={classes.root}
          variant="h2"
          align="center"
        >
          Certificados
        </Typography>
        <Typography
          variant="subtitle1"
          align="center">
          Preencha os campos abaixo para gerar o seu certificado
        </Typography>
      </Box>

      <div className={classes.root}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
        >
          <TextField
            required
            id="outlined-required"
            label="Your name"
            defaultValue="Full name"
            variant="outlined"
            style={{ width: "80%" }}
            margin="normal"
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Your course"
            defaultValue="Course"
            variant="outlined"
            style={{ width: "80%" }}
            margin="normal"
            onChange={(event) => setCourse(event.target.value)}
          />
          <Grid item
            style={{ marginTop: 25 }}>
            <Button
              href="#"
              color="primary"
              variant="contained"
              startIcon={<Description />}
              onClick={generateCertificate}
            > Gerar Certificado</Button>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default App;
