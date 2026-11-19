function CarList() {

    const cars = ["Toyota", "BMW", "Mercedes", "Tesla"]

    return(
        <div>
            <h1>Available Cars</h1>
            {cars.map((car)=>(
            <p key={car}>{car}</p>
            ))}
        </div>
    );
}

export default CarList;