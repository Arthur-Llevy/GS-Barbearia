import { Menu, Footer } from '../components/Exports';
import { BarberLoginContainer } from '../styles/pages/barberLogin';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState, useRef } from 'react';

export function BarberLogin(){

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
			<BarberLoginContainer>
				<h2>Barbeiro</h2>
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
			</BarberLoginContainer>
			<Footer />
		</>
	);
}