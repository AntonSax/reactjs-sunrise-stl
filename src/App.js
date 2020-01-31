import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './home.js'
import Navbar from './navbar.js'
import Contact from './contact.js'
import Posts from './posts.js'
import Header from './header.js'

export default function App() {
  return (
    <Header />
  );
}
