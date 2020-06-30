import React from 'react'
import Axios from '../Axios'

class ProductList extends React.Component {

  componentDidMount() {
    // 发起请求
    Axios.post("/api/queryAllProduct", function() {

    })
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default ProductList