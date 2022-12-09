import { fetchSuccess, fetchError } from "../slice/AdduserSlice";


export const  fetchUsers =  () => {
    return  (dispatch) => {
        try{
          
          
          let response = localStorage.getItem('dataKey');
          response = JSON.parse(response) 
          
          dispatch(fetchSuccess(
            response        
          ))
        }catch(error){
          dispatch(fetchError())
        }
    }
}