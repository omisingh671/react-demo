import React, { Component } from "react";

class NewsListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item } = this.props;
        //console.log(item.title);
        return (
            <div className='news-item alert'>
                <h3>{item.title}</h3>
                <div>{item.feed}</div>
            </div>
        )
    }
}

export default NewsListItem;