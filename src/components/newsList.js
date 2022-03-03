import React, { Component } from 'react';
import NewsListItem from './NewsListItem';

class NewsList extends Component {

    constructor(props) {
        super(props);
    }

    newsListItems = this.props.news.map((item) => (
        <NewsListItem item={item} key={item.id} name="Amar" age="28" />
    ))

    render() {

        return (
            <React.Fragment>
                {this.newsListItems}
            </React.Fragment>
        )

    }
}

export default NewsList;