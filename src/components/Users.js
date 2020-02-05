import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Users extends Component{

	
	render(){

		const users = this.props.users? (
				this.props.users.map((user) => {
					return (
					<div className='row' key={user.id}>
						<div className='col s12 m6'>
							<div className='card yellow darken-1'>
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

const mapStateToProps = (state, ownProps) => {
	return {
		users: state.users
	}
}

export default connect(mapStateToProps)(Users);