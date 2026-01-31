
import { List } from '@mui/material';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <List sx={{ width: '100%' }}>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </List>
  );
};

export default TaskList;
