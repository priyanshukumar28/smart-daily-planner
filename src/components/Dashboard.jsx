
import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { format } from 'date-fns';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Header from './Header';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const today = new Date();
  const todaysTasks = tasks.filter(
    (task) =>
      !task.completed &&
      format(new Date(task.id), 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7} lg={8}>
            <Paper sx={{ p: { xs: 2, md: 3 }, display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" gutterBottom>
                Add a New Task
              </Typography>
              <AddTaskForm addTask={addTask} />
              <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
                My Tasks
              </Typography>
              <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={5} lg={4}>
            <Paper
              sx={{
                p: { xs: 2, md: 3 },
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                bgcolor: 'primary.main',
                color: '#ffffff',
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: '#ffffff'}}>
                Today's Focus
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: '#ffffff'}}>
                {format(today, 'EEEE, MMMM do')}
              </Typography>
              <Box sx={{ mt: 3 }}>
                {todaysTasks.length > 0 ? (
                  todaysTasks.map((task) => (
                    <Typography key={task.id} variant="body1" sx={{ mb: 1, color: '#ffffff' }}> - {task.title} </Typography>
                  ))
                ) : (
                  <Typography variant="body1" sx={{ color: '#ffffff'}}>No tasks for today. Time to relax!</Typography>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
