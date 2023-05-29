import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

type Props = {
  categoryButton: boolean;
  setCategoryButton: Dispatch<SetStateAction<boolean>>;
};

const CategoryButton = (props: Props) => {
  return (
    <div
      className={`w-20 h-12 p-2 mx-auto bg-light flex ${props.categoryButton ? "justify-end" : "justify-start"} rounded-xl cursor-pointer`}
      onClick={() => {
        props.setCategoryButton(!props.categoryButton);
      }}
    >
      <motion.div
        className={`w-8 h-8 border-4 ${props.categoryButton ? "border-red-500" : "border-green-500"} bg-light rounded-[20%] flex`}
        layout
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
      >
        <div className={`w-5 h-5 mx-auto self-center ${props.categoryButton ? "bg-red-500" : "bg-green-500"} rounded-full`}></div>
      </motion.div>
    </div>
  );
};

export default CategoryButton;
