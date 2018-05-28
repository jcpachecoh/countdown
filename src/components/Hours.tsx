import * as React from 'react';

export interface HoursProps {
    hours: number;
}

interface HoursState {

}

export class Hours extends React.Component<HoursProps, HoursState> {
    constructor(props: HoursProps) {
        super(props);
    }

    public render() {
        return (
            <div className="box-date">
                <h2>{this.props.hours}</h2>
                <b>Hours</b>
            </div>
        );
    }
}