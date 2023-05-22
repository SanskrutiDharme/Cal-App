import CalWrapper from "../CalWrapper/CalWrapper";

const Cal = () => {

    const allbtnArr =[
        {value: 0, btFun: () => {console.log(0)}},
        {value: 1, btFun: () => {console.log(1)}},
        {value: 2, btFun: () => {console.log(2)}},
        {value: 3, btFun: () => {console.log(3)}},
        {value: 4, btFun: () => {console.log(4)}},
        {value: 5, btFun: () => {console.log(5)}},
        {value: 6, btFun: () => {console.log(6)}},
    ];
    return (
       <div>
         
         <p>This is My Cal </p>
         <CalWrapper allbtnArr = {allbtnArr}/>

       </div> 

    )
}


export default Cal;