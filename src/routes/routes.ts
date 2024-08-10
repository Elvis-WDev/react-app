import { lazy, LazyExoticComponent } from "react";

type JSXElement = () => JSX.Element;

interface Route {

    path: string,
    component: LazyExoticComponent<JSXElement> | JSXElement,
    name: string,
    children?: Route[]

}

const lazy1 = lazy(() => import(/*webpackChunkName: "lazyPage1"*/'../01-lazyload/pages/LazyPage1'));
const lazy2 = lazy(() => import(/*webpackChunkName: "lazyPage2"*/'../01-lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import(/*webpackChunkName: "lazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/lazy',
        component: lazy1,
        name: 'LazyPage-1'
    },
    {
        path: '/lazy2',
        component: lazy2,
        name: 'LazyPage-2'
    },
    {
        path: '/lazy3',
        component: lazy3,
        name: 'LazyPage-3'
    },
]