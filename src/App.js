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

import Home from './home'
import Navbar from './components/navbar'
import Contact from './contact'
import Posts from './posts'
import CourseList from './components/courselist'

export default function App() {
  return (
    <div>
      <Navbar />
      <CourseList />
    </div>
  );
}
