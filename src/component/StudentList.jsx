function StudentList(){

    const students =  [
        {id:1, name:"John", Marks: 75},
        {id:2, name:"Mary", Marks: 80},
        {id:3, name:"Juma", Marks: 90}
    ];

    return(
        <div>
            <h1>Students Results</h1>
                {students.map((student)=>(
                <p key={student.id}>
                  {student.name}: {student.Marks}marks
                </p>
            ))}
        </div>
    )
}

export default StudentList;