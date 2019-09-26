import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'

class Index extends Component {
  constructor() {
    super()
    this.state = {
      comments : []
    }
  }
  componentWillMount() {
    this._loadComments()
  }
  _loadComments() {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  handleDeleteComment(index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }
  _saveComments(comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleSubmitComment(comment) {
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
    this._saveComments(this.state.comments)
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList
          onDeleteComment={this.handleDeleteComment.bind(this)}
        comments={this.state.comments} />
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById('root')
)