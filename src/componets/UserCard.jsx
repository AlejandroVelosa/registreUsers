
import { useState } from 'react';
import './styles/card.css'
const UserCard = ({ user, deleteUserById, setUpdateInfo, setIsCloseForm }) => {

    const [showModal, setShowModal] = useState(false);


    const openModal = () => {
        setShowModal(true)
    }

    const handleDelete = () => {
        deleteUserById('/users', user.id);
    }


    const handleEdit = () => {
        setUpdateInfo(user)
        setIsCloseForm(false)
    }

    return (
        <article className="card">
            <div className='content'>
                <h2 className='card_name'>{`${user.first_name} ${user.last_name}`}</h2>
                <ul className='card_info'>
                    <li className='card_email'>
                        <span><i class="uil uil-envelope-edit email"></i></span>
                        <span>{user.email}</span>
                    </li>
                    <li className='card_birthday'>
                        <span><i class="uil uil-gift happy"></i></span>
                        <span>{user.birthday}</span>
                    </li>
                </ul>
                <div className='card_button'>
                    <i onClick={openModal} className="uil uil-trash-alt card_button-delete"></i>
                    <i onClick={handleEdit} className="uil uil-edit-alt card_button-edit"></i>
                </div>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2 className="modal-title">¿Deseas eliminar la información?</h2>
                        <div className="modal-buttons">
                            <button onClick={handleDelete}>Eliminar</button>
                            <button onClick={() => setShowModal(false)}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </article>
    )
}

export default UserCard