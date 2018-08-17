import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should setup edit expense action object", () => {
    const action = editExpense("12ab", {note: "New note value"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "12ab",
        updates: {
            note: "New note value"
        }
    });

});

test("should setup add expense action object with provided values", () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: "las month rent"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual ({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
}); // to equal super pt a compara obiecte

test("should setup add expense action object with default values", () => {
    const action = addExpense();
    expect(action).toEqual ({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: "",
            amount: 0,
            createdAt: 0,
            note: ""
        }
    });
});