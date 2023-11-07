
import { motion } from "framer-motion"
const FramerMotion = () => {
    return (
        <div className="">
           <motion.div className="w-[300px] h-[300px] bg-blue-400"
           initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
           >

           </motion.div>
        </div>
    );
};

export default FramerMotion;