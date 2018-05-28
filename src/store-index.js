import { createStore } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;