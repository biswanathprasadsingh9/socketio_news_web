
import io from "socket.io-client";
var socket = io(process.env.REACT_APP_SOCKE);
socket.connect();


        
//GET ALL NEWS
export const fetchAllNews = () => async dispatch => {

    
    socket.on('all_news',data=>{
        dispatch({type:'GET_ALL_NEWS', payload:data})
    })

}