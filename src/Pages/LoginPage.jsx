import React, { useState } from 'react'
import Logo from '../assets/logo1.png'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({setIsLogin}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, password);
        if (name === "Maria" && email === "maria@example.com" && password === "123456") {
            console.log("Login successful");
            setIsLogin(true)    
            
            navigate('/');
        } else {
            alert("Invalid credentials");
            console.error("Invalid credentials");
        }
    }
    return (
        <div className='login'>
            <img src={Logo} alt="Food explorer" className='login__logo animate-pulse' />
            <form className='login__form' onSubmit={handleSubmit}>
                <h1 className='login__title'>Crie sua conta</h1>
                <div>
                    <label className='login__lable' htmlFor="name">Seu nome: <span className='login__span'>Maria </span></label>
                    <input
                        type="text"
                        id='name'
                        placeholder='Exemplo: Maria Silva'
                        required
                        className='login__input'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className='login__lable' htmlFor="email">Email: <span className='login__span'>maria@example.com</span></label>
                    <input
                        type="email"
                        id='email'
                        placeholder='Exemplo: exemplo@exemplo.com.br'
                        required
                        className='login__input'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className='login__lable' htmlFor="password">Senha: <span className='login__span'>123456</span></label>
                    <input
                        type="password"
                        id='password'
                        placeholder='No mínimo 6 caracteres'
                        required
                        className='login__input'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className='login__btn' type='submit'>Criar conta</button>
                <p className='login__text'>Já tenho uma conta</p>
            </form>
        </div>
    )
}

export default LoginPage
