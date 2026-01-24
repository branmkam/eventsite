import { Routes, Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import WorkWithUs from './pages/WorkWithUs';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
	const [current, setCurrent] = useState('/');

	return (
		<HashRouter>
			<Header current={current} setCurrent={setCurrent} />
			<div className="mt-16 mb-8">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/events" element={<Events />} />
					<Route path="/work-with-us" element={<WorkWithUs />} />
				</Routes>
			</div>
			<Footer />
		</HashRouter>
	);
}

export default App;
