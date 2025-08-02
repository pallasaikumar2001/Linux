import React, { useEffect, useState } from 'react';

function App() {
  const [stage, setStage] = useState("signup");
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem("userData")) || {});
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const [signupUserID, setSignupUserID] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const [loginUserID, setLoginUserID] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const storedTodos = JSON.parse(localStorage.getItem(`todos_${currentUser}`)) || [];
      setTodos(storedTodos);
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(`todos_${currentUser}`, JSON.stringify(todos));
    }
  }, [todos, currentUser]);

  const handleSignup = (e) => {
    e.preventDefault();
    if (signupUserID && signupPassword) {
      if (data[signupUserID]) {
        alert("UserID already exists");
        return;
      }
      const newData = { ...data, [signupUserID]: signupPassword };
      setData(newData);
      setStage("login");
    }
    
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (data[loginUserID] === loginPassword) {
      setCurrentUser(loginUserID);
      setStage("todo");
      setLoginError("");
    } else {
      setLoginError("Invalid UserID or Password");
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setStage("login");
    setTodos([]);
  };

  const addTodo = () => {
    if (task.trim()) {
      if (editIndex !== null) {
        const updated = [...todos];
        updated[editIndex] = task.trim();
        setTodos(updated);
        setEditIndex(null);
      } else {
        setTodos([...todos, task.trim()]);
      }
      setTask("");
    }
  };

  const editTodo = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "20px" }}>
      {stage === "signup" && (
        <form onSubmit={handleSignup}>
          <h3>Please Sign Up</h3>
          <input
            type="text"
            placeholder="Enter UserID"
            value={signupUserID}
            onChange={(e) => setSignupUserID(e.target.value)}
            style={{height:"35px", width: "200px"}}
          />
          <br />
          <input
            type="email"
            placeholder="Enter EmailID"
            value={signupEmail}
            onChange={(e) => setSignupEmail(e.target.value)}
            style={{height:"35px", width: "200px"}}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            style={{height:"35px", width: "200px"}}
          />
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setStage("login")} style={{ marginLeft: "10px" }}>
            Sign In
          </button>
        </form>
      )}

      {stage === "login" && (
        <form onSubmit={handleLogin}>
          <h3>Please Login</h3>
          <input
            type="text"
            placeholder="Enter UserID"
            value={loginUserID}
            onChange={(e) => setLoginUserID(e.target.value)}
            style={{height:"35px", width: "200px"}}
          />
          <br />
          <input
            type="password"
            placeholder="Enter Password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            style={{height:"35px", width: "200px"}}

          />
          <br />
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setStage("signup")} style={{ marginLeft: "10px" }}>
            Sign Up
          </button>
          {loginError && <p style={{ color: "red" }}>{loginError}</p>}
        </form>
      )}

      {stage === "todo" && (
        <div>
          <h3>Welcome, {currentUser}!</h3>
          <button onClick={handleLogout}>Logout</button>
          <br /><br />
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            style={{height:"35px", width: "200px"}}
          />
          <button onClick={addTodo} style={{backgroundColor:"green", color:"white"}}>{editIndex !== null ? "Update" : "Add"}</button>
          <ul>
            {todos.map((t, i) => (
              <li key={i}>
                {t}
                <button onClick={() => editTodo(i)} style={{ marginLeft: '10px', backgroundColor:"lightblue" }}>Edit</button>
                <button onClick={() => removeTodo(i)} style={{ marginLeft: '5px', backgroundColor:"red", color:"white" }}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
