import login from "../../../public/login.json"
import Lottie from "lottie-react";

const FramerMotion = () => {
  return (
    <div>
      <Lottie loop={true} animationData={login} loop={true} />;
      
    </div>
  );
};

export default FramerMotion;