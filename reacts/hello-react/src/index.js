import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'
class Index extends Component {
  render() {
    return (
      <div className="wrapper">
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)