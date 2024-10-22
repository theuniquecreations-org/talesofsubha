import React, { useState, useEffect } from "react";
import AddFriend from "./AddFriend";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import BalanceSummary from "./BalanceSummary";
import Login from "./Login"; // Import the login component
import subaa from "@/images/subaa.png";

const App = () => {
  const [friends, setFriends] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null); // Track the logged-in user
  const [showAddFriend, setShowAddFriend] = useState(false); // Toggle visibility of Add Friend
  const [selectedFriend, setSelectedFriend] = useState(null); // Store the selected friend
  const [showAddExpense, setShowAddExpense] = useState(false); // Toggle visibility of Add Expense form
  const [showExpenseList, setShowExpenseList] = useState(false); // Toggle visibility of Expense List
  const [settleUpAmounts, setSettleUpAmounts] = useState({}); // Track settle-up amounts for each friend
  const [showSettleUp, setShowSettleUp] = useState(false); // Toggle visibility of Settle Up modal
  const [friendToSettle, setFriendToSettle] = useState(null); // Store the selected friend for settling up

  // Load user data from localStorage
  useEffect(() => {
    if (loggedInUser) {
      const storedFriends = JSON.parse(localStorage.getItem(`${loggedInUser}_friends`));
      const storedExpenses = JSON.parse(localStorage.getItem(`${loggedInUser}_expenses`));
      setFriends(storedFriends || []);
      setExpenses(storedExpenses || []);
    }
  }, [loggedInUser]);

  // Save user data to localStorage when friends or expenses change
  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem(`${loggedInUser}_friends`, JSON.stringify(friends));
      localStorage.setItem(`${loggedInUser}_expenses`, JSON.stringify(expenses));
    }
  }, [friends, expenses, loggedInUser]);

  // Add a new friend
  const addFriend = (friendName) => {
    setFriends([...friends, { name: friendName, balance: 0 }]);
  };

  // Add a new expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);

    const updatedFriends = friends.map((friend) => {
      if (friend.name === expense.friend) {
        if (expense.type === "split") {
          // Split equally: each person owes half
          friend.balance += expense.amount / 2;
        } else if (expense.type === "owe") {
          // You owe: you owe the full amount
          friend.balance += expense.amount;
        } else if (expense.type === "friend-owes") {
          // Friend owes: your friend owes the full amount
          friend.balance -= expense.amount;
        }
      }
      return friend;
    });
    setFriends(updatedFriends);
    setShowAddExpense(false); // Close modal after adding expense
  };

  // Settle Up: Adjust the balance by a partial amount for a specific friend and log the transaction
  const handleSettleUp = () => {
    const settleAmount = parseFloat(settleUpAmounts[friendToSettle] || 0);
    if (!isNaN(settleAmount) && settleAmount > 0) {
      const updatedFriends = friends.map((friend) => {
        if (friend.name === friendToSettle) {
          friend.balance -= settleAmount;
        }
        return friend;
      });

      // Log the settle-up transaction in expenses
      setExpenses([
        ...expenses,
        {
          friend: friendToSettle,
          description: `Settle Up with ${friendToSettle}`,
          amount: settleAmount,
          type: "settle",
        },
      ]);

      setFriends(updatedFriends);
      setSettleUpAmounts({ ...settleUpAmounts, [friendToSettle]: "" }); // Clear the input field
      setShowSettleUp(false); // Close the modal after settle up
    }
  };

  // Handle user login
  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  // Handle friend selection for adding expense
  const handleFriendSelection = (friendName) => {
    setSelectedFriend(friendName);
    setShowAddExpense(true); // Show the modal for Add Expense
  };

  // Handle settle-up input changes
  const handleSettleAmountChange = (e) => {
    setSettleUpAmounts({
      ...settleUpAmounts,
      [friendToSettle]: e.target.value,
    });
  };

  // Open Settle Up modal and pre-fill amount owed or owed by the friend
  const openSettleUpModal = (friendName) => {
    const friend = friends.find((f) => f.name === friendName);
    const balance = Math.abs(friend.balance); // Get absolute value of balance (owed or owed to)
    setFriendToSettle(friendName);
    setSettleUpAmounts({ ...settleUpAmounts, [friendName]: balance.toFixed(2) }); // Pre-fill the input with balance
    setShowSettleUp(true); // Show the modal
  };

  // Toggle Expense List sliding up
  const toggleExpenseList = () => {
    setShowExpenseList(!showExpenseList);
  };

  // Close Expense List when clicking outside (optional)
  const closeExpenseListOnClickOutside = (e) => {
    if (e.target.classList.contains("slide-up-expense-list")) {
      setShowExpenseList(false);
    }
  };

  // If not logged in, show the login form
  if (!loggedInUser) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      {/* Navigation with toggle button for Add Friend */}
      <nav className="navbar navbar-light titlesplitequally">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src={subaa.src} alt="Logo" width="50" /> Split Equally
          </a>
          <button className="btn btn-primary btn-warning border" onClick={() => setShowAddFriend(!showAddFriend)}>
            {showAddFriend ? "Hide Add Friend" : "Add Friend"}
          </button>
        </div>
      </nav>

      <div className="container mt-1">
        <div align="right">
          <p className="mb-0">Welcome, {loggedInUser}!</p>
        </div>
        {/* Conditionally render Add Friend form */}
        {showAddFriend && <AddFriend onAddFriend={addFriend} />}
        <BalanceSummary friends={friends} onSettleUp={handleSettleUp} />
        {/* Display friend list with balance and option to select a friend */}
        <h5>Friend List</h5>
        <ul className="list-group mb-4">
          {friends.map((friend, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>
                {friend.name}: {friend.balance < 0 ? `You owe $${Math.abs(friend.balance)}` : `Owes you $${Math.abs(friend.balance)}`}
              </span>
              <div>
                {/* Add Expense Button */}
                <button className="btn btn-sm btn-warning ml-1" onClick={() => handleFriendSelection(friend.name)}>
                  Add
                </button>{" "}
                {/* Settle Up Button */}
                <button className="btn btn-sm btn-success ml-2" onClick={() => openSettleUpModal(friend.name)}>
                  Settle
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Add Expense Modal */}
        {showAddExpense && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Expense for {selectedFriend}</h5>
                </div>
                <div className="modal-body">
                  <AddExpense onAddExpense={addExpense} friends={friends} selectedFriend={selectedFriend} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowAddExpense(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settle Up Modal */}
        {showSettleUp && (
          <div className="modal-overlay">
            <div className="modal-container">
              <div className="modal-content grid">
                <div className="modal-header">
                  <h5 className="modal-title">Settle Up with {friendToSettle}</h5>
                </div>
                <div className="modal-body">
                  <input type="number" className="form-control" placeholder="Enter amount" value={settleUpAmounts[friendToSettle] || ""} onChange={handleSettleAmountChange} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-warning w-100" onClick={handleSettleUp}>
                    Confirm Settle Up
                  </button>
                </div>
                <button type="button" className="btn btn-secondary" onClick={() => setShowSettleUp(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Expense List Sliding Up from Bottom */}
        <div className="text-center">
          <button className="btn btn-warning mt-3" onClick={toggleExpenseList}>
            {showExpenseList ? "Hide Expense List" : "View Expense List"}
          </button>
        </div>

        <div className={`slide-up-expense-list ${showExpenseList ? "show" : ""}`} onClick={closeExpenseListOnClickOutside}>
          <div className="container p-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-3">Expense List</h5>
              <button className="btn btn-secondary btn-sm" onClick={toggleExpenseList}>
                Close
              </button>
            </div>
            <ExpenseList expenses={expenses} />
          </div>
        </div>
      </div>

      {/* Styles for the modals and slide-up */}
      <style jsx>{`
        /* Modal Overlay for Background Fade */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5); /* Faded background */
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }

        /* Modal Container for centering */
        .modal-container {
          background: white;
          padding: 20px;
          width: 100%;
          max-width: 500px;
          border-radius: 8px;
          box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
        }

        .modal-content .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        /* Slide-up Expense List */
        .slide-up-expense-list {
          position: fixed;
          bottom: -100%;
          left: 0;
          width: 100%;
          background: white;
          height: 70%;
          transition: bottom 0.3s ease-in-out;
          box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1050;
        }

        .slide-up-expense-list.show {
          bottom: 0;
        }
      `}</style>
    </>
  );
};

export default App;
