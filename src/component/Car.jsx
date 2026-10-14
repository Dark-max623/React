function Car() {
    const name = "Mazda";
    const price = 1500000;

    return(
        <div>
            <h2>{name}</h2>
            <p>Price:ksh{price}</p>
            <button>View Car</button>
        </div>
    );
}

export default Car;