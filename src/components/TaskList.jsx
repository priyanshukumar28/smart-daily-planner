
import React from 'react';
import { Grid } from '@mui/material';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }}>
      {tasks.map((task) => (
        <Grid item xs={12} key={task.id}>
          <TaskCard
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TaskList;
