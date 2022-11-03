import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './pages/Header';
import Home from './pages/Home';
import SearchEnginePage from './pages/SearchEnginePage';
import CardsPage from './pages/CardsPage';
import DetailPage from './pages/DetailPage';
import SolutionPage from './pages/SolutionPage';
import Footer from './pages/Footer';
import QuestionPage from './pages/QuestionPage';
import Pricing from './pages/Pricing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <Home />
        <SearchEnginePage />
        <CardsPage />
        <DetailPage />
        <SolutionPage />
        <Pricing />
        <QuestionPage />
      </main>
      <Footer />
    </div>
  </React.StrictMode>
);
reportWebVitals();
