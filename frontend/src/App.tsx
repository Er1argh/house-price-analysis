import React from 'react';
import PredictionForm from './components/PredictionForm/PredictionForm';
import PriceChart from './components/PriceChart/PriceChart';
import HistoryList from './components/HistoryList/HistoryList';

const App = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <h1>Прогнозирование цен на квартиры в Москве</h1>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <section className="form-section">
            <PredictionForm />
          </section>
          <section className="visualization-section">
            <PriceChart />
            <HistoryList />
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
