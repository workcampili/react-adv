import { NoLazy } from './../01-lazyload/pages/NoLazy';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'

import { lazy, LazyExoticComponent } from "react"

type JSXComponent = () => JSX.Element;

interface Route {
    path: string,
    component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
    children?: Route[]
}

// const LazyPage1 = lazy(() => import( /* webpackChunkName:"LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy(() => import( /* webpackChunkName:"LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy(() => import( /* webpackChunkName:"LazyPage3"*/'../01-lazyload/pages/LazyPage3'));
const LazyLayout = lazy(() => import( /* webpackChunkName:"LazyLayout"*/'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload',
        component: LazyLayout,
        name: 'LazyLoading Nested'
    },
    {
        path: '/nolazy',
        component: NoLazy,
        name: 'No Lazy Loading'
    }
]