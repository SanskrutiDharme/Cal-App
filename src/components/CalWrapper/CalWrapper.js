import Button from "../../common/Button";

const CalWrapper = (props) => {
       
    

    const allbutton = props.allbtnArr.map((btvalue) => {
        return <Button btName = {btvalue}/>
    })
     
    console.log('allbutton',allbutton);

    return (
       <div>
        <button className="bt-cal" onClick={props.btFun}>{props.btFun}</button> 
        {allbutton}

       </div> 

    )
};


export default CalWrapper;