export default (expenses) => {
        return expenses
            .map((expense) => expense.amount)
                .reduce((sum, value) => sum + value, 0); // map returneaza un array de obiecte tranformat in array de numbers, 
                                                            // iar reduce face suma, incepand sa numere de la 0
}