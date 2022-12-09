import {Routes, Route} from 'react-router-dom';
import Home from './Home';

import AddUser from './components/users/AddUser';
import ViewUser from './components/users/ViewUser';
import EditUser from './components/users/EditUser';

const App = () => {
  return (
   <>
   
    <Routes>
      <Route path='/' element={<Home/>} />

      <Route path='/users/add' element={<AddUser/>} />
      <Route path='/users/:id' element={<ViewUser/>} />
      <Route path='/users/edit/:id' element={<EditUser/>} />
    
    </Routes>
   </>
  )
}

export default App