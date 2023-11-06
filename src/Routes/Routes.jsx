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


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,

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
            element: <PrivateRoutes><AvailableFood></AvailableFood></PrivateRoutes>
        },
        {
            path: '/fooddetails/:id',
            element: <PrivateRoutes><FoodDetails></FoodDetails></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/getallfood/v1/${params.id}`)
        },
        {
            path: 'addnewfoods',
            element: <PrivateRoutes><AddNewFood></AddNewFood></PrivateRoutes>
        },
        {
            path: '/managemyfoods',
            element: <PrivateRoutes><ManageMyFoods></ManageMyFoods></PrivateRoutes>
        },
        {
            path: '/updatefood',
            element: <UpdateFoodInfo></UpdateFoodInfo>
        },
        {
            path: '/managesignlefood',
            element: <ManageSignleFood></ManageSignleFood>
        },
        {
            path: '/foodrequest',
            element: <MyFoodRequest></MyFoodRequest>
        }
      ]
    },
  ]);

  export default router;