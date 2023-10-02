import Link from 'next/link';

const cargarUsuarios = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
}

async function page() {
    try {
        const usuarios = await cargarUsuarios();

        return (
            <>
                <div>
                    <h1>Usuarios</h1>
                    <ul>
                        {usuarios.map((usuario) => (
                            <li key={usuario.id}>{usuario.name}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    } catch (error) {
        console.error('Error al cargar los usuarios:', error);
    }
}

export default page;