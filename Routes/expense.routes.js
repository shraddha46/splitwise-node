const express = require('express');
const expenseControllers = require('../Controllers/expense.controllers');
const authMiddleware = require('../Middleware/auth');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Expense
 *   description: Expense management
 */
/**
 * @openapi
 * /expense/addExpense:
 *   post:
 *     summary: Add a new expense
 *     description: Add a new expense in splitwise.
 *     tags: [Expense]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - in: header
 *        name: Authorization
 *        required: true
 *        description: Bearer token for authentication
 *        schema:
 *         type: string
 *         example: "Bearer YOUR_JWT_TOKEN"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: Dinner
 *               amount:
 *                 type: number
 *                 example: 100
 *               paidBy:
 *                 type: string
 *                 example: userId
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-09-17T12:00:00Z"
 *     responses:
 *       200:
 *         description: Expense created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 amount:
 *                   type: number
 *                 description:
 *                   type: string
 *                 paidBy:
 *                   type: string
 *                 date:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Bad request, possibly due to invalid input
 *       500:
 *         description: Internal server error
 */

router.post('/addExpense',authMiddleware,expenseControllers.addExpense);

module.exports = router;