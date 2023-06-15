
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './componets/FormUsers'
import UserCard from './componets/UserCard'


function App() {

  const [isCloseForm, setIsCloseForm] = useState(true)

  const [updateInfo, setUpdateInfo] = useState()

  const baseUrl = 'https://users-crud.academlo.tech/'
  const [
    users,
    getAllUser,
    createNewUser,
    deleteUserById,
    updateUserById
  ] = useFetch(baseUrl)

  useEffect(() => {
    getAllUser('/users')
  }, [])

  const hanlendOpenForm = () => {
    setIsCloseForm(false)
  }

  return (
    <div className='app'>
      <div className='app_title'>
        <h1>User Crud</h1>

        <button className='app_title-button' onClick={hanlendOpenForm}>
          <h2><i class="uil uil-plus"></i>New User</h2>
        </button>
      </div>
      <div className='cards'>
        <div className={`form_container ${isCloseForm && 'form_close'}`}>
          <FormUsers
            createNewUser={createNewUser}
            updateInfo={updateInfo}
            updateUserById={updateUserById}
            setUpdateInfo={setUpdateInfo}
            setIsCloseForm={setIsCloseForm}
          />
        </div>
        <div className='info_container'>
          {
            users?.map(user => (
              < UserCard
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setUpdateInfo={setUpdateInfo}
                setIsCloseForm={setIsCloseForm}
              />
            ))
          }
        </div>

      </div>
    </div>
  )
}

export default App
