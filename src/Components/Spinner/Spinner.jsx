import { Dna } from "react-loader-spinner";
import spinner from "../../assets/images/spinner.gif"

const Spinner = () => {
    return (
        <div className="w-[100vw] h-[60vh] flex justify-center items-center flex-col">
            <img src={spinner} alt="" />
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </div>
    );
};

export default Spinner;