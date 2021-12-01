import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LayoutPages from './components/LayoutPages';
import Products from './components/Product/Products';
import TambahProduk from './components/Product/TambahProduk';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/Auth/SignUp';
import axios from 'axios';

export default function App() {
	return (
		<Switch>
			<Route exact path='/' render={() => (
				<LayoutPages><Home/></LayoutPages>
			)}/>
			<Route exact path='/products' render={() => (
				<LayoutPages><Products/></LayoutPages>
			)}/>
			<Route exact path='/tambah' render={() => (
				<LayoutPages><TambahProduk/></LayoutPages>
			)}/>
			<Route path='/signup' component={SignUp}/>
			<Route path='/*' render={ () => (
				<NotFound/>
			)}/>
		</Switch>
	)
}