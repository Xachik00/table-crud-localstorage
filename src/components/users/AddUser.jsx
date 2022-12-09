import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../store/actions/AddUser";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";


const AddUser = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(state => state.users)
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);
  const [user, setUser] = useState({
    id: Date.now(),

  });

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (user.name === undefined) {
      return;
    }

    let arr = [...users];
    user.photo = preview;
    arr = [...arr, user]
    localStorage.setItem('dataKey', JSON.stringify(arr));
    navigate('/')
  }

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <form className="add-user">
      <div className="photo">
        <img src={preview ? preview : "../Group7405.png"} alt="" /> <input
          type="file"
          name='photo'
          ref={fileInputRef}
          accept="image/*"
          onChange={(event) => {

            const file = (event.target).files[0];
            if (file && file.type.substr(0, 5) === "image") {
              setImage(file);

            } else {
              setImage(null);
            }
          }}
        /></div>
      <div>
        <div><p> Անուն Ազգանուն </p><input type="text" name='name' placeholder="Անուն Ազգանուն" onChange={e => changeHandler(e)} /> </div>
        <div><p>Պաշտոն </p><input type="text" name="username" placeholder="Օր․՝ՀՀ Վարչապետ" onChange={e => changeHandler(e)} /> </div>
        <div className="butt">
          <div className="back"><input type="submit" value="Չեղարկել" onClick={() => navigate('/')} /></div>
          <div className="add-button"><input type="submit" value="Հաստատել" onClick={submitHandler} /></div>
        </div>
      </div>
    </form>
  )
}

export default AddUser