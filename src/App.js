import React, {Component} from 'react';


class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      current: "",
      previous: []
    }
  }
  render(){
    return(
      <input className='result' type="text" value={this.state.current}/>

    )
  }
}


export default App