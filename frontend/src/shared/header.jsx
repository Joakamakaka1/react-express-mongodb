import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className=":text-white py-4 shadow-lg bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold transition-transform transform hover:scale-105 cursor-pointer">
                    MERN
                </h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link 
                                to="/" 
                                className="text-lg hover:text-blue-300 transition-all duration-300"
                            >
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/register" 
                                className="text-lg hover:text-blue-300 transition-all duration-300"
                            >
                                Registro
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
