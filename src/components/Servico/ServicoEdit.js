import  React from "react";
import { Edit, SimpleForm, TextInput,NumberInput } from 'react-admin';

import { TopToolbar, ListButton, ShowButton } from 'react-admin';

const ServicoEditActions = ({ basePath, data }) => (
    <TopToolbar>
        <ListButton basePath={basePath} />
        <ShowButton basePath={basePath} record={data} />
    </TopToolbar>
);

export const ServicoEdit = props => (
    <Edit {...props} title="Editar Serviço" actions={<ServicoEditActions />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <TextInput source="description" />
            <NumberInput source="value" />
        </SimpleForm>
    </Edit>
);