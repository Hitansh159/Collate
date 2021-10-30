import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { FaUserAlt, FaUserAltSlash } from 'react-icons/fa';
import { IconContext } from "react-icons";

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

            <div class="flex-1 hidden px-2 mx-2 lg:flex">
                <span class="text-lg font-bold">
                    <Link to="/">
                        Collate
                    </Link>
                </span>
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
            <Link class="flex-none" to='/login'>
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