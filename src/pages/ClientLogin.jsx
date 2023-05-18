import { Menu, Footer } from '../components/Exports';
import { ClientLoginContainer } from '../styles/pages/clientLogin';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export function ClientLogin(){
	let navigater = useNavigate();

	function navigate(url){
		navigater(url)
	};

	let [passwordVisible, setPasswordVisible] = useState(false);	
	let textInputPassword = useRef();
	let textInputEmail = useRef();

	async function login(){			
		fetch('https://gs-barbearia-api.onrender.com/login/cliente', {
			method: 'POST',
			body: JSON.stringify({
				email: textInputEmail.current.value,
				senha: textInputPassword.current.value
			}),
			headers: { 'Content-Type': 'application/json' }
		}).
			then(response => response.json()).
			then(data => { 
				if(data.token){
					sessionStorage.setItem('token', data.token);		
					window.location.href = '/cliente';
				}else {
					alert(data.message);
				}
			}).
			catch(erro => alert('Falha ao fazer login, tente novamente mais tarde.'));
	};
	

	function changePasswordVisibility(){
		if(passwordVisible){
			textInputPassword.current.setAttribute('type', 'password');
			setPasswordVisible(false);
		}else {
			textInputPassword.current.setAttribute('type', 'text');
			setPasswordVisible(true);
		};
	};

	return(
		<>
			<Menu />
			<ClientLoginContainer>
				<h2>Cliente</h2>
				<label>E-mail</label>
				<input ref={textInputEmail} type="text" />
				<label>Senha</label>
				<div className="inputPass">
					<input ref={textInputPassword} type="password" />	
					{!passwordVisible && <AiOutlineEye
						className='img'
						onClick={ changePasswordVisibility}/>}
					{passwordVisible && <AiOutlineEyeInvisible 
						className='img'
						onClick={ changePasswordVisibility}/>}								
				</div>
				<button onClick={login}>Entrar</button>
			</ClientLoginContainer>
			<Footer />
		</>
	);
};