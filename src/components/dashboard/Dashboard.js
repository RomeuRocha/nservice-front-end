import React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Title } from 'react-admin';
import Scheduler from '../Scheduler/Scheduler';

const data = [
    { start_date: '2020-12-10 6:00', end_date: '2020-06-10 8:00', text: 'Event 1', id: 1 },
    { start_date: '2020-06-13 10:00', end_date: '2020-06-13 18:00', texto: 'Evento 2', id: 2 }
];

export default () => (
    <div>
        <Card>
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
            
            {/*<div className='scheduler-container'>
                <Scheduler events={data} />
            </div>*/}
            <div>
                <Scheduler/>
            </div>



        </Card>


    </div>
);