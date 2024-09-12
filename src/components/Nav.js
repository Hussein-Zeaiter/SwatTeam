import { Link } from 'react-router-dom';

export const Nav = () => {

    const userName = "Current User"; //we will change this once we fetch data from the backend/token
    const isAdmin = true;

    return (
        <>
            <aside className="w-64 bg-green-500 text-white flex flex-col justify-center items-center h-screen">

                <div className="p-4 text-center font-bold text-xl">
                    {userName}
                </div>

                <nav className="flex flex-col justify-center p-4">
                    <ul>
                        <li className="mb-4">
                            <Link to="/" className="block p-2 hover:bg-green-700 rounded-lg text-center">Main Search</Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/profile" className="block p-2 hover:bg-green-700 rounded-lg text-center">History</Link>
                        </li>

                        {isAdmin && (
                            <>
                                <li className="mb-4">
                                    <Link to="/files" className="block p-2 hover:bg-green-700 rounded-lg text-center">Manage Files</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/users" className="block p-2 hover:bg-green-700 rounded-lg text-center">Manage Users</Link>
                                </li>
                            </>
                        )}

                        <li className="mb-4">
                            <Link to="/settings" className="block p-2 hover:bg-green-700 rounded-lg text-center">Logout</Link>
                        </li>
                    </ul>
                </nav>

            </aside>
        </>
    );
};
