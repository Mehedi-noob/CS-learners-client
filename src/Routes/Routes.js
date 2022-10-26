import { createBrowserRouter } from "react-router-dom";
import Courses from "../Layout/Courses/Courses";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import Categories from "../Pages/Categories/Categories";
import CourseCards from "../Pages/CourseCards/CourseCards";
import CourseDemo from "../Pages/CourseDemo/CourseDemo";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
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
                        loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`),
                        element: <CourseDemo></CourseDemo>
                    },
                    {
                        path: '/courses/details/:id',
                        loader: ({params})=> fetch(`http://localhost:5000/courses/${params.id}`),
                        element: <CourseDetails></CourseDetails>
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