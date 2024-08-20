import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../assets/react.svg'
import { LazyPage2, LazyPage3 } from "../01-lazyload/pages"
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage"



export const Navigation = () => {
    return (

        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="" />
                    <ul>
                        <li>
                            <NavLink to={"/shoopping"} className={({ isActive }) => (isActive ? 'nav-active' : '')}>Shoopping</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/users"} className={({ isActive }) => isActive ? 'nav-active' : ''}>users</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>

                    <Route path="shoopping" element={<ShoppingPage />} />
                    <Route path="about" element={<LazyPage2 />} />
                    <Route path="users" element={<LazyPage3 />} />
                    <Route path="/*" element={<Navigate to={'/home'} replace />} />

                </Routes>

            </div >
        </BrowserRouter>
    )
}
