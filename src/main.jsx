import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './ThemeController/DarkLightMode.jsx'
import HomeLayout from './layouts/HomeLayout'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ErrorPage from './pages/ErrorPage'
import AllMovies from './pages/AllMovies'
import AddMovies from './pages/AddMovies'
import MyFavorites from './pages/MyFavorites'
import AuthProvider from './provider/AuthProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './PrivateRoute/PrivateRoute'
import MovieDetails from './pages/movieDetails'
import UpdatedMovie from './pages/UpdatedMovie'
import FeaturedMovies from './components/Home/FeaturedMovies'
import About from './pages/About'
import Contact from './pages/Contact'

const router = createBrowserRouter([

  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element:<FeaturedMovies></FeaturedMovies>
      },
      {
        path: "/allMovies",
        element:<AllMovies></AllMovies>,
        loader: () => fetch('https://popcorn-picks-server.vercel.app/movies?sort=rating')
      },
      {
        path: "/addMovie",
        element: <PrivateRoute><AddMovies></AddMovies></PrivateRoute>
      },
      {
        path: "/myFavorites",
        element:<PrivateRoute><MyFavorites></MyFavorites></PrivateRoute>
      },
      {
        path: "/movieDetails/:id",
        element:(<PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>),
        loader: ({params})=> fetch(`https://popcorn-picks-server.vercel.app/movies/${params.id}`)
      },
      {
        path: "/updatedMovie/:id",
        element:<PrivateRoute><UpdatedMovie></UpdatedMovie></PrivateRoute>,
        loader: ({params})=> fetch(`https://popcorn-picks-server.vercel.app/movies/${params.id}`)
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
    ]
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/signup',
        element: <Signup></Signup>
      },
    ]
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
  <AuthProvider>
  <RouterProvider router={router}></RouterProvider>
  <ToastContainer />
  </AuthProvider>
  </ThemeProvider>
  </StrictMode>,
)
