import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import Scheduler from './Scheduler';
export default () => (
    <Card>
        <Title title="Welcome to the administration" />
        <CardContent>
            <Scheduler/>
        </CardContent>
    </Card>
);