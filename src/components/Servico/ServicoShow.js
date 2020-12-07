import  React from "react";
import { Show, SimpleShowLayout, TextField,NumberField } from 'react-admin';

import { TopToolbar, ListButton,EditButton } from 'react-admin';
import MyListButton from '../Util/ListButton';

const ServicoShowActions = ({ basePath, data }) => (
    <TopToolbar>
        <MyListButton basePath={basePath} />
        <EditButton basePath={basePath} record={data}/>
    </TopToolbar>
);

export const ServicoShow = props => (
    <Show {...props} actions={<ServicoShowActions/>}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="description" />
            <NumberField source="value" />
        </SimpleShowLayout>
    </Show>
);