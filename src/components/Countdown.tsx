import * as React from 'react';
import DaysContainer from '../containers/DaysContainer';
import HoursContainer from '../containers/HoursContainer';
import MinutesContainer from '../containers/MinutesContainer';
import SecondsContainer from '../containers/SecondsContainer';

export interface CountdownProps {
    futureDate: Date;
    setCountdownDate: Function;
    setDays: Function;
    setHours: Function;
    setMinutes: Function;
    setSeconds: Function;
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
                <DaysContainer />
                <HoursContainer />
                <MinutesContainer />
                <SecondsContainer />
            </div>
        );
    }
}