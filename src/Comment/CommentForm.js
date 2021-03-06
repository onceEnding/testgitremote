import React from 'react'

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.addComment = this.addComment.bind(this);
    // this.txtName = React.createRef();
  }

  // addComment = () => {} 解决this指向，箭头函数 可能有兼容问题

  // 添加评论的方法
  addComment(e) {
    e.persist();
    console.log(e.target);
    // 获取用户输入的数据
    console.log(this);
    let name = this.refs.txtName.value;
    let content = this.refs.txtContent.value;
    var obj = {"author":name,"date":(new Date().toLocaleDateString()),"content":content};
    this.props.onAddComment(obj);
  }

  render() {
    /*
       * 添加评论的步骤
       * 1、输入评论消息，点击提交
       * 2、获取用户输入的数据，组成一个对象
       * 3、将组成的对象，传到box中
       * 4、向box中的数组添加对象
       * 5、重现渲染组件
       * */
    return (
      <div className="form">
        <input type="text" ref="txtName" placeholder="请输入姓名"/>
        {/*<input type="text" ref={this.txtName} placeholder="请输入姓名"/>*/}
        <br/>
        <textarea ref="txtContent" name="txtContent" id="txtContent" cols="30" rows="10"></textarea>
        <br/>
        <button data-id="5" onClick={this.addComment}>提交</button>
      </div>
    )
  }
}

export default CommentForm