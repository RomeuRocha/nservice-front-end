import React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Title } from 'react-admin';

export default () => (
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
            <li>...</li>
        </ul>

    </Card>
);