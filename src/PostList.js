import { useState } from "react";
import App from "./Post";

function PostList() {
    const [posts, setPosts] = useState([
        { id: 1, edad: 5, nombre: "Juan" },
        { id: 2, edad: 7, nombre: "María" },
        { id: 3, edad: 8, nombre: "Ana" },
        { id: 4, edad: 9, nombre: "Carlos" }
    ]);

    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [nextId, setNextId] = useState(5); // el siguiente ID será 5

    const handleDelete = (id) => {
        console.log("Deleted...", id);
        setPosts(posts.filter(post => post.id !== id));
    };

    const handleAdd = () => {

        const nuevoPost = {
            id: nextId,
            nombre,
            edad: parseInt(edad)
        };

        setPosts([...posts, nuevoPost]);
        setNombre("");
        setEdad("");
        setNextId(prevId => prevId + 1); // incrementa el ID para el siguiente post
    };

    return (
        <div>
           
            <button onClick={handleAdd}>Agregar</button>

           

            {posts.map((post) => (
                <App key={post.id} post={post} onDelete={handleDelete} />
            ))}
        </div>
    );
}

export default PostList;
