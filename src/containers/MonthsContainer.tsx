import { connect } from 'react-redux';
import { Months, MonthsProps } from '../components/Months';

type ConnectedStateProps = Pick<MonthsProps, 'months' >;

export function mapStateToProps({ countdownReducer: { months } }: any): ConnectedStateProps {
    return {
        months,
    };
}

export default connect(mapStateToProps, null)(Months);