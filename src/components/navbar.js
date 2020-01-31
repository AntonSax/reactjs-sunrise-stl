import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { Home, Book, AccountBox } from '@material-ui/icons'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'


function NavBar(props) {
    return (
        <div>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Sunrise StL
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
    )
}


export default NavBar;
