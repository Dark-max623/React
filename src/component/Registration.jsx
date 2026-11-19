import {useState} from "react"

function RegistrationForm(){

     const [name, setName] = useState("");
     const [email, setEmail] = useState("");

     function handleSubmit(event){
        event.preventDefault();
        alert("Name:" + name + "\nEmail:" + email);

     }

     return(
        <div>
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                   type="text"
                   placeholder="Enter your name"
                   value={name}
                   onChange={(event)=>setName(event.target.value)}/>
                   <br/> <br/>
                   <input 
                      type="email"
                      placeholder="Enter your Email"
                      value={email}
                      onChange={(event)=>setEmail(event.target.value)}
                      />
                      <br/><br/>
                      <button type="submit">Register</button>
            </form>
        </div>
     );
}

export  default RegistrationForm