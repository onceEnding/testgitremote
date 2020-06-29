import React from 'react'

class CommentForm extends React.Component {
  render() {
    /*
       * 添加评论的步骤
       * 1、输入评论消息，点击提交
       * 2、获取用户输入的数据，组成一个对象
       * 3、组成的对象，传到box中
       * 4、向box中的数组添加对象
       * 5、重现渲染组件
       * */
    return (
      <div className="form">
        <textarea name="txtContent" id="txtContent" cols="30" rows="10"></textarea>
        <br/>
        <button>提交</button>
      </div>
    )
  }
}

export default CommentForm