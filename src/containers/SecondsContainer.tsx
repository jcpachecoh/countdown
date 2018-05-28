import { connect } from 'react-redux';
import { Seconds, SecondsProps } from '../components/Seconds';

type ConnectedStateProps = Pick<SecondsProps, 'seconds' >;

export function mapStateToProps({ countdownReducer: { seconds } }: any): ConnectedStateProps {
    return {
        seconds,
    };
}

export default connect(mapStateToProps, null)(Seconds);