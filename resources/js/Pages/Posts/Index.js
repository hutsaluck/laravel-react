import {Component} from "react";

class PostsIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    fetchPosts() {
        axios.get('/api/posts')
            .then(response => this.setState({
                posts: response.data.data
            }))
    }

    componentDidMount() {
        this.fetchPosts()
    }

    renderPosts(){
        return this.state.posts.map( post => <tr>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.created_at}</td>
        </tr>)
    }

    render() {
        return (
            <div className="overflow-hidden overflow-x-auto p-6 bg-white border-gray-200">
                <div className="min-w-full align-middle">
                    <table className="table">
                        <thead className="table-header">
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Created at</th>
                        </tr>
                        </thead>
                        <tbody className="table-body">
                            {this.renderPosts()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PostsIndex

