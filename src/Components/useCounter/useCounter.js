import React,{useState} from "react";

const useCounter = () => {
    const [currentVal, setCurrentVal] = useState(0);

    const increment = () => {
        setCurrentVal(currentVal+1);
    }

    const decrement = () => {
        setCurrentVal(currentVal-1);
    }

    return{ currentVal, increment, decrement};
}
export default useCounter;