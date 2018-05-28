import * as React from 'react';

export interface DaysProps {
    days: number;
}

interface DaysState {

}

export class Days extends React.Component<DaysProps, DaysState> {
    constructor(props: DaysProps) {
        super(props);
    }

    public render() {
        return (
            <div className="box-date">
                <h2>{this.props.days}</h2>
                <b>Days</b>
            </div>
        );
    }
}