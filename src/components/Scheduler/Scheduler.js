import * as React from 'react';
import { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    WeekView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
    AppointmentTooltip,
    AppointmentForm,
    Resources,
    AllDayPanel,
    ViewSwitcher,
} from '@devexpress/dx-react-scheduler-material-ui';
import ApiService from '../../service/ApiService';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withStyles } from '@material-ui/core/styles';

{/*const style = ({ palette }) => ({
    icon: {
      color: palette.action.active,
    },
    textCenter: {
      textAlign: 'center',
    },
    firstRoom: {
      background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/Lobby-4.jpg)',
    },
    secondRoom: {
      background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-4.jpg)',
    },
    thirdRoom: {
      background: 'url(https://js.devexpress.com/Demos/DXHotels/Content/Pictures/MeetingRoom-0.jpg)',
    },
    header: {
      height: '260px',
      backgroundSize: 'cover',
    },
    commandButton: {
      backgroundColor: 'rgba(255,255,255,0.65)',
    },
  });

//botão para edição
const Header = withStyles(style, { name: 'Header' })(({
    children, appointmentData, classes,
  }) => (
    <AppointmentTooltip.Header>
      <IconButton
         eslint-disable-next-line no-alert 
        onClick={() =>  alert(JSON.stringify("O botão funciona"))}
                
      >
        <MoreIcon />
        
      </IconButton>
    </AppointmentTooltip.Header>
  ));*/}

const resources = [{
    fieldName: 'type',
    title: 'Type',
    instances: [
        { id: 'Agendado', text: 'Pendente', color: '#b5ae49' },
        { id: 'Concluído', text: 'Concluído', color: '#258045' },
        { id: 'Cancelado', text: 'Cancelado', color: '#fcc001' },
        { id: 'Agendado', text: 'Assumido', color: '#b00606' },
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
            <Scheduler data={agenda} locale={locale} height={600}>
                <ViewState defaultCurrentDate={currentDate} defaultCurrentViewName="Week" />
                
                <WeekView
            startDayHour={9}
            endDayHour={19}
          />
          <MonthView/>
                <Toolbar />
                <DateNavigator />
                <TodayButton />
                <Appointments />
                <ViewSwitcher/>
                <Resources data={resources} />
                <AppointmentTooltip
                   // headerComponent={Header}
                    showCloseButton
                />
                <AppointmentForm readOnly />
                <AllDayPanel messages={getAllDayMessages(locale)} />
            </Scheduler>
        </Paper>
    );
}






