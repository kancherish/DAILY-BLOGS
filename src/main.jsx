import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import './index.css'
import store from "./store/store"
import {RouterProvider , createBrowserRouter } from 'react-router-dom'
import AuthLayout from "./components/AuthLayout"
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AllPost from './pages/AllPosts'
import EditPost from './pages/EditPost'
import AddPost from './pages/AddPost'
import Post from './pages/Post'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        )
      },
      {
        path:"/signup",
        element:(
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        )
      },
      {
        path:"/all-posts",
        element:(
          <AuthLayout authentication>
            <AllPost />
          </AuthLayout>
        )
      },
      {
        path:"/add-posts",
        element:(
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path:"/edit-posts/:slug",
        element:(
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        )
      },
      {
        path:"/post/:slug",
        element:<Post />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
 
)
