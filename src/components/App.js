import React from 'react';

class App extends React.Component{
  render(){
    return(
      <div className="container mt-3">
        <h1 className="text-center text-success">My Redux App</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App;
