
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import TodayIcon from '@mui/icons-material/Today';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
          <TodayIcon sx={{ mr: 1.5, color: 'primary.main', fontSize: { xs: '2rem', sm: '2.5rem'} }} />
          <Typography 
            variant="h4" 
            component="div" 
            sx={{ 
              fontWeight: 700,
              background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            TaskMaster
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
