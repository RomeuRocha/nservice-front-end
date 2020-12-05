import * as React from 'react';
import { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
    AppointmentTooltip,
    AppointmentForm,
    Resources,
    AllDayPanel,
} from '@devexpress/dx-react-scheduler-material-ui';
import ApiService from '../../service/ApiService'

const resources = [{
    fieldName: 'type',
    title: 'Type',
    instances: [
        { id: 'Agendado', text: 'Pendente', color: '#b5ae49' },
        { id: 'Concluído', text: 'Concluído', color: '#258045' },
        { id: 'Cancelado', text: 'Cancelado', color: '#fcc001' },
        { id: 'Assumido', text: 'Assumido', color: '#b00606' },
    ],
}];

const allDayLocalizationMessages = {
    "pt-BR": {
        allDay: "Todo Dia"
    },
};

const getAllDayMessages = (locale) => allDayLocalizationMessages[locale];

export default () => {
    const [agenda, setAgenda] = useState([]);
    const [currentDate, setCurrentDate] = useState('2020-10-01')
    const [locale, setLocale] = useState("pt-BR")

    useEffect(() => {
        loadAgenda();
    }, []);

    const loadAgenda = () => {
        ApiService.getAll("agenda")
            .then(response => {
                setAgenda(response.data.content)
                
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Paper>
            <Scheduler data={agenda} locale={locale} >
                <ViewState defaultCurrentDate={currentDate} />
                <MonthView />
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
                <Resources data={resources} />
                <AppointmentTooltip
                    showCloseButton
                />
                <AppointmentForm readOnly />
                <AllDayPanel messages={getAllDayMessages(locale)} />
            </Scheduler>
        </Paper>
    );
}






