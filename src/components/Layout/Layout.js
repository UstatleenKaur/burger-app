import React from 'react';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer}
		});
	}

	render(){
		return (
				<Aux>
					<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
					<SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
					<main className = {classes.Content}>
						{this.props.children}
					</main>
				</Aux>
			)
	};
}

export default Layout;