import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import './Comment.css'

class CommentBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      commentlist: this.props.data
    };
    this.addComment = this.addComment.bind(this);
  }

  addComment(obj) {
    this.setState({
      commentlist: [...this.state.commentlist,obj]
    })
    // props是只读的
  }

  render() {

    return (
      <div className="box">
        <CommentList  data={this.state.commentlist} />
        <CommentForm onAddComment={this.addComment} />
      </div>
    )
  }
}

export default CommentBox