import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { useState, useEffect } from 'react';
import {
  Chart,
  LineSeries,
  SplineSeries,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import ApiService from '../../service/ApiService';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(0deg, rgba(209,109,81,1) 0%, rgba(190,113,45,1) 45%, rgba(173,73,19,1) 100%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        
    },
    graficos: {
        position: 'relative',
        float: "right",
        margin: '70px',
    },
    graficos1: {
        position: 'relative',
        float: "left",
        margin: '10px',
    },
    divTop: {

    }
});

export default () => {

  const [graf, setGraf] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    loadGraf();
  }, []);

  const loadGraf = () => {
    ApiService.getAll("adesao/grafico2")
      .then(response => {
        setGraf(response.data)

      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <Paper className={classes.root}>
      <Chart
        data={graf}
        width={450}
        height={300}
      >
        <ValueAxis />
        <ArgumentAxis />
        <LineSeries
          name="G2"
          valueField="lineValue"
          argumentField="argument"
        />

        <Title text={"Números de Adesões Por Mês"} />
      </Chart>
    </Paper>
  );

}
