import { useEffect, useState } from "react";
import { getAllExpenses } from "../services/expenseService";

function ViewExpensesPage() {

    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchAllExpenses();
    }, []);

    const fetchAllExpenses = async () => {

        try {

            const response = await getAllExpenses();

            console.log(response.data);

            setExpenses(response.data);

        } catch (error) {

            console.error("Failed to fetch expenses", error);
        }
    };

    return (
        <div>

            <h1>All Expenses</h1>

            {
                expenses.map((expense) => (
                    <div
                        key={expense.expenseId}
                        style={{
                            border: "1px solid gray",
                            margin: "10px",
                            padding: "10px"
                        }}
                    >

                        <h3>{expense.expenseTitle}</h3>

                        <p>Category: {expense.expenseCategory}</p>

                        <p>Amount: ₹ {expense.expenseAmount}</p>

                    </div>
                ))
            }

        </div>
    );
}

export default ViewExpensesPage;