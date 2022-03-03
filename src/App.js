import { Component } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NewsList from './components/NewsList';

import './index.css';
import JSON from './db.json';

class App extends Component {

  state = {
    news: JSON
  }

  render() {

    //console.log(JSON);

    return (
      <section>
        <div className="app-header">
          <Header />
        </div>
        <div className='container'>
          <div className='newslist-wrapper'>
            <NewsList news={this.state.news} />
          </div>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </section>
    )
  }
}

export default App;
