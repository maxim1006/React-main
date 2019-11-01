import React, {Component} from 'react';
import {fetchPosts} from "../../store/actions";
import {connect} from "react-redux";
import Post from "./Post";

class PostList extends Component {
    componentDidMount() {
        this.props.fetchPosts();

    }

    render() {
        const {posts} = this.props;

        return (
            <ul>
                {
                    posts.map((post, index) => {
                        return (
                            <li key={post.id}>
                                <Post {...post} index={index} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    posts: state.posts
});

export default connect(mapStateToProps, {fetchPosts})(PostList);
