import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

const ViewUser = () => {
 
  const [user, setUser] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    loadUser();
  },[]);

  const loadUser = ()=>{
    const response = localStorage.getItem('dataKey')
    const newres = JSON.parse(response)
    const res = newres.filter(el=>el.id==id)
    setUser(...res);
  }

  return (
    <div className="ViewUser">
      <h3><img src={user.photo} alt="" /></h3>
      <h3>Անուն Ազգանուն: {user.name}</h3>
      <h3>Պաշտոն: {user.username}</h3>
      <button onClick={()=> {navigate(-1);setUser({})}}>Վերադառնալ</button>
    </div>
  )
}

export default ViewUser