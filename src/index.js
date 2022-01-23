import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './redux/store';
import ErrorBoundry from './components/ErrorBoundary';
// import App from './components/App';
import './index.css';
import { AppRouter } from './routers/AppRouter';
// import { store } from './store/store'
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <Router>
          <AppRouter />
        </Router>
      </ErrorBoundry>
    </Provider>,
  </React.StrictMode>,
  document.getElementById('root')
);

