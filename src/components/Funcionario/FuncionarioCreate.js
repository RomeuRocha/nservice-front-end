import  React from "react";
import { Create, EditButton, SimpleForm, TextInput, ListButton, TopToolbar } from 'react-admin';


export const FuncionarioCreate = props => {
    
    const FuncionarioEditActions = ({ basePath, data, resource }) => (
        <TopToolbar>
            <ListButton basePath={basePath} />
        </TopToolbar>
    )
    return(
    <Create {...props} actions={<FuncionarioEditActions/>}>
        <SimpleForm>
            <TextInput source="nome" />
            <TextInput source="email" />
            <TextInput source="whatsApp" />
            <TextInput source="cargo" />
            <TextInput source="departamento" />
            <TextInput source="login" />
            <TextInput source="senha" />
        </SimpleForm>
    </Create>
    );
}