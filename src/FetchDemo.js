import React from 'react';
import axios from 'axios';

class FetchData extends React.Component {
    constructor(props) {
        super(props);

        this.state = { posts: [] };
    }

    fetchData() {
        const url = 'http://www.reddit.com/r/${this.props.subreddit}.json';
        axios.get(url)
            .then(res => {
                const posts = res.data.data.children.map(obj => obj.data);
                this.setState({ posts });
            });
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            // List of posts
            <div>
                <h1>r/{this.props.subreddit}</h1>
                <ul>
                    {
                        this.state.posts.map( post => 
                            <li key={post.id}>
                                <a href={post.url}>
                                    {post.title}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
            
        )
    }
}

export default FetchData;
