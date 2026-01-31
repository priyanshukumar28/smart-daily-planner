
import React, { useState } from 'react';
import { TextField, Button, MenuItem, Grid, Box } from '@mui/material';

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Personal');
  const [priority, setPriority] = useState('Medium');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask({ title, category, priority });
    setTitle('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Study">Study</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            select
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ height: '56px' }}>
            Add Task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddTaskForm;
