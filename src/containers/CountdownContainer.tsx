import { connect, Dispatch } from 'react-redux';
import { setCountdownDate, CountdownActions, setDays, setHours, setMinutes, setSeconds, setMonths } from '../actions/index';
import { Countdown, CountdownProps } from '../components/Countdown';

type ConnectedDispatchProps = Pick<CountdownProps,
    'setCountdownDate' |
    'setMonths' |
    'setDays' |
    'setHours' |
    'setMinutes' |
    'setSeconds'>;

export function mapDispatchToProps(dispatch: Dispatch<CountdownActions>): ConnectedDispatchProps {
    return {
        setCountdownDate: (futureDate: Date) => dispatch(setCountdownDate(futureDate)),
        setMonths: () => dispatch(setMonths()),
        setDays: () => dispatch(setDays()),
        setHours: () => dispatch(setHours()),
        setMinutes: () => dispatch(setMinutes()),
        setSeconds: () => dispatch(setSeconds())
    };
}

export default connect(null, mapDispatchToProps)(Countdown);