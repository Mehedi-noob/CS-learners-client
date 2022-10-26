import { createBrowserRouter } from "react-router-dom";
import Courses from "../Layout/Courses/Courses";
import Main from "../Layout/Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>,
                children:[
                    {
                        path: '/courses/something',
                        element: <div>something</div>
                    }
                ]
            }
        ]
    }
])