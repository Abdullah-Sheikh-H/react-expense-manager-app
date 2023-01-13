import logo from "./logo.svg"
import "./App.css"
import Expenses from "./components/Expenses/Expenses.js"
import NewExpense from "./components/NewExpense/NewExpense"
import { useState } from "react"

let DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
]

function App() {
    let expensess = []

    const [expenses, setExpenses] = useState(expensess)

    const handleAddExpense = (expense) => {
        setExpenses((prevState) => {
            return [expense, ...prevState]
        })

        expensess.push(expense)
        console.log(expensess)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={handleAddExpense} />
            <Expenses items={expenses} />
        </div>
    )
}

export default App
