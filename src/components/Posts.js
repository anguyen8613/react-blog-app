import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ReactTable from 'react-table-6';
import "react-table-6/react-table.css";



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
		const columns = [
			{
				Header: 'ID',
				accessor: 'id',
				style: {
					textAlign: 'right'
				},
				width: 100,
				maxWidth:100,
				minWidth:100

			},
			{
				Header: 'User ID',
				accessor: 'userId',
				style: {
					textAlign: 'right'
				},
				width: 100,
				maxWidth:100,
				minWidth:100
			},
			{
				Header: 'Title',
				accessor: 'title'
			},
			{
				Header: 'Body',
				accessor: 'body',
				filterable: false
			},	
			{
				Header: 'Actions',
				Cell: props => {
					return(
						<div>
							<Link
								to = {{
									pathname:'/posts/' + props.original.id,

								}}

							>details</Link>
						</div>
					)	
			}	
		
				,
				sortable: false,
				filterable: false,
				width: 100,
				maxWidth:100,
				minWidth:100

			}

				
		]
		const posts = this.state.posts?
			 (

						<div>
    						<ReactTable 
    						columns={columns} 
    						data={this.state.posts} 
    						filterable
    						defaultPageSize={10}
    						showPagination={true}>

							</ReactTable>
  						</div>
					
			
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