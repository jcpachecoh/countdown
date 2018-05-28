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
          <CountdownContainer futureDate={new Date('Sep 5, 2018 15:37:25')} />
        </div>
      </Provider>

    );
  }
}

export default App;
