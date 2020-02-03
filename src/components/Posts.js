import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class Posts extends Component{

	state = {
		posts: null
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((res) => {
			//console.log(res);
			this.setState({
				posts: res.data
			});

		})
	}

	render(){
		const posts = this.state.posts?
			(
				this.state.posts.map((post)=>{
					return(
						<div className="row" key={post.id}>
    						<div className="col s12 m20">
      							<div className="card blue-grey darken-1">
       								 <div className="card-content white-text">
          								<span className="card-title">{post.title}</span>
          								<p>{post.body}</p>
          								<Link to = {
          									{
          										pathname: 'post/' + post.id,
          										state: {
          											post: post
          										}

          									}
          								}>
          								details
          								</Link>
       								 </div>
      							</div>
    						</div>
  						</div>
					)
				})
			):(
				<div>
					No Posts to show
				</div>
			);
		return(
			<div>
				{posts}
			</div>
		)
	}
}

export default Posts;