import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"
import logo from '../assets/react.svg'
import { routes } from "./routes"
import { Suspense } from "react"

export const Navigation = () => {
    return (

        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="" />
                        <ul>
                            {
                                routes.map(({ path, name }) => (
                                    <li key={path}>
                                        <NavLink to={path} className={({ isActive }) => isActive ? 'nav-active' : ''}>{name}</NavLink>
                                    </li>
                                ))
                            }

                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ path, component: Component }) => (
                                <Route key={path} path={path} element={<Component />} />
                            ))
                        }
                        <Route path="/*" element={<Navigate to={'/home'} replace />} />

                    </Routes>

                </div >
            </BrowserRouter>
        </Suspense>
    )
}
