import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { startSetExpenses } from "./actions/expenses";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import { setTextFilter } from "./actions/filters";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

const store = configureStore();
const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
); // permite accesul lui AppRouter la store - pasul 1, pasul 2 -> ExpenseList

ReactDOM.render (<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render (jsx, document.getElementById("app"));
});



