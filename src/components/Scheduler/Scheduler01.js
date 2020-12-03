import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState} from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    MonthView,
    Toolbar,
    DateNavigator,
    Appointments,
    TodayButton,
    AppointmentTooltip,
    AppointmentForm,
    AllDayPanel,
    Resources,
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './Date/month-appointments';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import ApiService from '../../service/ApiService'

const dados = ApiService.getAll("agenda")

//stylo dos agendamentos 
const Appointment = ({
    children, style, ...restProps
}) => (
        <Appointments.Appointment
            {...restProps}
            style={{
                ...style,
                backgroundColor: '#7996c4',
                borderRadius: '8px',
                color: '#000'
            }}
        >
            {children}
        </Appointments.Appointment>
    );
const resources = [{
    fieldName: 'type',
    title: 'Type',
    instances: [
        { id: 'Pendente', text: 'Pendente', color: '#b5ae49' },
        { id: 'Concluida', text: 'Concluida', color: '#258045' },
        { id: 'Atrasada', text: 'Atrasada', color: '#b00606' },
    ],
}];

const allDayLocalizationMessages = {
    "fr-FR": {
        allDay: "Temps plein"
    },
    "de-GR": {
        allDay: "Ganztägig"
    },
    "en-US": {
        allDay: "All Day"
    },
    "pt-BR": {
        allDay: "Todo Dia"
    }
};

const getAllDayMessages = (locale) => allDayLocalizationMessages[locale];

const styles = (theme) => ({
    container: {
        display: "flex",
        marginBottom: theme.spacing(2),
        justifyContent: "flex-end"
    },
    text: {
        ...theme.typography.h6,
        marginRight: theme.spacing(2)
    }
});

const LocaleSwitcher = withStyles(styles, { name: "LocaleSwitcher" })(
    ({ onLocaleChange, currentLocale, classes }) => (
        <div className={classes.container}>
            <div className={classes.text}>Locale:</div>
            <TextField select value={currentLocale} onChange={onLocaleChange}>
                <MenuItem value="fr-FR">Le français (French)</MenuItem>
                <MenuItem value="de-GR">Deutsch (German)</MenuItem>
                <MenuItem value="en-US">English (United States)</MenuItem>
                <MenuItem value="pt-BR">Portugues (Brasil)</MenuItem>
            </TextField>
        </div>
    )
);

export default class Demo extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: appointments,
            currentDate: "2020-12-1",
            locale: "pt-BR"
        };

        this.changeLocale = (event) =>
            this.setState({ locale: event.target.value });
    }

    render() {
        const { data, currentDate, locale } = this.state;
        return (
            <div>
                <LocaleSwitcher
                    currentLocale={locale}
                    onLocaleChange={this.changeLocale}
                />
                <Paper>
                    <Scheduler data={data} locale={locale} height={660}>
                        <ViewState defaultCurrentDate={currentDate} />
                        <MonthView/>
                        <Toolbar />
                        <DateNavigator />
                        <TodayButton />
                        <Appointments />
                        <Resources
                            data={resources}
                        />
                        <AppointmentTooltip
                            showCloseButton
                            showOpenButton
                        />
                        <AppointmentForm readOnly />
                        <AllDayPanel messages={getAllDayMessages(locale)} />
                    </Scheduler>
                </Paper>
            </div>
        );
    }
}