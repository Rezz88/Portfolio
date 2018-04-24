import React, { Component } from 'react';
import { Switch, Route, } from 'react-router';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import TodoPage from './Components/TodoPage';
import './App.css';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/About"  component={AboutPage} />
        <Route path="/Todo"   component={TodoPage} />
      </Switch>
    );
  }
}

export default App;
























// import React, { Component } from 'react';
// import { Switch, Route } from 'react-router';
// import HomePage from './HomePage';
// import AboutMe from './AboutMe';

// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <Switch>
//         <Route exact path="/" component={HomePage}/>
//         <Route path="/about" component={AboutMe}/>
//       </Switch>
//     );
//   }
// }

// export default App;