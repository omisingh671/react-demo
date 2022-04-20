import React from 'react';
import NewsListItem from './NewsListItem';

const NewsList = (props) => {

    const newsListItems = props.news.map((item) => (
        <NewsListItem item={item} key={item.id} />
    ));

    //console.log("props.news");

    return (
        <React.Fragment>
            {props.children}
            {newsListItems}
            {props.children}
        </React.Fragment>
    )
}

export default NewsList;