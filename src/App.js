import React, {Component} from 'react';
// import Foot from './footer.js'
// import Head from './header.js'
// import Body from './body.js'


class App extends Component {
  constructor() {
    super()
    
    this.state = {
      user: "in"  
    }
  }


    render() {
      if(this.state.user==="in"){
        return (<h1>The user is logged {this.state.user}</h1>);
      } else {
        return (<h1>The user is logged {this.state.user}</h1>);
      }
  }
}

export default App;
