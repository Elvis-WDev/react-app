import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXElement = () => JSX.Element;

interface Route {
    to: string
    path: string,
    component: LazyExoticComponent<JSXElement> | JSXElement,
    name: string,
    children?: Route[]

}

const lazyLayout = lazy(() => import(/*webpackChunkName: "lazy"*/'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        component: lazyLayout,
        name: 'LazyLayoutDash'
    },
    {
        to: '/no-lazy',
        path: '/no-lazy',
        component: NoLazy,
        name: 'No lazy'
    }
]