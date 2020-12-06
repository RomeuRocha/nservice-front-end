import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import SaveIcon from '@material-ui/icons/Save';

import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import {
    required,
    Edit,
    SimpleForm,
    SelectArrayInput,
    ArrayInput,
    SimpleFormIterator,
    TextInput,
    SelectInput,
    AutocompleteArrayInput,
    ReferenceArrayInput,
    ReferenceInput,
    DateTimeInput
} from 'react-admin';

import ApiService from '../../service/ApiService'

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(5),
        width: 400,
    },
}))(MuiDialogContent);



export default function Finalizar(props) {

    const initialOrdemState = {
        id: props.record.id,
        funcionario: props.record.funcionario,
        dateSchedule: props.record.dateSchedule,
        assunto: {
            id: props.record.assunto.id
        },
        cliente: {
            id: props.record.cliente.id
        },
        saveMoment: props.record.saveMoment,
        situation: "CONCLUIDO",
        servicos: props.servicos
    };

    const [ordem, setOrdem] = useState(initialOrdemState)

    const { handleclose, open } = props // eventos para fechar caixa de dialogo

    const [servicos, setServicos] = useState([]) //lista para selecioanar serviços

    useEffect(() => {
        retrieveServicos();
    }, []);



    const handleInputChange = event => {
        const { name, value } = event.target;
        setServicos({ ...ordem, [name]: value });
    };

    const save = () => ApiService.update("ordemservico", ordem.id, ordem)
        .then(response => {
            handleclose()
            console.log("Dados que foram salvos")
            console.log(response.data);
        })

    const retrieveServicos = () => {
        ApiService.getAll("servico")
            .then(response => {
                setServicos(response.data.content);
                console.log(response.data.content)
            })
            .catch(e => {
                console.log(e);
            });
    };




    return (
        <>
            {
                handleclose ? (
                    <Dialog onClose={handleclose} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={handleclose}>
                            Finalizar Ordem de serviço
                        </DialogTitle>
                        <DialogContent dividers>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">

                                    <Edit {...props.info} actions={null}>
                                        <SimpleForm>
                                            <ArrayInput source="servicos">
                                                <SimpleFormIterator>
                                                    <ReferenceInput label="Post" source="id" reference="servico">
                                                        <SelectInput optionText="description" />
                                                    </ReferenceInput>
                                                </SimpleFormIterator>
                                            </ArrayInput>

                                            <DateTimeInput source="attendance" />
                                            <SelectInput source="situation" label="Situação" choices={[
                                                { id: 'ANALISE', name: 'Analise' },
                                                { id: 'AGENDADO', name: 'Agendado' },
                                                { id: 'CONCLUIDO', name: 'Concluído' },
                                                { id: 'CANCELADO', name: 'Cancelado' },
                                            ]} 
                                            optionValue="id"/>

                                        </SimpleForm>
                                    </Edit>

                                </Grid>
                            </MuiPickersUtilsProvider>
                        </DialogContent>
                    </Dialog>
                ) : null
            }


        </>
    );
}
