  function CarCard({name,price,year,model}){

    return(
        <div> 
          <p>name: {name}</p>
          <p>Price: {price.toLocaleString()}</p>
          <p>Year:{year}</p>
          <p>model:{model}</p>
        </div>
    );
}

export default CarCard;