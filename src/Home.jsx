import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from "./store/actions/AddUser";
import { useAppSelector, useAppDispatch } from "./hooks/redux";

const Home = () => {

  const dispatch = useAppDispatch()
  const { users } = useAppSelector(state => state.users)



  useEffect(() => {
    if (!localStorage['dataKey']) {
      localStorage.setItem('dataKey', '[]')
    }

    dispatch(fetchUsers())
  }, []);

  const navigate = useNavigate();

  useEffect(() => {

    localStorage.setItem('dataKey', JSON.stringify(users));

  }, [users]);
  const deleteUser = (id) => {
    const items = JSON.parse(localStorage.getItem('dataKey'));
    const filtered = items.filter(item => item.id !== id);
    localStorage.setItem('dataKey', JSON.stringify(filtered));
    dispatch(fetchUsers())
  }


  return (
    <div className='App'>
      <a className='add' onClick={() => navigate('/users/add')}>+ Ավելացնել</a>
      <table className='table'>
        <tbody>
          {
            users.map((user, index) =>
              <tr key={index}>
                <td><img src={user.photo} alt="" /></td>
                <td className='name-user'>
                  <div><p class='name1'>Պաշտոն։ </p> {user.username}</div>
                  <div><p>Անուն Ազգանուն։ </p> {user.name}</div>
                </td>
                <td className='but'>
                  <a className='components' onClick={() => navigate('/users/' + user.id)}>Տեսնել</a>
                  <a className='components' onClick={() => navigate('/users/edit/' + user.id)}><svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z" fill="#06554D" />
                  </svg>
                    Խմբագրել</a>
                  <a className='components' onClick={() => deleteUser(user.id)}><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 4.5L3.5 15H10.5L12 4.5" stroke="#06554D" stroke-width="2" />
                    <path d="M0 1L14 1" stroke="#06554D" stroke-width="2" />
                  </svg>
                    Ջնջել</a>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>
  )
}

export default Home


