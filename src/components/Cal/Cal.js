import { useState } from "react";
import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {


   const [inputValue1 , setinputValue1] = useState(0);
   const [OperationValue, SetoperationValue] = useState(0);
   const [CurrentOperation, setCurrentOperation] = useState('');

    const allBtnArr =[
     
        {value: 0, btFun: () => {

          setinputValue1((prevValue) => parseInt(prevValue.toString() + 0));
            
        }},
        {value: 1, btFun: () => {

          setinputValue1((prevValue) => parseInt(prevValue.toString() + 1));
            
        }},

        {value: 2, btFun: () => {

          setinputValue1((prevValue) => parseInt(prevValue.toString() + 2));

        }},
        {value: 3, btFun: () => {

          setinputValue1((prevValue) => parseInt(prevValue.toString() + 3));

        }},

        {value: 4, btFun: () => {

         
          setinputValue1((prevValue) => parseInt(prevValue.toString() + 4));

        }},

        {value: 5, btFun: () => {

          setinputValue1((prevValue) => parseInt(prevValue.toString() + 5));

        }},

        {value: 6, btFun: () => {

          setinputValue1((prevValue) =>parseInt(prevValue.toString() + 6));

        }},

        {value: 7, btFun: () => {

            setinputValue1((prevValue) => parseInt(prevValue.toString() + 7));

          }}, 

        {value: 8, btFun: () => {

              setinputValue1((prevValue) => parseInt(prevValue.toString() + 8));
              
            }}, 

        {value: 9, btFun: () => {

                setinputValue1((prevValue) =>parseInt(prevValue.toString() + 9));
                
              }},          
    ];

    const opArr = [
      {

      },
      {

        value: '+',
        btFun: () => {
          setCurrentOperation('+');
          SetoperationValue(inputValue1);
          setinputValue1(0);

        }
      },
      {
        value: '-',
        btFun: () => {
          setCurrentOperation('-');
          SetoperationValue(inputValue1);
          setinputValue1(0);
           
        }
 
      },
        {
          value: '=',
          btFun: () => {
            if (CurrentOperation === '+'){
               
              setinputValue1((prevValue ) => {
                return prevValue + OperationValue
              })

            }else if(CurrentOperation === '-'){

              setinputValue1((prevValue ) => {
                return OperationValue - prevValue
              })

            }
          }
        }
      
    ]

    return (
       <div>
         
         <p>This is My Cal {inputValue1} </p>
         <p>CurrentOperation {CurrentOperation}</p>
         <p>OperationValue {OperationValue}</p>
         <CalWrapper allBtnArr = {allBtnArr} opArr = {opArr}/>

       </div> 

    )
}


export default Cal;