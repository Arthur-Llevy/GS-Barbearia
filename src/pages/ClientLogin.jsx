import { Menu, Footer, Container } from '../components/Exports';
import { ClientLoginContainer } from '../styles/pages/clientLogin';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseVariables } from '../services/FirebaseConfig';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { FcGoogle } from 'react-icons/fc';

export function ClientLogin(){

	const APIURL = process.env.REACT_APP_API_URL;
	document.title = 'GSB | Login';
	let navigater = useNavigate();

	function navigate(url){
		navigater(url)
	};

	let [passwordVisible, setPasswordVisible] = useState(false);	
	let textInputPassword = useRef();
	let textInputEmail = useRef();

	async function login(){			
		fetch(`${APIURL}/login/cliente`, {
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
					localStorage.setItem('token', data.token);		
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

	async function loginWithGoogle(){		
		signInWithPopup(firebaseVariables.auth, firebaseVariables.provider)
		      .then((result) => {		      	
				fetch(`${APIURL}/googleLogin/cliente`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({					
						email: result._tokenResponse.email
					})
				}).then(response => response.json())
					.then(data => {
						if(data.token){
							localStorage.setItem('token', data.token);		
							window.location.href = '/cliente';
						}else {
							alert(data.message);
						}
					}).
					catch(() => alert('Ocorreu um erro ao tentar entrar com uma conta do Google. Tente novamente mais tarde.'))
		}).catch(() => {
		        alert('Falha ao fazer login com uma conta Google. Tente novamente mais tarde.');
		}); 				
	
	};

	return(
		<>
			<Menu />
			<Container>
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
					<p className="or">Ou</p>
					<button onClick={loginWithGoogle}>
						<FcGoogle />
						Entrar com o google
					</button>
				</ClientLoginContainer>
			</Container>
			<Footer />
		</>
	);
};