import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Footer/Footer";

const Root = () => {
    return (
        <div>
            <ToastContainer />
            <Navbar></Navbar>


            <Outlet></Outlet>

            <Footer></Footer>

            
        </div>
    );
};

export default Root;