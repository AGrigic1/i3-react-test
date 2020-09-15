import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import annual_report from './pages/annual_report';
import financial_highlights from './pages/financial_highlights';
import letter_to_shareowners from './pages/letter_to_shareowners';
import downloads from './pages/downloads';

function App() {
  return (
    <div className="App">
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={annual_report} />
          <Route path='/financial_highlights' exact component={financial_highlights} />
          <Route path='/letter_to_shareowners' exact component={letter_to_shareowners} />
          <Route path='/downloads' exact component={downloads} />
        </Switch>
      </Router>
    </>
    </div>
  );
}

export default App;
