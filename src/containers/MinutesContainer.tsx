import { connect } from 'react-redux';
import { Minutes, MinutesProps } from '../components/Minutes';

type ConnectedStateProps = Pick<MinutesProps, 'minutes' >;

export function mapStateToProps({ countdownReducer: { minutes } }: any): ConnectedStateProps {
    return {
        minutes,
    };
}

export default connect(mapStateToProps, null)(Minutes);