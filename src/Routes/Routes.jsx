import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import SignUp from "../Components/Register/SignUp";
import Login from "../Components/Login/Login";
import Home from "../Components/Home/Home";
import AvailableFood from "../Components/Available Foods/AvailableFood";
import FoodDetails from "../Components/Food Details/FoodDetails";
import AddNewFood from "../Components/Add New Food/AddNewFood";
import ManageMyFoods from "../Components/Manage My Foods/ManageMyFoods";
import UpdateFoodInfo from "../Components/Update Food Info/UpdateFoodInfo";
import ManageSignleFood from "../Components/ManageSingle Food/ManageSignleFood";
import MyFoodRequest from "../Components/My Food Request/MyFoodRequest";
import PrivateRoutes from "./PrivateRoutes";
import ErrorElement from "../Components/Error Page/ErrorElement";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
        errorElement: <ErrorElement></ErrorElement>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/availablefoods',
            element: <AvailableFood></AvailableFood>
        },
        {
            path: '/fooddetails/:id',
            element: <PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>
            // loader: ({params}) => fetch(`https://b8a11-server-side-jannat-jui.vercel.app/getallfood/v1/${params.id}`)
        },
        {
            path: '/addnewfoods',
            element: <PrivateRoutes><AddNewFood></AddNewFood></PrivateRoutes>
        },
        {
            path: '/managemyfoods',
            element: <PrivateRoutes><ManageMyFoods></ManageMyFoods></PrivateRoutes>
        },
        {
            path: '/updatefood/:id',
            element: <PrivateRoutes><UpdateFoodInfo></UpdateFoodInfo></PrivateRoutes>,
            loader: ({params}) => fetch(`https://b8a11-server-side-jannat-jui.vercel.app/getallfood/v1/${params.id}`, {credentials: 'include'})
        },
        {
            path: '/managesignlefood/:id',
            element: <PrivateRoutes><ManageSignleFood></ManageSignleFood></PrivateRoutes>,
            loader: ({params}) => fetch(`https://b8a11-server-side-jannat-jui.vercel.app/getallfood/v1/${params.id}`, {credentials:'include'})
        },
        {
            path: '/foodrequest',
            element: <PrivateRoutes><MyFoodRequest></MyFoodRequest></PrivateRoutes>,
            loader: ()=> fetch('https://b8a11-server-side-jannat-jui.vercel.app/getallfood/v1', {credentials:'include'})
        }
      ]
    },
  ]);

  export default router;