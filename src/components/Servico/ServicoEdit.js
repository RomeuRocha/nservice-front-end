import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

import { TopToolbar, ListButton, ShowButton } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import MyListButton from '../Util/ListButton'

const useStyles = makeStyles({
    button: {

        fontWeight: 'bold',
        // This is JSS syntax to target a deeper element using css selector, here the svg icon for this button
        '& svg': { color: 'yellow' },
        '&:hover': {
            color: '#33c4ff'
        },
        color: '#3dc915',
    },
});



export const ServicoEdit = props => {
    const classes = useStyles();
    const ServicoEditActions = ({ basePath, data, }) => (
        <TopToolbar>
            <MyListButton basePath={basePath} />
            <ShowButton basePath={basePath} record={data} />
        </TopToolbar>
    );

    return (
        <Edit {...props} actions={<ServicoEditActions />} redirect="list">
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="description" />
                <NumberInput source="value" />
            </SimpleForm>
        </Edit>
    );
}