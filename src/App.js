import './App.css';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Fragment } from 'react';
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
  const classes = useStyles();

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
          />
          <TextField
            required
            id="outlined-required"
            label="Your course"
            defaultValue="Course"
            variant="outlined"
            style={{ width: "80%" }}
            margin="normal"
          />
          <Grid item
            style={{ marginTop: 25 }}>
            <Button
              href="#"
              color="primary"
              variant="contained"
              startIcon={<Description />}
            > Gerar Certificado</Button>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
}

export default App;
