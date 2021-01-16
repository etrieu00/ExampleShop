import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutScreen from './screens/AboutScreen';
import CartScreen from './screens/CartScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShopScreen from './screens/ShopScreen';

const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/about' component={AboutScreen} />
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/checkout/' component={CheckoutScreen} />
					<Route path='/contact' component={ContactScreen} />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/profile/signin' component={LoginScreen} />
					<Route path='/profile/create' component={RegisterScreen} />
					<Route path='/profile' component={ProfileScreen} exact />
					<Route path='/shop' component={ShopScreen} />
					<Route path='/' component={HomeScreen} exact />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
