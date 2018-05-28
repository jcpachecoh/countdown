import { connect } from 'react-redux';
import { Days, DaysProps } from '../components/Days';

type ConnectedStateProps = Pick<DaysProps, 'days' >;

export function mapStateToProps({ countdownReducer: { days } }: any): ConnectedStateProps {
    return {
        days,
    };
}

export default connect(mapStateToProps, null)(Days);