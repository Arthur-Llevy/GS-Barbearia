import { Menu, Footer, RegisterCLientContainer, Container } from '../components/Exports';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState, useRef, useEffect } from 'react';
import { firebaseVariables } from '../services/FirebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { FcGoogle } from 'react-icons/fc';

export function RegisterClient(){

	const APIURL = process.env.REACT_APP_API_URL;

	async function regiterClientWithGoogle(){		
		let datas;
		signInWithPopup(firebaseVariables.auth, firebaseVariables.provider)
		      .then((result) => {		      	
				fetch(`${APIURL}/cadastrarClienteGoogle/cliente`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: result._tokenResponse.fullName,
					email: result._tokenResponse.email
				})
			}).then(response => response.json())
				.then(data => alert(data.message)).
				catch(() => alert('Ocorreu um erro ao tentar entrar com uma conta do Google. Tente novamente mais tarde.'))
		}).catch(() => {
		        alert('Falha ao fazer login com uma conta Google. Tente novamente mais tarde.');
		}); 				
	
	};

	document.title = 'GSB | Cadastrar cliente';

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
			fetch(`${APIURL}/cadastrarCliente`, {
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
					fetch(`${APIURL}/login/cliente`, {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							email: inputEmail.current.value,
							senha: textInputPassword.current.value
						})
					}).then(response => response.json())
						  .then(data => {
						  		localStorage.setItem('token', data.token);
						  		window.location.href = '/cliente';
						  })
						  .catch(() => alert('Falha ao entrar em sua conta. Tente novamente mais tarde.'))					
				})
				.catch(erro => console.log(`Erro: ${erro}`));			

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
					<p className="or">Ou</p>
					<button onClick={regiterClientWithGoogle}>
						<FcGoogle />
						Entrar com o google
					</button>
				</RegisterCLientContainer>	
			</Container>
			<Footer />										
		</>
	);
};