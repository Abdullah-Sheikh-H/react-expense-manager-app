import "./Card.css"
import "../Expenses/ExpenseItem.css"
import "../Expenses/ExpenseDate.css"

function Card(props) {
    const classes = "card " + props.className

    return <div className={classes}>{props.children}</div>
}

export default Card
