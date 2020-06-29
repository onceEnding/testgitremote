import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import './Comment.css'

class CommentBox extends React.Component {
  render() {
    let commentList = [
      {"name":"第一天","date":"2010-01-12","content":"真是开心的一天"},
      {"name":"第二天","date":"2010-01-13","content":"真是开心的一天"},
      {"name":"第三天","date":"2010-01-14","content":"真是开心的一天"}
    ]
    return (
      <div className="box">
        <CommentList list={commentList} />
        <CommentForm />
      </div>
    )
  }
}

export default CommentBox