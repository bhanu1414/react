import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CircularProgress from '@mui/joy/CircularProgress';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Tooltip from '@mui/joy/Tooltip';
import Sheet from '@mui/joy/Sheet';
import PieChart from '@mui/icons-material/PieChart';
import SmsIcon from '@mui/icons-material/Sms';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';
import { Link } from 'react-router-dom';

export default function ColorInversionNavigation() {
  const [color, setColor] = React.useState('neutral');
  return (
    <Box sx={{ display: 'flex', borderRadius: 'sm', overflow: 'auto', width:'100%',margin:'1%',position:'fixed' }}>
      <Sheet
        variant="solid"
        invertedColors
        sx={[
          { p: 2 },
          color !== 'neutral' && {
            bgcolor: `${color}.700`,
          },
        ]}
      >       
        <List
          sx={{
            '--ListItem-radius': '8px',
            '--List-gap': '4px',
            flexGrow: 0,
            minWidth: 200,
          }}
          
        >
          <Link style={{ textDecoration:"none" }} to="/Dashboard">
          <ListItemButton>
            <ListItemDecorator>
              <PieChart />
            </ListItemDecorator>
            Dashboard
          </ListItemButton>
          </Link>
          <Link style={{ textDecoration:"none" }} to="/About">
          <ListItemButton>
            <ListItemDecorator>
              <SmsIcon />
            </ListItemDecorator>
            About
          </ListItemButton>
          </Link>
          <Link style={{ textDecoration:"none" }} to="/Services">
          <ListItemButton>
            <ListItemDecorator>
              <PersonIcon />
            </ListItemDecorator>
            Services
            </ListItemButton>
            </Link>
            <Link style={{ textDecoration:"none" }} to="/Contact">
          <ListItemButton>
            <ListItemDecorator>
              <PersonIcon />
            </ListItemDecorator>
            Contact
            </ListItemButton>
            </Link>
            <Link style={{ textDecoration:"none" }} to="/Item">
            <ListItemButton>
            <ListItemDecorator>
              <PersonIcon />
            </ListItemDecorator>
             Item 
          </ListItemButton>
          </Link>
          <ListItem nested>
            <ListSubheader>Shortcuts</ListSubheader>
            <List>
              <ListItemButton>Favouritrs</ListItemButton>
              <ListItemButton>My orders</ListItemButton>
              <ListItemButton>Reports</ListItemButton>
              <ListItemButton></ListItemButton>
              <ListItemButton></ListItemButton>
            </List>
          </ListItem>
        </List>
        <Card
          variant="soft"
          orientation="horizontal"
          sx={{ mt: 2, display: 'flex', alignItems: 'center', borderRadius: 'sm' }}
        >
          <CircularProgress value={100} determinate thickness={8} size="lg">
            100%
          </CircularProgress>
          <CardContent sx={{ ml: 2 }}>
            <Chip
              size="sm"
              variant="outlined"
              sx={{ alignSelf: 'flex-start', mb: 1 }}
            >
             <ListItemButton>Update</ListItemButton>
            </Chip>
            <Typography sx={{ fontSize: 'xs' }}>Latest version: 9.5.0.1</Typography>
          </CardContent>
        </Card>
      </Sheet>
      <Sheet
        variant="solid"
        invertedColors
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          bgcolor: `${color}.800`,
          '& .MuiBadge-root': { '--Badge-ringColor': '#FFF' },
          '& .MuiBadge-colorSuccess': { bgcolor: 'success.400' },
          '& button': {
            borderRadius: '50%',
            padding: 0,
            '--IconButton-size': '3rem',
          },
        }}
      >
        <Badge badgeContent="99+" badgeInset="10%" size="sm">
          <IconButton>
            <Avatar src="/static/images/avatar/3.jpg" />
          </IconButton>
        </Badge>
        <Badge
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          badgeInset="15%"
          color="success"
        >
          <IconButton>
            <Avatar src="/static/images/avatar/4.jpg" />
          </IconButton>
        </Badge>
        
          <Link to="/login">
          <ListItemButton>Logout</ListItemButton>
          </Link>

        <Tooltip title="Add another chat" variant="soft">
          <IconButton sx={{ color: 'text.tertiary' }}>
            <AddIcon />
          </IconButton>
        </Tooltip>
        <IconButton
          onClick={() => {
            const colors = ['primary', 'neutral', 'danger', 'success', 'warning'];

            const nextColorIndex = colors.indexOf(color) + 1;
            setColor(colors[nextColorIndex] ?? colors[0]);
          }}
          sx={{ mt: 'auto', color: 'text.tertiary' }}
        >
          <ColorLensRoundedIcon />
        </IconButton>
      </Sheet>
    </Box>
  );
}
