
import './App.css'
import Home from './pages/Home';
import CarCard from './component/CarCard';
import Counter from './component/Counter';
import OnMouse from './component/OnMouse';
import Greet from './component/Greet';
import OnChange from './component/OnChange';
import Condition from './component/Condition';
import Condition2 from './component/Condition2';
import Condition3 from './component/Condition3';
import CarList from './component/CarList';
import StudentList from './component/StudentList';
import RegistrationForm from './component/Registration';
import Update from './component/Update';
import Registration from './component/Registration2';
import Registration3 from './component/Registration3';

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
          <Condition2/>
          <Condition3/>
          <CarList/>
          <StudentList/>
          <RegistrationForm/>
          <Update/>
          <Registration/>
            <Registration3/>
    </>
  );
}

export default App;
