import React, { Component } from 'react';

class TaskCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false },
        { id: 3, text: 'Read documentation', completed: false }
      ]
    };
  }

  handleCheckboxChange(id) {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  }

  render() {
    const { tasks } = this.state;
    const completedCount = tasks.filter(task => task.completed).length;

    const containerStyle = {
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      width: '300px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif'
    };

    const taskStyle = {
      marginBottom: '10px'
    };

    const countStyle = {
      fontWeight: 'bold',
      marginTop: '15px'
    };

    return (
      <div style={containerStyle}>
        <h2>Task Counter</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map(task => (
            <li key={task.id} style={taskStyle}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => this.handleCheckboxChange(task.id)}
                />
                {' '}
                {task.text}
              </label>
            </li>
          ))}
        </ul>
        <div style={countStyle}>
          Completed tasks: {completedCount} / {tasks.length}
        </div>
      </div>
    );
  }
}

export default TaskCounter;
