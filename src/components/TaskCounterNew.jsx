import React, { useState } from 'react';

const TaskCounterNew = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Read documentation', completed: false }
  ]);

  const handleCheckboxChange = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, maxWidth: 400 }}>
      <h3>Task List</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ marginBottom: 8 }}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
                style={{ marginRight: 8 }}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: 12 }}>
        Completed tasks: {completedCount} / {tasks.length}
      </div>
    </div>
  );
};

export default TaskCounterNew;
