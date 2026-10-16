
import './App.css'
import Home from './pages/Home';
import CarCard from './component/CarCard';
import Counter from './component/Counter';
import OnMouse from './component/OnMouse';
import Greet from './component/Greet';
import OnChange from './component/OnChange';
import Condition from './component/Condition';

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
          <Greet/>
          <OnChange/>
          <OnMouse/>
          <Condition/>
    </>
  );
}

export default App;
