import logo from '../assets/LOGO.png'
const Navbar = () => {
    const navClass = "btn text-start bg-transparent font-medium text-xl shadow-none border-0 hover:bg-transparent hover:shadow-none hover:border-0"
    const navItems = 
    <div className="flex flex-col text-start lg:flex-row">
        <a className={navClass}>Blog</a>
        <a className={navClass}>Offer</a>
        <a className={navClass}>Airlines</a>
        <a className={navClass}>About</a>
    </div>
    return (
        <div className="bg-white bg-opacity-90 py-4">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                    </div>
                    <div className="flex items-center">
                        <img className="w-full" src={logo} alt="" />
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

                <div className=" navbar-end rounded-lg">
                    <a className="btn rounded-lg bg-[#006CE4] text-xl text-white font-normal">Sign in</a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;