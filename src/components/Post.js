import React, {Component} from 'react';

class Post extends Component {

	state = {
		post : null
	}

	componentDidMount(){
		console.log(this.props.location.state.post);

		this.setState({
			post: this.props.location.state.post
		})
	}

	render(){

		const post = this.state.post? (
			<div className="row" >
    						<div className="col s12 m20">
      							<div className="card blue-grey darken-1">
       								 <div className="card-content white-text">
          								<span className="card-title">{this.state.post.title}</span>
          								<p>{this.state.post.body}</p>
       								 </div>
      							</div>
    						</div>
  						</div>
			):(<p>loading post...</p>)
		return(
			<div>
				{post}
			</div>
		)
	}
}

export default Post;