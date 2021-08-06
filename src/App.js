import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio';
// import Services from './components/pages/Services';
// import Products from './components/pages/Products';
// import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
          <Navbar />
          <Switch>
            {/* Everytime you go to '/', it opens up the Home page */}
            <Route path='/' exact component={Home} />
            {/* <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} /> */}
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
      </Router>
    </>
    
  );
}

export default App;
