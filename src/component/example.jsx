import {useEffect , useState} from "react";

 function Students() {

    const [students, setStudents] = useState([]);
    
    useEffect(() =>{
        fetch("http://localhost:8000/api/students/")
        .then(response =>
            response.json())
            .then(data => {
                setStudents(data);
            })
            .catch(error =>{
                console.error("Error:",
                    error);
            })
    }, []);
 }

 return (
    <div>
        <h1>Students</h1>
        {students.map(student =>(
            <p key={student.id}>
                {student.name}
            </p>
        ))}
    </div>
 )