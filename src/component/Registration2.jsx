import {useState} from "react";
 function Registration2() {

    const [formData, setFormData] =
      useState({
        name:"",
        email:"",
        password:""
      });
      function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
      }

      return(
        <form>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"/>

            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"/>
            
           <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"/>
            
        </form>
      );
 }
 export default Registration2;