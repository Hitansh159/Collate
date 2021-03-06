import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
import { IconContext } from "react-icons";
import { GiNotebook } from 'react-icons/gi';

function Navbar() {

    var toggle = useSelector((state) => (state.Theme));
    var dispatch = useDispatch();
    function toggleHandler(e) {
        dispatch({ type: 'toggle' });
        console.log(toggle);
        e.target.checked = !toggle;
    }

    // if user is loged in
    var user = JSON.parse(localStorage.getItem("userInfo"));


    return (
        <div class="navbar sticky top-0 z-50 shadow-lg bg-black text-neutral-content rounded-b-lg">

            <div class="flex-1 hidden px-2 lg:flex">
                <Link to="/" class="flex-1 hidden px-2 lg:flex">
                    <IconContext.Provider value={{ size: '2em' }} >
                        <GiNotebook />
                    </IconContext.Provider>
                    <span class="text-3xl font-bold mx-3">
                        Collate
                    </span>
                </Link>
            </div>
            <div class="flex-1 lg:flex-none">
                <div class="form-control">
                    <input type="text" placeholder="Search" class="input input-ghost" />
                </div>
            </div>
            <div class="flex-none">
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
            <div class="flex-none mx-5">
                <input type="checkbox" className="toggle" onClick={toggleHandler} />
            </div>
            {user &&
                <div className="flex-none mx-5">
                    <Link class="btn btn-ghost btn-sm rounded-btn" to="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 mr-2 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                        </svg>
                        DashBoard
                    </Link>
                </div>
            }
            <Link class="flex-none" to={user ? '/logout' : '/login'}>
                <IconContext.Provider value={{ size: '2em' }} >
                    <div class="avatar">
                        <div class="rounded-full w-10 h-10 m-1 p-1">
                            {user ?
                                <FaUserAlt />
                                : <FaUserAltSlash />
                            }
                        </div>
                    </div>
                </IconContext.Provider>
            </Link >
        </div >
    );
}

export default Navbar;