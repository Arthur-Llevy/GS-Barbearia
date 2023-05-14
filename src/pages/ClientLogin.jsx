import { Menu, Footer } from '../components/Exports';
import { ClientLoginContainer } from '../styles/pages/clientLogin';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState, useRef } from 'react';

export function ClientLogin(){
	
	let [passwordVisible, setPasswordVisible] = useState(false);
	let textInputPassword = useRef();

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
				<input type="text" />
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
				<button>Entrar</button>
			</ClientLoginContainer>
			<Footer />
		</>
	);
};