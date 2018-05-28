import { Action } from './action';

export const SET_COUNTDOWN_DATE = 'SetCountdownDate';
export type SET_COUNTDOWN_DATE = typeof SET_COUNTDOWN_DATE;
export const SET_DAYS = 'SetDays';
export type SET_DAYS = typeof SET_DAYS;
export const SET_HOURS = 'SetHours';
export type SET_HOURS = typeof SET_HOURS;
export const SET_MINUTES = 'SetMinutes';
export type SET_MINUTES = typeof SET_MINUTES;
export const SET_SECONDS = 'SetSeconds';
export type SET_SECONDS = typeof SET_SECONDS;
export const SET_MONTHS = 'SetMonths';
export type SET_MONTHS = typeof SET_MONTHS;

export class SetCountdownDate implements Action {
    type: SET_COUNTDOWN_DATE;
    payload: Date;
}

export function setCountdownDate(countdownDate: Date): SetCountdownDate {
    return {
        type: SET_COUNTDOWN_DATE,
        payload: countdownDate
    };
}

export class SetDays implements Action {
    type: SET_DAYS;
}

export function setDays(): SetDays {
    return {
        type: SET_DAYS,
    };
}

export class SetHours implements Action {
    type: SET_HOURS;
}

export function setHours(): SetHours {
    return {
        type: SET_HOURS,
    };
}

export class SetMinutes implements Action {
    type: SET_MINUTES;
}

export function setMinutes(): SetMinutes {
    return {
        type: SET_MINUTES
    };
}

export class SetSeconds implements Action {
    type: SET_SECONDS;
}

export function setSeconds(): SetSeconds {
    return {
        type: SET_SECONDS
    };
}

export class SetMonths implements Action {
    type: SET_MONTHS;
}

export function setMonths(): SetMonths {
    return {
        type: SET_MONTHS
    };
}

export type CountdownActions =
    SetCountdownDate |
    SetMonths |
    SetDays |
    SetHours |
    SetMinutes |
    SetSeconds;