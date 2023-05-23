import Button from "../../common/Button";
import './CalWrapper.css';


const CalWrapper = (props) => {
       
    const {allBtnArr, opArr } = props;

    const allButton = allBtnArr ? allBtnArr.map((btObj ) => {
        return  <Button  key = {btObj.value} btName = {btObj.value} btFun={ btObj.btFun}/>
    }) : [];

    const allOpArr = opArr ? opArr.map((btObj ) => {
        return  <Button  key = {btObj.value} btName = {btObj.value} btFun={ btObj.btFun}/>
    }) : [];
     
    

    return (
       <div className="Main">
        <div className="bt">
        {allButton}   
         </div>
        
        <div className="op">
             {allOpArr}
         </div>
       

       </div> 

    )
};


export default CalWrapper;