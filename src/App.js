import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"

import Topbar from './components/Topbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Projects from './pages/Projects'
import GetQuote from './pages/GetQuote'

import './Main.css'

function App() {
  	return (
    	<Router>
			<div>
				<Topbar />
				<Switch>
					<Route path="/services">
						<Services />
					</Route>
					<Route path="/about">
						<AboutUs />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/get-qoute">
						<GetQuote />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
  	)
}

export default App
