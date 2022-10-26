import { createBrowserRouter } from "react-router-dom";
import Courses from "../Layout/Courses/Courses";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import CourseCards from "../Pages/CourseCards/CourseCards";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children:[
                    {
                        path: '/courses',
                        loader: ()=> fetch('http://localhost:5000/courses'),
                        element: <CourseCards></CourseCards>
                    },
                    {
                        path: '/courses/category/:id',
                        element: <Categories></Categories>
                    }
                ]
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])