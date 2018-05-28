import * as React from 'react';

export interface MonthsProps {
    months: number;
}

interface MonthsState {

}

export class Months extends React.Component<MonthsProps, MonthsState> {
    constructor(props: MonthsProps) {
        super(props);
    }

    public render() {
        return (
            <div className="box-date">
                <h2>{this.props.months}</h2>
                <b>Months</b>
            </div>
        );
    }
}