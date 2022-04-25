import { useNavigate } from "react-router-dom"

const ToDoListPage = () => {
    const navigate = useNavigate()

const handleClick = () => {
    navigate("/")
}

    return (
        <>
        <h1> Extra Page</h1>
        <button onClick={handleClick}>Home</button>
        </>
    )
}

export default ToDoListPage