import React, { Component } from "react";

export default class CommentListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commengList: [],
    };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        commengList: [
          {
            id: 0,
            author: "小明",
            body: "这是小明写的文章",
          },
          {
            id: 1,
            author: "小红",
            body: "这是小红写的文章",
          },
        ],
      });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { commengList } = this.state;
    console.log("render");
    return (
      <div>
        <h1>CommentListPage</h1>
        {commengList.map(item => {
          return <Comment key={item.id} data={item} />;
        })}
      </div>
    );
  }
}

class Comment extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { author, body } = this.props.data;
    const { author: newAuthor, body: newBody } = nextProps.data;
    if (author === newAuthor && body === newBody) {
      return false;
    }
    return true;
  }
  render() {
    console.log("Comment render");
    const { author, body } = this.props.data;
    return (
      <div className="border">
        <p>{author}</p>
        <p>{body}</p>
      </div>
    );
  }
}
