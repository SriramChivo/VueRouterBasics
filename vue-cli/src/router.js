import routecomp1 from "./components/RouteExamples/route1component.vue"
import routecomp2 from "./components/RouteExamples/route2component.vue"
import routecomp3 from "./components/RouteExamples/route3component.vue"
import mainroute from "./components/RouteExamples/mainRoute.vue"
import cr1 from "./components/RouteExamples/childroute1.vue"
import cr1Edit from "./components/RouteExamples/childroute1edit.vue"
export const routes = [
    {
        path: "", component: mainroute
    },
    {
        path: "/route1", component: routecomp1, children: [
            {
                path: ":id", component: cr1, name: 'dynamic'
            },
            {
                path: ":id/edit", component: cr1Edit, name: 'edit'
            }
        ]
    },
    { path: "/route2", component: routecomp2 },
    { path: "/route3", component: routecomp3 }
];