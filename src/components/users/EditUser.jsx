import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { fetchUsers } from "../../store/actions/AddUser";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";


const EditUser = () => {

  const [user, setUser] = useState({});
  const { id } = useParams();
  const { users } = useAppSelector(state => state.users)
  const [value, setValue]=useState('')

  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = () => {
    const items = JSON.parse(localStorage.getItem('dataKey'));
    const filtered = items.filter(item => item.id == id);
    setUser(...filtered)
    dispatch(fetchUsers())
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let arr1 = []
    let arr2 = users.filter(item => item.id != id)
    arr1.push(arr2)
    arr1 = [user, ...arr2]
    arr1.sort((a, b) => { const itemA = a.id; const itemB = b.id; if (itemA < itemB) return -1 })
    localStorage.setItem('dataKey', JSON.stringify(arr1))

    setUser({})
    navigate('/')

  }
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form onSubmit={submitHandler} className='add-user'>
        <div className="img-photo"><img src={user.photo} alt="" /></div>
        <div>
        <div><p> Անուն Ազգանուն </p><input type="text" name='name' placeholder="Անուն Ազգանուն" onChange={e => changeHandler(e)} value={user.name===undefined? value : user.name} /> </div>
        <div><p>Պաշտոն </p><input type="text" name="username" placeholder="Օր․՝ՀՀ Վարչապետ" onChange={e => changeHandler(e)} value={user.username===undefined? value : user.username} /> </div>
        <div className="butt">
          <div className="back"><input type="submit" value="Չեղարկել" onClick={() => navigate('/')} /></div>
          <div className="add-button"><input type="submit" value="Հաստատել" onClick={submitHandler} /></div>
        </div>
      </div>
      </form>
    </>
  )
}

export default EditUser