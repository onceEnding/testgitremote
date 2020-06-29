import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
  render() {
    let commentList = this.props.list.map(function(item, index) {
      let { name, date, content } = item
      return (
        <Comment key={index} name={name} date={date}>
          {/*可以作为children传值过去*/}
          {content}
        </Comment>
      )
    })
    return (
      <div className="list">
        {commentList}
      </div>
    )
  }
}

export default CommentList