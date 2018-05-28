import * as React from 'react';

export interface SecondsProps {
    seconds: number;
}

interface SecondsState {

}

export class Seconds extends React.Component<SecondsProps, SecondsState> {
    constructor(props: SecondsProps) {
        super(props);
    }

    public render() {
        return (
            <div className="box-date">
                <h2>{this.props.seconds}</h2>
                <b>Seconds</b>
            </div>
        );
    }
}