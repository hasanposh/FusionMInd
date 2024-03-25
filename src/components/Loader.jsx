import { PacmanLoader  } from "react-spinners";
const Loader = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-[calc(100vh-116px)]">
            <PacmanLoader  size={100}  color="#36d7b7" />
            
        </div>
    );
};

export default Loader;