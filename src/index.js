import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import LandingPage from './landingpage'
// import App from './App';
// import Dashboard from './dashboard';
import reportWebVitals from './reportWebVitals';
import Header from './partials/Header';
import Home from './partials/Home';
import FeaturesHome from './partials/Features';
import FeaturesBlocks from './partials/FeaturesBlocks';
import Testimonials from './partials/Testimonials';
import Newsletter from './partials/Newsletter';
import Footer from './partials/Footer';
import Banner from './partials/Banner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Home />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />
        <Banner />
      </main>
      
      <Footer />
    </div>
    {/* <HeroHome />
    <Header />
        {/* <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter /> */}
    {/* <LandingPage />
    <App />
    <Dashboard /> */} */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
