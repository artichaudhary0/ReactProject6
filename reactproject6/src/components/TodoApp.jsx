import { useState } from "react";

const ToDoApp = () => {
  // box contain sare task []
  const [tasks, setTasks] = useState([]);

  // for particualr task
  const [task, setTask] = useState("");

  // add task ko [] array
  const addTask = () => {
    // react , complete : false
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  // const toggleTask
  const toggleTask = (index) => {
    const upadteTask = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(upadteTask);
  };

  // delete
  const deleteTask = (index) => {
    // task1 , task 2 , task3
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <h2>To do</h2>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul style={{ listStyle: "none" }}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{ textDecoration: t.completed ? "line-through" : "none" }}
          >
            <span
              onClick={() => {
                toggleTask(index);
              }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoApp;
