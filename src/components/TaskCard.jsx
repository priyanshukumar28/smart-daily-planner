
import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  IconButton,
  Box,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

const TaskCard = ({ task, toggleComplete, deleteTask }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Card 
        variant="outlined"
        sx={{
          width: '100%',
          mb: 2,
          bgcolor: task.completed ? '#fafafa' : 'background.paper',
          borderLeft: `5px solid ${
            task.completed ? theme.palette.grey[400] : theme.palette[getPriorityColor(task.priority)].main
          }`,
          transition: 'all 0.3s',
          '&:hover': {
            boxShadow: theme.shadows[4]
          }
        }}
      >
        <CardContent sx={{ display: 'flex', alignItems: 'center', p: { xs: 1, md: 2 } }}>
          <Checkbox
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            sx={{ mr: { xs: 0, sm: 1} }}
          />
          <Box sx={{ flexGrow: 1, textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? 0.6 : 1 }}>
            <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.15rem'}, fontWeight: 500 }}>{task.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {format(new Date(task.id), isMobile ? 'MMM d' : 'MMM d, yyyy h:mm a')}
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
            <Chip label={task.category} size="small" sx={{ mr: 1.5, textTransform: 'capitalize', bgcolor: theme.palette.grey[200] }} />
            <Chip
              label={task.priority}
              size="small"
              variant="outlined"
              color={getPriorityColor(task.priority)}
              sx={{ textTransform: 'capitalize', fontWeight: 600 }}
            />
          </Box>
          <IconButton onClick={() => deleteTask(task.id)} aria-label="delete" sx={{ ml: { xs: 0, sm: 1} }}>
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
  );
};

export default TaskCard;
