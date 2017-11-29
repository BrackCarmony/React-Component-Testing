import React, {Component} from 'react';

class Blog extends Component {
  constructor(props){
    super(props);
  }
  uppercaseTitle(){

  }
  onlyIfWarning(){
    if (this.props.warning) return (<div className="warning">{this.props.warning}</div>)
      return null;
  }
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>{this.props.blog}</div>
        {this.onlyIfWarning()}
      </div>
    )
  }
}

export default Blog;
