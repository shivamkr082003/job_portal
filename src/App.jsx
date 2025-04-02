
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/theme-provider"
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/Onboarding";
import JobListing from "./pages/Joblisting";
import JobPage from "./pages/Job";
import PostJob from "./pages/Post_job";
import SaveJobs from "./pages/Saved_job";
import MyJobs from "./pages/My_job";

const router =createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element: <LandingPage/>
      },
      {
        path:'/onboarding',
        element: <Onboarding/>
      },
      {
        path:'/jobs',
        element: <JobListing/>
      },
      {
        path:'/job/:id',
        element: <JobPage/>
      },
      {
        path:'/post-job',
        element: <PostJob/>
      },
      {
        path:'/saved-job',
        element: <SaveJobs/>
      },
      {
        path:'/my-job',
        element: <MyJobs/>
      },
    ]
  },
])

function App() {
  return (

    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <RouterProvider router={router}/>
    </ThemeProvider>

  )
   

  
}

export default App;