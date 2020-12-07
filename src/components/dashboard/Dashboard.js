import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Title } from 'react-admin';
import Scheduler from '../Scheduler/Scheduler';
import Grafico1 from '../Graficos/Grafico1';
import Grafico2 from '../Graficos/Grafico2';
import { makeStyles } from '@material-ui/core/styles';
import ApiService from '../../service/ApiService';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({

    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 80,
        width: 200,
        padding: '10px',
        position: 'relative',
        float: "left",
        margin: '20px 20px 80px 20px',
        textAlign: "center",
    },
    box1: {
        background: 'linear-gradient(0deg, rgba(71,198,68,1) 0%, rgba(38,157,59,1) 24%, rgba(47,75,92,1) 100%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 80,
        width: 200,
        padding: '10px',
        position: 'relative',
        float: "left",
        margin: '20px 20px 80px 20px',
        textAlign: "center",
    },
    box2: {
        background: 'linear-gradient(0deg, rgba(128,171,217,1) 0%, rgba(37,141,249,1) 15%, rgba(38,82,212,1) 100%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 80,
        width: 200,
        padding: '10px',
        position: 'relative',
        float: "left",
        margin: '20px 20px 80px 20px',
        textAlign: "center",
    },

    graficos: {
        position: 'relative',
        float: "right",
        margin: '5px',
    },
    graficos1: {
        position: 'relative',
        float: "left",
        margin: '5px',
    },
    divTop: {

    }
});

export default () => {
    const classes = useStyles();
    const [ativos, setAtivos] = useState();
    const [totalCliente, setTotal] = useState();
    const [osAbertas, setOsAbertas] = useState();

    useEffect(() => {
        loadAtivos();
        loadClientes();
        loadAbertas();
    }, []);

    const loadClientes = () => {
        ApiService.getAll("cliente/totalClientes")
            .then(response => {
                setTotal(response.data)

            })
            .catch(e => {
                console.log(e);
            });
    };

    const loadAtivos = () => {
        ApiService.getAll("adesao/ativas")
            .then(response => {
                setAtivos(response.data)

            })
            .catch(e => {
                console.log(e);
            });
    };
    const loadAbertas = () => {
        ApiService.getAll("ordemservico/abertas")
            .then(response => {
                setOsAbertas(response.data)

            })
            .catch(e => {
                console.log(e);
            });
    };

    return (

        <div>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper >
                        <div className={classes.box1}>
                            <h6>Total de Adesões</h6>
                            <h1>{ativos}</h1>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper c>
                        <div className={classes.box2}>
                            <h6>Clientes</h6>
                            <h1>{totalCliente}</h1>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper >
                        <div className={classes.root}>
                            <h6>OS Agendadas</h6>
                            <h1>{osAbertas}</h1>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <div className={classes.graficos1}>
                            <Grafico1 />
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs>
                    <Paper className={classes.paper}>
                        <div className={classes.graficos}>
                            <Grafico2 />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <Card className={classes.graficos1}>
                            <Title title="Dashboard" />
                            <CardHeader title="Welcome to the administration" />
                            <CardContent>Lorem ipsum sic dolor amet...</CardContent>
                            <p>Aqui vai entrar gráficos</p>
                            <ul>
                                <li>Ordens de serviço em aberto</li>
                                <li>Adesões ativas</li>
                                <li>Status de conexão ??</li>
                                <li>Gráficos de serviços mais frequentes</li>
                                <li>Gráficos de assuntos mais frequentes</li>
                                <li>Grafico com os atendidas em cada mês</li>
                                <li>Grafico número de adesão em linha </li>
                            </ul>

                        </Card>
                    </Paper>
                </Grid>
            </Grid>
            {/*<div >
                <div className={classes.box1}>
                    <h6>Total de Adesões</h6>
                    <h1>{ativos}</h1>
                </div>
                <div className={classes.box2}>
                    <h6>Clientes</h6>
                    <h1>{totalCliente}</h1>
                </div>
                <div className={classes.root}>
                    <h6>OS Agendadas</h6>
                    <h1>{osAbertas}</h1>
                </div>
                <div className={classes.root}>
                    <h6>Clientes</h6>
                    <h1>{totalCliente}</h1>
                </div>

            </div>
            <div className={classes.graficos1}>
                <Grafico1 />
            </div>
            <div className={classes.graficos}>
                <Grafico2 />
            </div>

            <Card className={classes.graficos1}>
                <Title title="Dashboard" />
                <CardHeader title="Welcome to the administration" />
                <CardContent>Lorem ipsum sic dolor amet...</CardContent>
                <p>Aqui vai entrar gráficos</p>
                <ul>
                    <li>Ordens de serviço em aberto</li>
                    <li>Adesões ativas</li>
                    <li>Status de conexão ??</li>
                    <li>Gráficos de serviços mais frequentes</li>
                    <li>Gráficos de assuntos mais frequentes</li>
                    <li>Grafico com os atendidas em cada mês</li>
                    <li>Grafico número de adesão em linha </li>
                </ul>

            </Card>*/}

            </div>
    );
}