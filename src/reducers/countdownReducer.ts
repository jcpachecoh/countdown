import { SET_COUNTDOWN_DATE, CountdownActions, SET_DAYS, SET_MINUTES, SET_HOURS, SET_SECONDS } from '../actions/index';
const newObject = (state: any, newData: any) => Object.assign({}, state, newData);

export const defaultCountdown = {
    countdownDate: '2018-05-28T04:00:50.332Z',
    days: '',
    hours: '',
    minutes: '',
    seconds: ''
};

export const countdownReducer = (state = defaultCountdown, action: CountdownActions) => {
    let now = new Date().getTime(),
        distance = state.countdownDate as any - now;
    switch (action.type) {
        case SET_COUNTDOWN_DATE:
            return newObject(
                state,
                {
                    countdownDate: action.payload,
                }
            );
        case SET_DAYS:
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            return newObject(
                state,
                {
                    days: days,
                }
            );
        case SET_HOURS:
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            return newObject(
                state,
                {
                    hours: hours,
                }
            );
        case SET_MINUTES:
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            return newObject(
                state,
                {
                    minutes: minutes,
                }
            );
        case SET_SECONDS:
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return newObject(
                state,
                {
                    seconds: seconds,
                }
            );
        default:
            return state;
    }
};