import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setIsCloseForm }) => {

    const { register, reset, handleSubmit } = useForm()
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            // update
            updateUserById('/users', updateInfo.id, data)
            setUpdateInfo()
        } else {
            createNewUser('/users', data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthdat: '',
        })
        setIsCloseForm(true)
    }

    const handlenExit = () => {
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthdat: '',
        })
        setIsCloseForm(true)
        setUpdateInfo()
    }

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <h2 className='form_title'>Register your user</h2>
            <div className='form_x' onClick={handlenExit} ><i className="uil uil-times"></i></div>
            <div className='form_section'>
                <label className='form_label' htmlFor="email">Email</label>
                <input className='form_input' {...register('email')} id="email" type="text" />
            </div>
            <div className='form_section'>
                <div className='password'>
                    <label className='form_label' htmlFor="password">Password</label>
                    <div className='password_icon' onClick={toggleShowPassword}>
                        {showPassword ? <i className="uil uil-eye-slash"></i> : <i className="uil uil-eye"></i>}
                    </div>
                </div>
                <input
                    className='form_input'
                    {...register('password')}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                />
            </div>
            <div className='form_section'>
                <label className='form_label' htmlFor="first_name">First Name</label>
                <input className='form_input' {...register('first_name')} id="first_name" type="text" />
            </div>
            <div className='form_section'>
                <label className='form_label' htmlFor="last_name">Last Name</label>
                <input className='form_input' {...register('last_name')} id="last_name" type="text" />
            </div>
            <div className='form_section'>
                <label className='form_label' htmlFor="birthday">Birthday</label>
                <input className='form_input' {...register('birthday')} id="birthday" type="date" />
            </div>
            <button className='form_btn'>{updateInfo ? 'Update' : 'Create'}</button>
        </form>
    )
}

export default FormUsers
