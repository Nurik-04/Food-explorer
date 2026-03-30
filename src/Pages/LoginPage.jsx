import React from 'react'
import Logo from '../assets/logo1.png'
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div className='login'>
            <img src={Logo} alt="Food explorer" className='login__logo animate-pulse' />
            <form className='login__form'>
                <h1 className='login__title'>Crie sua conta</h1>
                <div>
                    <label className='login__lable' htmlFor="name">Seu nome</label>
                    <input
                        type="text"
                        id='name'
                        placeholder='Exemplo: Maria Silva'
                        required
                        className='login__input'
                    />
                </div>
                <div>
                    <label className='login__lable' htmlFor="email">Email</label>
                    <input
                        type="text"
                        id='email'
                        placeholder='Exemplo: exemplo@exemplo.com.br'
                        required
                        className='login__input'
                    />
                </div>
                <div>
                    <label className='login__lable' htmlFor="pasvort">Senha</label>
                    <input
                        type="text"
                        id='pasvort'
                        placeholder='No mínimo 6 caracteres'
                        required
                        className='login__input'
                    />
                </div>
                <button className='login__btn' type='submit'>Criar conta</button>
                <p className='login__text'>Já tenho uma conta</p>
            </form>
        </div>
    )
}

export default LoginPage
