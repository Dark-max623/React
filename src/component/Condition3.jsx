function Condition3() {

    const marks = 30;
    const Condition3 = marks >=50;
     return(
        <div>
           <h1>Student Results</h1>
           <p>Marks: {marks}</p>
           {Condition3 && <p>You have Passed!</p>}
        </div>
     );
}
export default Condition3;