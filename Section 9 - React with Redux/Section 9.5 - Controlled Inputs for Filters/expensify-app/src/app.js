import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


// create Redux Store:
const store = configureStore();

// Dispatch Actions:
store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas Bill' }));
store.dispatch(setTextFilter('Water'));

setTimeout(() => {
   store.dispatch(setTextFilter('bill'));
}, 3000);

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
   <Provider store={store}>
      <AppRouter />
   </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));