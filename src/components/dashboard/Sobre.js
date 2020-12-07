import { Card, CardContent, CardHeader } from '@material-ui/core';
import { Title } from 'react-admin';

export default () => {
    return (
        <Card >
            <Title title="Dashboard" />

            <CardContent>
                <p>N.Service v1.0(BETA)</p>
                <p>Front-End :</p>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>React-admin</li>
                    <li>Axios</li>
                    <li>...</li>
                </ul>
                <p>Back-End :</p>
                <ul>
                    <li>Java</li>
                    <li>Spring Boot</li>
                    <li>H2 Database (fase de teste)</li>
                    <li>Maven</li>
                    <li>...</li>
                </ul>

                <p>Orientado por: </p>
                <ul>
                    <li>Ronierison Maciel : ronierison.maciel@unirios.edu.br</li>
                    <li>Edemilton Junior  : edemilton.junior@unirios.edu.br</li>
                </ul>
            </CardContent>
        </Card>
    );
}