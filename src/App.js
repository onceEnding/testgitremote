import React from 'react';
import './App.css';
import CommentBox from './Comment/CommentBox'

function App() {
  let commentlist = [
    {"author":"第一天","date":"2010-01-12","content":"真是开心的一天"},
    {"author":"第二天","date":"2010-01-13","content":"真是开心的一天"},
    {"author":"第三天","date":"2010-01-14","content":"真是开心的一天"}
  ]

  return (
    <div className="App">
      <CommentBox data={commentlist} />
    </div>
  );
}

export default App;
