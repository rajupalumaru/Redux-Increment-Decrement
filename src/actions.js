export const IncAction=(value)=>async dispatch=>{
    dispatch({
       type:"INCREMENT",
       payload:value
    })

}
export const DecreAction=()=>async dispatch=>{
    dispatch({
       type:"DECREMENT" 
    })

}