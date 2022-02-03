import React from 'react';
import { render } from 'react-dom';
import Comment from './comment';
import '../css/style.css';
import data from '../data/data.json';

import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
const App = () => {
  return (
    <div className="container">
      <Comment />
      <Comment />
    </div>
  );
};
render(<App />, document.getElementById('root'));
