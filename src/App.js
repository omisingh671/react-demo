import { Component } from 'react';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NewsList from './components/NewsList';
import Life from './components/LifeCycle';

import JSON from './db.json';

class App extends Component {

  state = {
    news: JSON,
    filtered: JSON,
    active: true
  }

  getKeywords = (event) => {
    console.log(event);
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keywords) > -1;
    });

    this.setState({
      filtered
    });
  }

  render() {

    const filteredNews = this.state.filtered;
    //console.log(filteredNews);

    return (
      <main>
        <div className="app-header">
          <Header keywords={this.getKeywords} />
        </div>

        <div className='container flex-dir-column'>
          <div style={{ width: "100%", border: "1px solid", height: "50px" }}>
            {this.state.active ? <Life /> : null}
          </div>

          <div style={{ width: "100%", border: "1px solid", height: "50px" }}><button onClick={() => this.setState({ active: !this.state.active })}>Toggle Life</button></div>
        </div>

        <div className='container'>
          <div className='newslist-wrapper'>
            <NewsList news={filteredNews}>
              <h2>News Item - Children Heading</h2>
              <p>News Item - Children Content</p>
            </NewsList>
          </div>
        </div>

        <div className='container'>

          <article role="main">
            <p className='alert'>MainContent</p>
          </article>

          <aside role="complementary">
            <p className='alert'>SideBar</p>
          </aside>
        </div>

        <div className="app-footer">
          <Footer />
        </div>
      </main>
    )
  }
}

export default App;
