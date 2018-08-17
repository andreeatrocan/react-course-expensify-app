import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { addExpense } from "./actions/expenses";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import { setTextFilter } from "./actions/filters";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
); // permite accesul lui AppRouter la store - pasul 1, pasul 2 -> ExpenseList

ReactDOM.render (jsx, document.getElementById("app"));


