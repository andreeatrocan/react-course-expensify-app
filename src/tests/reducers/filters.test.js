import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("should setup default filters value", () => {
    const state = filtersReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    });
});

test("should sort by amount", () => {
    const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
    expect (state.sortBy).toBe("amount");
});

test("should sortBy date", () => {
    const currentState = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: "SORT_BY_DATE"};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe("date");
});

test ("sould set text filter", () => {
    const text = "This is my filter value";
    const action = { 
        type: "SET_TEXT_FILTER",
        text
     };
    const state = (undefined, action);
    expect(state.text).toBe(text);
});

test ("sould set startDate filter", () => {
    const startDate = moment();
    const action = { 
        type: "SET_START_DATE",
        startDate
    };
    const state = (undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test ("sould set endDate filter", () => {
    const endDate = moment();
    const action = { 
        type: "SET_END_DATE",
        endDate
    };
    const state = (undefined, action);
    expect(state.endDate).toEqual(endDate);
});