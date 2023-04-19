import Child from "./Child";
import Kitten1 from './assets/kitten1.jpg'
import Kitten2 from './assets/kitten2.jpg'
import { useState } from "react";

function Parent(){

    const [totalTuna,setTotalTuna] = useState(20);
    const [boolValue,setBoolVal] = useState(true);

    function decrementTotalTuna(value){
        setTotalTuna(totalTuna - 1)
        setBoolVal(value);
        console.log(boolValue)
    }
    return(
        <>
        <h3>Parent Comp</h3>
        <h3>The total number of tuna is: {totalTuna}</h3>
        <div style={{display:'flex', justifyContent:'space-around'}}> 
        <Child name="Gigi" age="1" image={Kitten1} decrementFun={decrementTotalTuna}/>
        <Child name="Rose" age="2" image={Kitten2} decrementFun={decrementTotalTuna}/>
        </div>

 
        {/* Ternary if */}
        {boolValue ? "Hello" : "Bye Bye"} 
        </>
    )
}

export default Parent;