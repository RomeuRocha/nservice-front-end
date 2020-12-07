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
    useRedirect,
    useNotify
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



export default function Agendar(props) {

    const redirect = useRedirect();
    const notify = useNotify();

    const initialAgendaState = {
        id: props.record.id,
        funcionario: props.record.funcionario,
        dateSchedule: props.record.dateSchedule,
        assunto:{
            id : props.record.assunto.id
        },
        cliente:{
            id : props.record.cliente.id
        },
        saveMoment: props.record.saveMoment,
        situation: "AGENDADO",
        servicos: props.record.servicos
    };

    const [agenda, setAgenda] = useState(initialAgendaState)

    const { handleclose, open } = props // eventos para fechar caixa de dialogo

    const [funcionarios, setFuncionarios] = useState([]) //lista para campo de pesquisa

    

    useEffect(() => {
        
        retrieveFuncionarios();
    }, []);



    const handleInputChange = event => {
        const { name, value } = event.target;
        setAgenda({ ...agenda, [name]: value });
    };

    const save = () => ApiService.update("ordemservico", agenda.id, agenda)
        .then(response => {
            handleclose()
            notify(`Agendamento concluído com sucesso`)
            redirect(`/ordemservico/${response.data.id}/show`); 
            //console.log("Dados que foram salvos")
            //console.log(response.data);
        })

    const retrieveFuncionarios = () => {
        ApiService.getAll("funcionario")
            .then(response => {
                setFuncionarios(response.data.content);

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
                            Agendar Ordem de serviço
                        </DialogTitle>
                        <DialogContent dividers>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <Autocomplete
                                        id="combo-box-demo"
                                        margin="normal"
                                        options={funcionarios}
                                        getOptionLabel={(option) => option.nome}
                                        style={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="Funcionário" variant="outlined" />}
                                       
                                        value={agenda.funcionario}
                                        name="funcionario"
                                        onChange={(event, newValue) => {
                                            setAgenda({ ...agenda, funcionario: newValue });
                                          }}
                                         required
                                    />


                                    <TextField
                                        id="datetime-local"
                                        margin="normal"
                                        label="Data e hora"
                                        type="datetime"
                                        type="datetime-local"
                                        value={agenda.dateSchedule}
                                        name="dateSchedule"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={handleInputChange}
                                    />

                                    <Button
                                        margin="normal"
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        startIcon={<SaveIcon />}
                                        onClick={save}
                                    >
                                        Save
                                     </Button>
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </DialogContent>
                    </Dialog>
                ) : null
            }


        </>
    );
}
