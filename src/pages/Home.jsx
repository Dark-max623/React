import CarCard from "../component/CarCard";

function Home () {

    return(
       <>
         <CarCard 
          name="Mazda"
          price={12300000}
          year={2023} />
       </>
    );
    
}
export default Home;