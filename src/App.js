import { Component } from 'react';
import Header from './components/header/Header';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app-header">
        <Header />
      </div>
    )
  }
}

export default App;
