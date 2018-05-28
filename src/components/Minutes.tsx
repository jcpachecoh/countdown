import * as React from 'react';

export interface MinutesProps {
    minutes: number;
}

interface MinutesState {

}

export class Minutes extends React.Component<MinutesProps, MinutesState> {
    constructor(props: MinutesProps) {
        super(props);
    }

    public render() {
        return (
            <div className="box-date">
                <h2>{this.props.minutes}</h2>
                <b>Minutes</b>
            </div>
        );
    }
}