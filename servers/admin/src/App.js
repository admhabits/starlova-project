import React, { useEffect } from 'react';
import LayoutPages from './components/LayoutPages';
import Home from './pages/Home';
import axios from 'axios';

export default function App() {
	return (
		<LayoutPages>
			<Home/>
		</LayoutPages>
	)
}