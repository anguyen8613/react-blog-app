import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {


	state = {
		user : null
	}

	componentDidMount() {
		const id = this.props.match.params.id;
		axios.get('https://jsonplaceholder.typicode.com/users/' + id)
		.then((res) => {
			this.setState({
				user: res.data
			});
		})



	}

	render() {

		const user = this.state.user?(
			<div>
				<div className='row'>
					<div className='col s12 m6'>
						<div className='card blue darken-4'>
							<p>{this.state.user.name}</p>
							<p>{JSON.stringify(this.state.user.address)}</p>
							<p>{JSON.stringify(this.state.user.company)}</p>
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

export default User;