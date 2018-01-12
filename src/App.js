import React, { Component } from 'react';
import './App.css';
import jdenticon from 'jdenticon'

class App extends Component {

constructor(props) {
  super(props);
		this.state = {
			text: 'Philippians 4:6-7',
      generateIdenticon: false
     }
}
 onChange (event) {
   this.setState({text: event.target.value});
    jdenticon.update('svg', event.target.value);
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <canvas className="App-logo" alt="logo" width="80" height="80" data-jdenticon-value="antonio"/>

          <h1 style ={styles.header}>Jdenticon Generator</h1>
        </header>
        <p className="App-intro">
        </p>
        <svg id="canvas" width="460" height="460" data-jdenticon-value={this.state.text}/>
        <div >
          <input style ={styles.input} type="text" onChange={this.onChange.bind(this)} name="fname" placeholder="Try me!"/>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

const styles ={
  input:{
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 300,
    letterSpacing: 4,
    outline: 'none',
    textAlign:'center'

  },
  header:{
    fontFamily: 'Raleway, sans-serif',
    fontWeight: 300,
    letterSpacing: 6,
    outline: 'none'

  }


}

export default App;
