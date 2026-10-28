 
 
 
 function  Condition() {

    const isLoggedIn = true;
    
    if(isLoggedIn){
        return <h1>Welcome Back</h1>;
    }
    else {
       return<h1>Please log into the system</h1>;
    }
}
export default Condition;