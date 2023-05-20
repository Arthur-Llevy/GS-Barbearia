import { Menu, Footer, RegisterCLientContainer, Container } from '../components/Exports';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';

export function RegisterClient(){

	let inputName = useRef();
	let inputEmail = useRef();	
	let textInputConfirmPassword = useRef();
	let textInputPassword = useRef();
	let [passwordVisible, setPasswordVisible] = useState(false);
	let [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
	let registerClientPopUp = useRef();
	let registerClientPopUpText = useRef();
	let registerCLientContainer = useRef();

	async function regiterNewClient(){
		
		if(textInputPassword.current.value === textInputConfirmPassword.current.value){
			fetch('https://gs-barbearia-api.onrender.com/cadastrarCliente', {
				method: 'POST',
				body: JSON.stringify({
					nome: inputName.current.value,
					email: inputEmail.current.value,
					senha: textInputPassword.current.value
				}),
				headers: { 'Content-Type': 'application/json' }
			}).
				then(response => response.json()).
				then(data => { 
					alert(data.message);				
				}).
				catch(erro => console.log(`Erro: ${erro}`));			

		}else if(inputName.current.value === '' || inputEmail.current.value === '' || inputEmail.current.value === '' || textInputPassword.current.value === '' || textInputConfirmPassword.current.value === ''){
			alert('Todos os campos precisam ser preenchidos.');

		}else {
			alert('As senhas precisam ser iguais.');			
		}
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

	function changeConfirmPasswordVisibility(){
		if(confirmPasswordVisible){
			textInputConfirmPassword.current.setAttribute('type', 'password');
			setConfirmPasswordVisible(false);
		}else {
			textInputConfirmPassword.current.setAttribute('type', 'text');
			setConfirmPasswordVisible(true);
		};
	};

	return(
		<>
			<Menu />
			<Container>
				<RegisterCLientContainer ref={registerCLientContainer}>
					<h2>Cadastrar cliente</h2>
					<label>Nome</label>
					<input ref={inputName} type="text" />
					<label>E-mail</label>
					<input ref={inputEmail} type="text" />
					<label>Senha</label>
					<div className="inputPass">
						<input ref={textInputPassword} type="password" />	
						{!passwordVisible && <AiOutlineEye
							className='img'
							onClick={ changePasswordVisibility}/>}
						{passwordVisible && <AiOutlineEyeInvisible 
							className='img'
							onClick={changePasswordVisibility}/>}								
					</div>
					<label>Confirmar senha</label>
					<div className="inputPass">
						<input ref={textInputConfirmPassword} type="password" />	
						{!confirmPasswordVisible && <AiOutlineEye
							className='img'
							onClick={changeConfirmPasswordVisibility}/>}
						{confirmPasswordVisible && <AiOutlineEyeInvisible 
							className='img'
							onClick={changeConfirmPasswordVisibility}/>}								
					</div>
					<button onClick={regiterNewClient}>Cadastrar</button>
				</RegisterCLientContainer>	
			</Container>
			<Footer />										
		</>
	);
};