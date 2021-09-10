import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    margin: ' auto',
    marginTop: 30,
    marginBottom: 30,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    background: '#5c6bc0',
  },
}));

export default function InfoPanel() {
  const urlTotal = 'https://covid-19-data.p.rapidapi.com/totals';
  let [isTotal, setTotal] = useState({});
  useEffect(() => {
    let fetchTotal = async () => {
      try {
        const response = await axios.get(urlTotal, {
          headers: {
            'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
            'x-rapidapi-key':
              '2ff5d441b3msh027a92a261ae509p1bac58jsn1206ca86cdeb',
          },
        });
        console.log(response.data[0]);
      } catch (err) {
        // handle error
        console.error(err);
      }
    };
    fetchTotal();
  }, []);

  useEffect(() => {
    console.log(isTotal);
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={5}>
            xs=12 sm=6
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={5}>
            xs=12 sm=6
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={5}>
            xs=6 sm=3
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
