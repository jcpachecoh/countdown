import * as React from 'react';
import DaysContainer from '../containers/DaysContainer';
import HoursContainer from '../containers/HoursContainer';
import MinutesContainer from '../containers/MinutesContainer';
import SecondsContainer from '../containers/SecondsContainer';
import MonthsContainer from '../containers/MonthsContainer';

export interface CountdownProps {
    futureDate: Date;
    setCountdownDate: Function;
    setMonths: Function;
    setDays: Function;
    setHours: Function;
    setMinutes: Function;
    setSeconds: Function;
    showMonths: boolean;
    showDays: boolean;
    showHours: boolean;
    showMinutes: boolean;
    showSeconds: boolean;
}

interface CountdownState {

}

export class Countdown extends React.Component<CountdownProps, CountdownState> {
    constructor(props: CountdownProps) {
        super(props);
    }

    componentDidMount() {
        this.props.setCountdownDate(this.props.futureDate.getTime());
        setInterval(() => {
            this.props.setMonths();
            this.props.setDays();
            this.props.setHours();
            this.props.setMinutes();
            this.props.setSeconds();
        },          1000);
    }

    public render() {
        return (
            <div className="countdown-app">
                <b>Starts In ...</b>
                {this.props.showMonths && <MonthsContainer />}
                {this.props.showDays && <DaysContainer />}
                {this.props.showHours && <HoursContainer />}
                {this.props.showMinutes && <MinutesContainer />}
                {this.props.showSeconds && <SecondsContainer />}
            </div>
        );
    }
}