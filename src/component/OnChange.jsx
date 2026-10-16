import {useState} from "react"

function OnChange() {
    const [name, setName] =useState("");

    function handleChange(event) {
        setName(event.target.value);
       }
        return(
          <div>
              <h1>Enter Your name</h1>
              <input type="text"
                 placeholder="Type your name"
                 value={name}
                 onChange={handleChange}/>

          <p>your name is: {name}</p>

          </div>
        );
}

export default OnChange;