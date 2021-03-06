import React from 'react';
import {Link} from 'react-router';

import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

export default class Layout extends React.Component{
	

	render() {
		const {location} = this.props;
		console.log(location);
		const containerStyle={
			marginTop:"60px"
		}
		return (
			<div>
				<Nav location={location}  />
				<div class="container" style={containerStyle}>
					<div class='row'>
						<div class="col-md-12">
							<h1>Todo List</h1>
							{this.props.children}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}