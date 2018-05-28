jest.unmock('redux-mock-store');
jest.unmock('redux');
import { createStore } from 'redux';
import { countdownReducer, defaultCountdown } from '../reducers/countdownReducer';
import { setCountdownDate, setDays, setHours, setMinutes, setSeconds } from '../actions/index';

const configureMockStore = require('redux-mock-store');

describe('Test User reducer', () => {
    const mockStore = configureMockStore();
    let defaultCountdownMock: any,
        store: any,
        storeActions: any,
        action: any,
        dateCountdown: Date;

    beforeEach(() => {
        dateCountdown = new Date('Sep 5, 2018 15:37:25');
        store = createStore(countdownReducer);
        defaultCountdownMock = {
            countdownDate: '2018-05-28T04:00:50.332Z',
            days: '',
            hours: '',
            minutes: '',
            seconds: ''
        };
        storeActions = mockStore(defaultCountdownMock);
    });
    describe('Test general actions reducer transactions', () => {
        it('Return initial state', () => {
            expect(defaultCountdownMock).toEqual(defaultCountdown);
        });

        it('should call setCountdownDate function', () => {
            storeActions.dispatch(setCountdownDate(dateCountdown));
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetCountdownDate');
        });

        it('should change payload calling setCountdownDate function', () => {
            storeActions.dispatch(setCountdownDate(dateCountdown));
            action = storeActions.getActions();
            expect(action[0].payload).toBe(dateCountdown);
        });

        it('should change store countdowndate with setCountdownDate', () => {
            store.dispatch(setCountdownDate(dateCountdown));
            store = store.getState();
            expect(store.countdownDate).toBe(dateCountdown);
        });

        it('should call setDays function', () => {
            storeActions.dispatch(setDays());
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetDays');
        });

        it('should change store days with setDays', () => {
            store.dispatch(setCountdownDate(dateCountdown));
            store.dispatch(setDays());
            store = store.getState();
            expect(store.days).toBe(100);
        });
        it('should call setHours function', () => {
            storeActions.dispatch(setHours());
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetHours');
        });

        it('should change store hours with setHours', () => {
            store.dispatch(setCountdownDate(dateCountdown));
            store.dispatch(setHours());
            store = store.getState();
            expect(store.hours).toBe(16);
        });

        it('should call setMinutes function', () => {
            storeActions.dispatch(setMinutes());
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetMinutes');
        });

        it('should change store minutes with setMinutes', () => {
            store.dispatch(setCountdownDate(dateCountdown));
            store.dispatch(setMinutes());
            store = store.getState();
            expect(store.minutes).toBe(24);
        });

        it('should call setSeconds function', () => {
            storeActions.dispatch(setSeconds());
            action = storeActions.getActions();
            expect(action[0].type).toBe('SetSeconds');
        });
    });
});