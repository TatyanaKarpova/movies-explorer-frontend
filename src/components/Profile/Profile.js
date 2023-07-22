import { React } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';
import userData from '../../utils/myUserData';
import '../../vendor/hover.css';

function Profile() {

  const { name, email } = userData;

  return (
    <>
      <Header loggedIn={true} />
      <section className='profile'>
        <h1 className='profile__title'>{`Привет, ${name}!`}</h1>
        <form className='profile__form'>
            <div className='profile__form-field-container'>
                <label className='profile__form-field'>Имя</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Имя'
                    className='profile__item profile__item_input_name'
                    required
                    minLength='2'
                    maxLength='40'
                    value={name || ''}
                    disabled={true}
                />
            </div>
            <div className='profile__form-field-container'>
                <label className='profile__form-field'>E-mail</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='E-mail'
                    className='profile__item profile__item_input_email'
                    required
                    value={email || ''}
                    disabled={true}
                />
            </div>
            <div className='profile__links-container'>
                <Link to='/' className='profile__link profile__link_edit hover'>Редактировать</Link>
                <Link to='/' className='profile__link profile__link_exit hover'>Выйти из аккаунта</Link>
            </div>
        </form>
      </section>
    </>
  );
};

export default Profile;