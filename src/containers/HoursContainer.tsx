import { connect } from 'react-redux';
import { Hours, HoursProps } from '../components/Hours';

type ConnectedStateProps = Pick<HoursProps, 'hours' >;

export function mapStateToProps({ countdownReducer: { hours } }: any): ConnectedStateProps {
    return {
        hours,
    };
}

export default connect(mapStateToProps, null)(Hours);