import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteUser} from '../actions/userActions';


class User extends Component {


	handleClick = () =>{
		this.props.deleteUser(this.props.user.id);
		this.props.history.push('/users');
	}

	render() {
		console.log(this.props);
		const user = this.props.user?(
			<div>
				<div className='row'>
					<div className='col s12 m6'>
						<div className='card pink darken-2'>
							<p>{this.props.user.name}</p>
							<p>{JSON.stringify(this.props.user.address)}</p>
							<p>{JSON.stringify(this.props.user.company)}</p>
							<button onClick={this.handleClick}>delete</button>
						</div>
					</div>
				</div>
			</div>

			) : (
				<div>
					User not found
				</div>
			)


		return(
			<div>
				{user}
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.id;
	return {
		user: state.users.find(user => user.id === parseInt(id))
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		deleteUser: (id) => {dispatch(deleteUser(id))}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(User);