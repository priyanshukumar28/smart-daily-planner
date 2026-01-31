
import {
  ListItem,
  Card,
  CardContent,
  Typography,
  Checkbox,
  IconButton,
  Box,
  Chip,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

const TaskCard = ({ task, toggleComplete, deleteTask }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'error';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'info';
      default:
        return 'default';
    }
  };

  return (
    <ListItem disablePadding sx={{ mb: 2 }}>
      <Card 
        variant="outlined"
        sx={{
          width: '100%',
          bgcolor: task.completed ? '#fafafa' : 'background.paper',
          borderLeft: `5px solid ${
            task.completed ? '#e0e0e0' : getPriorityColor(task.priority) + '.main'
          }`,
          transition: 'background-color 0.3s',
        }}
      >
        <CardContent sx={{ display: 'flex', alignItems: 'center', p: { xs: 1, md: 2 } }}>
          <Checkbox
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            sx={{ mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? 0.6 : 1 }}>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', md: '1.25rem'} }}>{task.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {format(new Date(task.id), 'MMM d, yyyy h:mm a')}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Chip label={task.category} size="small" sx={{ mr: 1.5, textTransform: 'capitalize' }} />
            <Chip
              label={task.priority}
              size="small"
              variant="outlined"
              color={getPriorityColor(task.priority)}
              sx={{ textTransform: 'capitalize' }}
            />
          </Box>
          <IconButton onClick={() => deleteTask(task.id)} aria-label="delete" sx={{ ml: 1 }}>
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
    </ListItem>
  );
};

export default TaskCard;
