
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <TodayIcon sx={{ mr: 1.5, color: 'primary.main' }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
            Daily Planner
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
