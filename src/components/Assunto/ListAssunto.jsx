import React, { useState, useEffect } from "react";

import ApiService from '../../service/ApiService'

import DataProvider from '../../service/DataProvider'

import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'description', headerName: 'Descrição', width: 130 },
  ];

export default props => {

    const [assuntos, setAssuntos] = useState([]);
    const [assuntoSelect,setAssuntoSelect] = useState();
    
    useEffect(() => {
        retrieveAssuntos();
    }, []);

    const retrieveAssuntos = () => {
        

        ApiService.getAll("assunto")
            .then(response => {
                setAssuntos(response.data.content);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={assuntos} columns={columns} pageSize={24}  onRowSelected={props.assunto} />
        </div>
    )


}