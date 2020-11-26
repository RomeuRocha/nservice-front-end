import React, { useState, useEffect } from "react";

import ClientService from '../../service/ClienteService'

import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nome', headerName: 'Nome', width: 130 },
    { field: 'cpf', headerName: 'CPF', width: 150 }
  ];

export default props => {

    const [clients, setClient] = useState([]);
    const [clientSelec,setClientSelect] = useState();
    const [currentClient, setCurrentClient] = useState(null);

    useEffect(() => {
        retrieveTutorials();
    }, []);

    const retrieveTutorials = () => {
        ClientService.getAll()
            .then(response => {
                setClient(response.data.content);
                //console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (

        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={clients} columns={columns} pageSize={24}  onRowSelected={props.cliente} />
        </div>

    )


}