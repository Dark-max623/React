import { useContext } from "react";
import { UserContext } from "./context";

function Dashboard() {
    const student = useContext(UserContext);

    return(
        <h1>Welcome {student.name}</h1>
    );
}