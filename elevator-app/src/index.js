import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ElevatorButton from './components/ElevatorButton/ElevatorButton';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ElevatorButton />, document.getElementById('ElevatorButton'));

registerServiceWorker();
