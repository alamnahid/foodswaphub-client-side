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
            element: <AvailableFood></AvailableFood>
        },
        {
            path: '/fooddetails',
            element: <FoodDetails></FoodDetails>
        },
        {
            path: 'addnewfoods',
            element: <AddNewFood></AddNewFood>
        },
        {
            path: '/managemyfoods',
            element: <ManageMyFoods></ManageMyFoods>
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