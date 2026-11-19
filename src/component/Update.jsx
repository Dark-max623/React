import { useState, useEffect } from "react";


function Update() {
   const [count, setCount] = useState(0);

    useEffect(() => {
          document.title = `Count: ${count}`;
    
    }, [count]);

    return(
        <div>
             <h1>Counter: {count}</h1>
             <button onClick={() =>
                setCount(count+1)
             }>Increase</button>
        </div>
    );
}

export default Update;