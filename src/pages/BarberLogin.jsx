import { Menu, Footer } from '../components/Exports';
import { BarberLoginContainer } from '../styles/pages/barberLogin';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState, useRef } from 'react';

export function BarberLogin(){

	let [passwordVisible, setPasswordVisible] = useState(false);
	let textInputPassword = useRef();
	let textInputEmail = useRef();
	let container = useRef();

	async function handleLogin(){
		fetch('https://gs-barbearia-api.onrender.com/loginBarbeiro', {
			method: 'POST',
			body: JSON.stringify({
				email: textInputEmail.current.value,
				senha: textInputPassword.current.value
			}),

			headers: { 
				'Content-Type': 'application/json',				
			}
		}).
			then(response => response.json()).
			then(data => {
				if('token' in data){
					localStorage.setItem('token', data.token);            
					window.location.href = '/barbeiro';
				}else {
					alert(data.message);
				}
			}).
			catch(erro => {
				alert('Ocorreu um erro ao fazer login.');
			});
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
			<BarberLoginContainer ref={container}>
				<h2>Barbeiro</h2>
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
				<button onClick={handleLogin}>Entrar</button>
			</BarberLoginContainer>			
			<Footer />
		</>
	);
}