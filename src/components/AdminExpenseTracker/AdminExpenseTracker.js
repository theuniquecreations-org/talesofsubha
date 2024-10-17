import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import expenseSection from "@/data/expenseSection";
import { Col, Image, Row } from "react-bootstrap";
import bin from "@/images/bin.png";

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formDate, setFormDate] = useState("");
  const [showMonthlyReport, setShowMonthlyReport] = useState(false); // Toggle monthly report view
  const [showGroupByCategory, setShowGroupByCategory] = useState(false); // Toggle group by category view
  ///pagination
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const expensesPerPage = 20; // Number of expenses to display per page
  const pageNumbersToShow = 4;
  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = expenses.slice(indexOfFirstExpense, indexOfLastExpense);
  const totalPages = Math.ceil(expenses.length / expensesPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const startPage = Math.max(1, currentPage - Math.floor(pageNumbersToShow / 2));
  const endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);

  ///pagination
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short" }; // Format as "dd-MMM"
    const date = new Date(dateString);
    // Add one day to correct for time zone issues
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("en-US", options);
  };
  // Get today's date formatted as YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const todaydate = getTodayDate();
  // Predefined categories
  const categories = ["Groceries", "Subscription", "Rent", "Fuel", "Gift", "Travel", "Saving", "Shopping", "Entertainment", "Healthcare", "Other"];
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: categories[0],
    date: getTodayDate(),
  });
  // Fetch expenses from the server
  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "itemsbytype/expense");
        const data = await response.json();
        setExpenses(data);
      } catch (err) {
        setError("Failed to fetch expenses.");
      }
      setLoading(false);
    };
    fetchExpenses();
  }, []);

  // Handling form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "amount" && value < 0) {
      setForm({ ...form, [name]: 0 });
    } else {
      setForm({ ...form, [name]: value });
    }
    console.log(form);
  };

  // Save new expense to the server
  const saveExpense = async (newExpense) => {
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newExpense),
      });
      alert("Saved Successfully");
      setError("");
    } catch (err) {
      console.log("Error saving expense: ", err);
      setError("Failed to save expense.");
    } finally {
      setLoading(false);
    }
  };

  // Handling form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: uuid(),
      type: "expense",
      description: form.description,
      amount: parseFloat(form.amount),
      category: form.category,
      date: form.date,
    };
    console.log("newExpense", newExpense);
    saveExpense(newExpense);
    setForm({ description: "", amount: "", category: categories[0], date: getTodayDate() });
  };

  // Delete an expense with confirmation
  const deleteExpense = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this expense?");
    if (!isConfirmed) return;
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_SERVICE_URL + "/removeitem/" + id, { method: "DELETE" });
      setExpenses(expenses.filter((expense) => expense.id !== id));
      setError("");
    } catch (err) {
      setError("Failed to delete expense.");
    }
    setLoading(false);
  };

  // Calculate monthly totals for the report
  const calculateMonthlyReport = () => {
    const monthlyTotals = {};
    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
      if (!monthlyTotals[yearMonth]) {
        monthlyTotals[yearMonth] = 0;
      }
      monthlyTotals[yearMonth] += expense.amount;
    });
    return monthlyTotals;
  };

  // Group expenses by category
  const groupByCategory = () => {
    const groupedExpenses = {};
    expenses.forEach((expense) => {
      const category = expense.category;
      if (!groupedExpenses[category]) {
        groupedExpenses[category] = [];
      }
      groupedExpenses[category].push(expense);
    });
    return groupedExpenses;
  };

  const monthlyReport = calculateMonthlyReport();
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
  const currentMonthExpense = expenses.filter((expense) => new Date(expense.date).getMonth() === new Date().getMonth()).reduce((total, expense) => total + expense.amount, 0);

  const groupedExpenses = groupByCategory(); // Get the grouped expenses

  return (
    <>
      <div className="p-4 bg-light text-primary font-size-large title">Expense Tracker</div>
      <div className="container">
        <div className="px-2">
          <h5 className="align-center mb-0">
            Current Month's Expense: <span className="text-primary">${currentMonthExpense.toFixed(2)}</span>
          </h5>
        </div>
        {/* Expense Form */}

        <form onSubmit={handleFormSubmit} className="grid">
          Add Expense
          <input type="text" name="description" placeholder="Expense Description" value={form.description} onChange={handleInputChange} required />
          <input type="number" name="amount" placeholder="Amount" step="any" value={form.amount} onChange={handleInputChange} min="0" inputMode="numeric" required />
          <select name="category" value={form.category} onChange={handleInputChange} required>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input type="date" name="date" defaultValue={todaydate} onChange={handleInputChange} required />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Add Expense"}
          </button>
        </form>
        <div className="center">{error && <p style={{ color: "red" }}>{error}</p>}</div>
        {/* Total Expenses */}
        <h5>
          Total Expense: <span className="text-primary">${totalExpense.toFixed(2)}</span>
        </h5>
        {/* Monthly Report Link */}
        <button className="btn btn-info me-2 p-1" onClick={() => setShowMonthlyReport(!showMonthlyReport)}>
          {showMonthlyReport ? "Hide Monthly Report" : "View Monthly Report"}
        </button>
        {/* Group by Category Link */}
        <button className="btn btn-info p-1" onClick={() => setShowGroupByCategory(!showGroupByCategory)}>
          {showGroupByCategory ? "Hide Category Report" : "Show Category Report"}
        </button>
        {/* Monthly Report Grid */}
        {showMonthlyReport && (
          <div className="mt-3">
            <h5>Monthly Report</h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Total Expense</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(monthlyReport).map((month, index) => (
                  <tr key={index}>
                    <td>{formatDate(month)}</td>
                    <td>${monthlyReport[month].toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {/* Grouped by Category Grid */}
        {showGroupByCategory && (
          <div className="mt-1">
            <h5 className="mb-0">Group by Category</h5>
            {Object.keys(groupedExpenses).map((category, index) => (
              <div key={index}>
                <h6 className="categorytitle mb-0">{category}</h6>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Description</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupedExpenses[category].map((expense, i) => (
                      <tr key={i}>
                        <td>{formatDate(expense.date)}</td>
                        <td>{expense.description.length > 12 ? expense.description.substring(0, 12) + ".." : expense.description}</td>
                        <td>${expense.amount.toFixed(2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}
        {/* Expense List */}
        <h5 className="mt-3 mb-0">All Expenses</h5>
        <div className="containe1">
          {currentExpenses.map((expense, index) => (
            <div key={index} className="d-flex flex-wrap align-items-center justify-content-between expense-row py-2 border-bottom">
              <div className="flex-grow-1 me-2">
                <small>
                  <b>{formatDate(expense.date)}</b>
                </small>{" "}
                <small>
                  {expense.description.length > 12 ? expense.description.substring(0, 12) + ".." : expense.description} - {expense.category}
                </small>
              </div>
              <div className="me-1">
                <small>
                  <strong>${expense.amount.toFixed(2)}</strong>
                </small>
              </div>
              <div>
                <img onClick={() => deleteExpense(expense.id)} src={bin.src} width="20" disabled={loading} />
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="pagination mt-3">
          <button className="btn btn-secondary me-2" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>
          {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((number) => (
            <button key={number} className={`btn ${currentPage === number ? "btn-primary" : "btn-outline-secondary"} me-2`} onClick={() => paginate(number)}>
              {number}
            </button>
          ))}
          <button className="btn btn-secondary" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default ExpenseTracker;
