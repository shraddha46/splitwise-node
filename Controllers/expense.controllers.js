const Expense = require('../Models/expense');

const addExpense = async (req, res) => {
    try {
        const expense = await Expense.create(req.body);
        return res.status(200).json(expense);
    } catch (error) {
        return res.status(500).send('an error occured while create expense');
    }
};

module.exports = {
    addExpense
}