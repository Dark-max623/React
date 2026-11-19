import {useState} from "react";

function Registration3() {
    const [formData, setFormData] =
    useState({
        name:"",
        email:"",
        password:""
    });

    const [errors, setErrors] =
    useState({});

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const newErrors = {};
        if(!formData.name.trim()){
            newErrors.name= "Name is required";
        }
        if(!/^[^\s$@]+@[^\s$@]+\.[^\s$@]+$/.test(formData.email)){
            newErrors.email = "Enter a valid email";
        }
        if(formData.password.length <8 ){
            newErrors.password = "Password must be at least 8 characters"

        }
        setErrors(newErrors);
        if(Object.keys(newErrors).length===0){
            alert("Registration Successful!");
            console.log(formData);
        }
    }

        return(
            <form onSubmit={handleSubmit}>
                <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"/>

                <p>{errors.password}</p>

                <input
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"/>
                <p>{errors.password}</p>

                <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email"/>
                <p>{errors.email}</p>

                <button
                type="submit">
                    Register
                </button>
            </form>
        );
}

export default Registration3;