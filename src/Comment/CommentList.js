import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
  // 什么叫高阶函数     函数中可以传入另一个函数作为参数的函数
  render() {
    let CommentArr = this.props.data.map((item, index) => {
    // let commentList = this.props.list.map(function(item, index) {
      let { author, date, content } = item
      return (
        <Comment key={index} author={author} date={date}>
          {/*可以作为children传值过去*/}
          {content}
        </Comment>
      )
    })
    return (
      <div className="list">
        {CommentArr}
      </div>
    )
  }
}

export default CommentList