import * as React from 'react';
import { useEffect, useState } from 'react'
import { useRedirect } from 'react-admin'
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

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: 'center',
  },
  header: {
    height: '260px',
    backgroundSize: 'cover',
  },
  commandButton: {
    backgroundColor: 'rgba(255,255,255,0.65)',
  },
});


const resources = [{
  fieldName: 'type',
  title: 'Type',
  instances: [
    { id: 'Agendado', text: 'Agendada', color: '#d7d222' },
    { id: 'Concluído', text: 'Concluído', color: '#41cf2b' },
    { id: 'Cancelado', text: 'Cancelado', color: '#ff2d2d' },
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
  const [currentDate, setCurrentDate] = useState(new Date)
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
        <MonthView />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
        <ViewSwitcher />
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






