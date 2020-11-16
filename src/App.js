import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import { Admin, Resource,ListGuesser,EditGuesser,ShowGuesser} from 'react-admin';

import DataProvider from './service/DataProvider'

import Dashboard from './components/dashboard/Dashboard'

import {ServicoList} from './components/Servico/ServicoList'
import {ServicoEdit} from './components/Servico/ServicoEdit'
import {ServicoCreate} from './components/Servico/ServicoCreate'
import {ServicoShow} from './components/Servico/ServicoShow'
import WorkIcon from '@material-ui/icons/Work';

import {AssuntoList} from './components/Assunto/AssuntoList'
import {AssuntoEdit} from './components/Assunto/AssuntoEdit'
import {AssuntoCreate} from './components/Assunto/AssuntoCreate'
import SubjectIcon from '@material-ui/icons/Subject';

import {ClienteList} from './components/cliente/ClienteList'
import {ClienteEdit} from './components/cliente/ClienteEdit'
import {ClienteCreate} from './components/cliente/ClienteCreate'
import GroupIcon from '@material-ui/icons/Group';

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {FuncionarioList} from './components/Funcionario/FuncionarioList'
import {FuncionarioEdit} from './components/Funcionario/FuncionarioEdit'
import {FuncionarioCreate} from './components/Funcionario/FuncionarioCreate'

import StorageIcon from '@material-ui/icons/Storage';
import {OrdemservicoList} from './components/OrdemServico/OrdemServicoList'
import {OrdemServicoEdit} from './components/OrdemServico/OrdemServicoEdit'

function App(){

  return(
    <Admin title="Nservice" dataProvider={DataProvider} dashboard={Dashboard}>
       <Resource name="servico" options={{ label: 'Serviços' }} list={ServicoList} edit={ServicoEdit} create={ServicoCreate} show={ServicoShow} icon={WorkIcon} />
       <Resource name="assunto" list={AssuntoList} edit={AssuntoEdit} create={AssuntoCreate} show={ShowGuesser} icon={SubjectIcon}/>
       <Resource name="cliente" list={ClienteList} edit={ClienteEdit} create={ClienteCreate} show={ShowGuesser} icon={GroupIcon}/>
       <Resource name="funcionario" options={{ label: 'Funcionários' }} list={FuncionarioList} edit={FuncionarioEdit} create={FuncionarioCreate} show={ShowGuesser} icon={AssignmentIndIcon}/>
       <Resource name="ordemservico" options={{ label: 'Ordem de Serviço' }} list={OrdemservicoList} edit={OrdemServicoEdit} create={FuncionarioCreate} show={ShowGuesser} icon={StorageIcon}/>
    </Admin>
  )

}

export default App
