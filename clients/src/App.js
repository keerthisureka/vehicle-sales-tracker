import './App.css';

import Graph from './components/Graph';
import Form from './components/Form';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewSale from './components/NewSale';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Vehicle Sales Tracker</h1>
        <Router>
          <Switch>
            {/* Route for the page with grid columns */}
            <Route path="/" exact>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Chart */}
                <Graph></Graph>
                {/* Form */}
                <Form></Form>
              </div>
            </Route>
            {/* Route for the page with NewSale component */}
            <Route path="/newsale/" component={NewSale}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;