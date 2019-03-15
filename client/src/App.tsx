import React, { Component } from 'react'
import Quiz from './pages/quiz'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Everyone can appreciate great literature. There's something about that opening line that can just hook you in; and great opening lines, there have been a few over the centuries. Here's your shot at proving how well you know them! :) */}
        <Quiz />
      </div>
    );
  }
}

export default App;
