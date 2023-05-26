import React, { useEffect, useRef } from 'react';
import { BarberMenu, Footer, BarberScreenContainer, Container } from '../components/Exports';
import { useNavigate } from 'react-router-dom';

export function BarberScreen(){

	const APIURL = process.env.REACT_APP_API_URL;
	document.title = 'GSB | Dashboard';

	let navigater = useNavigate();
	function navigate(url){
		navigater(url);
	};

	let welcomeText = useRef();

	useEffect(() => {
		fetch(`${APIURL}/dadosBarbeiro`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'token': localStorage.getItem('token')
			}
		}).
			then(response => response.json()).
			then(data => {
				welcomeText.current.innerHTML = `Seja bem-vindo ${data.name}!`
			})

	}, [])

	return(
		<>
			<Container>
				<BarberMenu />
				<BarberScreenContainer>
					<p ref={welcomeText}>Carregando...</p> 
					<button onClick={() => navigate('/cadastrarCliente')} >Cadastrar Cliente</button>
					<button onClick={() => navigate('/adicionarCorte')}>Adicionar Corte a um cliente</button>
					<button onClick={() => navigate('/procurarCliente')}>Procurar Cliente</button>
				</BarberScreenContainer>
				<Footer />
			</Container>
		</>
	);
};