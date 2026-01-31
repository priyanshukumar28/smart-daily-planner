
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
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          <TextField
            label="What needs to be done?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
            variant="filled"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            variant="filled"
          >
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Study">Study</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            select
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            fullWidth
            variant="filled"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" size="large" fullWidth sx={{ height: '56px' }}>
            Add Task
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddTaskForm;
