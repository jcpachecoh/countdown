import * as React from 'react';
import './css/main.css';
import CountdownContainer from './containers/CountdownContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);
class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CountdownContainer
            futureDate={new Date('Dec 31, 2018 12:00:00')}
            showMonths={true}
            showDays={true}
            showMinutes={true}
            showHours={true}
            showSeconds={true}
          />
        </div>
      </Provider>

    );
  }
}

export default App;
