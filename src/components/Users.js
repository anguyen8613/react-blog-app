import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Users extends Component{

	state = {
		users : null
	}

	componentDidMount(){

		axios.get('https://jsonplaceholder.typicode.com/users')
		.then((res) => {
			this.setState({
				users:res.data
			})
		})

	

	}
	render(){

		const users = this.state.users? (
				this.state.users.map((user) => {
					return (
					<div className='row'>
						<div clasName='col s12 m6'>
							<div className='card blue-grey darken-1'>
								<div key={user.id}>
									<div>
										{user.name}
									</div>
									<div>
										{user.email}
									</div>
									<div className='class-action'>
									<Link to={
										{
											pathname:'/users/' + user.id
										}

									}
									>
										detail
									</Link>
									</div>
								</div>
							</div>
						</div>
					</div>

					)
				})
			):(
				<div>
					No users to show	
				</div>
			)

		return(
			<div>
				{users}
			</div>
		)
	}
}

export default Users;