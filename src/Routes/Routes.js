import { createBrowserRouter } from "react-router-dom";
import Courses from "../Layout/Courses/Courses";
import Main from "../Layout/Main/Main";
import Blog from "../Pages/Blog/Blog";
import CourseCards from "../Pages/CourseCards/CourseCards";
import CourseDemo from "../Pages/CourseDemo/CourseDemo";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Register from "../Pages/Register/Register";

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
                        loader: ()=> fetch('https://b610-lerning-platform-server-side-mehedi-noob.vercel.app/courses'),
                        element: <CourseCards></CourseCards>
                    },
                    {
                        path: '/courses/category/:id',
                        loader: ({params})=> fetch(`https://b610-lerning-platform-server-side-mehedi-noob.vercel.app/courses/${params.id}`),
                        element: <CourseDemo></CourseDemo>
                    },
                    {
                        path: '/courses/details/:id',
                        loader: ({params})=> fetch(`https://b610-lerning-platform-server-side-mehedi-noob.vercel.app//courses/${params.id}`),
                        element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
                    }
                ]
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            }
        ]
    }
])