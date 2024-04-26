import logo from './logo.svg';
import './App.css';
import CustomerAdd from './CustomerAdd';
import CustomerView from './CustomerView';
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider>
      <div className="App">
        <h1>React Redux Customer Add Example</h1>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
