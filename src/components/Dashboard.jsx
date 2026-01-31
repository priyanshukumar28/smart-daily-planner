
import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { format } from 'date-fns';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Header from './Header';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import StarIcon from '@mui/icons-material/Star';

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
      new Date(task.id).toDateString() === today.toDateString()
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Header />
      <Container maxWidth="xl" sx={{ mt: { xs: 2, md: 4 }, mb: { xs: 2, md: 4 } }}>
        <Box sx={{ 
          display: 'flex', 
          gap: { xs: 2, md: 4 },
          flexDirection: { xs: 'column', lg: 'row' }
        }}>
          <Box sx={{ flex: '2 1 0px' }}>
            <Paper sx={{ p: { xs: 2, md: 3 }, display: 'flex', flexDirection: 'column', height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Add a New Task
              </Typography>
              <AddTaskForm addTask={addTask} />
              <Typography variant="h5" gutterBottom sx={{ mt: { xs: 3, md: 4 } }}>
                My Tasks
              </Typography>
              <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            </Paper>
          </Box>
          <Box sx={{ flex: '1 1 0px' }}>
            <Paper
              sx={{
                p: { xs: 2, md: 3 },
                display: 'flex',
                flexDirection: 'column',
                background: (theme) => `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: '#ffffff',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <StarIcon sx={{ color: '#ffffff', mr: 1.5, fontSize: '2rem' }} />
                <Typography variant="h5" sx={{ color: '#ffffff'}}>
                  Today's Focus
                </Typography>
              </Box>
              <Typography variant="body1" gutterBottom sx={{ color: '#ffffff', opacity: 0.9 }}>
                {format(today, 'EEEE, MMMM do')}
              </Typography>
              <Box sx={{ mt: 3, flexGrow: 1 }}>
                {todaysTasks.length > 0 ? (
                  todaysTasks.map((task) => (
                    <Typography key={task.id} variant="body1" sx={{ mb: 1.5, color: '#ffffff', fontWeight: 500 }}> - {task.title} </Typography>
                  ))
                ) : (
                  <Typography variant="body1" sx={{ color: '#ffffff', opacity: 0.9 }}>No tasks for today. Enjoy your day!</Typography>
                )}
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Dashboard;
