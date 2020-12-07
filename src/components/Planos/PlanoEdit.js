import React from "react";
import { Edit, 
    SimpleForm, 
    TextInput,
    ListButton,
    ShowButton,
    TopToolbar,
} from 'react-admin';
import MyListButton from '../Util/ListButton'

export const PlanoEdit = props => {

    const PlanoEditActions = ({ basePath}) => (
        <TopToolbar>
            <MyListButton basePath={basePath} />            
        </TopToolbar>
    );

    return (
        <Edit actions={<PlanoEditActions/>} {...props} >
            <SimpleForm>
                <TextInput source="id" disabled />
                <TextInput source="descricao" />
                <TextInput source="valorMensal" />
                <TextInput source="nome" />
            </SimpleForm>
        </Edit>
    );
}