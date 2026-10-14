
import './App.css'
import Home from './pages/Home';
import CarCard from './component/CarCard';
import Counter from './component/Counter';

function App() {

  return ( 
    <>
        <CarCard 
          name="Mazda"
          price={12300000}
          year={2023}/>

          <CarCard 
          name="Mercedes"
          price={200000000}
          year={2024}
          model={2010}/>

          <Counter/>
    </>
  );
}

export default App;
