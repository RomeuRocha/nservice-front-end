import  React from "react";
import { Edit, SimpleForm, TextInput, ListButton, ShowButton, TopToolbar } from 'react-admin';

export const FuncionarioEdit = props => {
    const FuncionarioEditActions = ({ basePath, data, resource }) => (
        <TopToolbar>
            <ListButton basePath={basePath} />
            <ShowButton basePath={basePath} record={data} />
        </TopToolbar>
    )
    return(
    <Edit {...props} actions={<FuncionarioEditActions/>}>
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="descricao" />
            <TextInput source="valorMensal" />
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
    );
}