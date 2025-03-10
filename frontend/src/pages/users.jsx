import React, { useEffect, useState } from "react";
import axios from "../api";

function Users() {
  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true); // Para manejar el estado de carga
  const [editMode, setEditMode] = useState(false); // Para activar/desactivar el modo edición
  const [editData, setEditData] = useState({ name: "", email: "" }); // Para manejar los datos de edición

  useEffect(() => {
    // Obtener todos los usuarios
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/");
        setUsers(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      } finally {
        setLoading(false); // Cuando termine la carga, cambiamos el estado
      }
    };

    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
      setEditData({ name: storedUser.name, email: storedUser.email });
    } else {
      window.location.href = "/";
    }

    fetchUsers();
  }, []);

  // Función para actualizar el usuario
  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const updatedUserData = {
      name: editData.name,
      email: editData.email,
    };

    try {
      const response = await axios.put(`/${loggedInUser._id}`, updatedUserData);
      console.log("Usuario actualizado:", response.data);
      setLoggedInUser(response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      alert("Error al actualizar el usuario. Inténtalo nuevamente.");
    }
  };

  // Función para eliminar usuario
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`/${loggedInUser._id}`);
      localStorage.removeItem("loggedInUser");
      window.location.href = "/login";
    } catch (error) {
      alert("Error al eliminar el usuario. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 bg-gray-900">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Usuarios Registrados
        </h1>

        {loggedInUser && (
          <div className="mb-6 p-6 border rounded-md bg-blue-50 shadow-md">
            <h2 className="text-xl font-bold mb-3 text-gray-800">
              Usuario Logueado
            </h2>
            {editMode ? (
              <form onSubmit={handleEditSubmit}>
                <div className="mb-4">
                  <label className="block">Nombre</label>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block">Email</label>
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) =>
                      setEditData({ ...editData, email: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md w-full"
                >
                  Guardar cambios
                </button>
              </form>
            ) : (
              <>
                <p className="text-gray-700">
                  <strong>Nombre:</strong> {loggedInUser.name}
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> {loggedInUser.email}
                </p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => setEditMode(true)}
                    className="p-2 bg-yellow-500 text-white rounded-md"
                  >
                    Editar
                  </button>
                  <button
                    onClick={handleDelete}
                    className="p-2 bg-red-500 text-white rounded-md"
                  >
                    Eliminar
                  </button>
                </div>
              </>
            )}
          </div>
        )}

        <h2 className="text-xl font-bold mb-3 text-gray-800">
          Lista de Usuarios
        </h2>

        {loading ? (
          <div className="flex justify-center items-center mb-6">
            <div className="animate-spin border-4 border-t-4 border-blue-600 rounded-full w-12 h-12"></div>
          </div>
        ) : (
          <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user._id}
                className="p-4 border rounded-lg bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <p className="text-gray-700 font-semibold">{user.name}</p>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Users;
