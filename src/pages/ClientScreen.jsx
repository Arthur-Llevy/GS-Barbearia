import { Footer, ClientMenu, ClientScreenContainer, Container } from '../components/Exports';
import { FaStar } from 'react-icons/fa';
import { useEffect, useRef } from 'react';

export function ClientScreen(){	

	const token = localStorage.getItem('token');	
	let textDatasClient = useRef();
	
	useEffect(() => {

		fetch('https://gs-barbearia-api.onrender.com/dadosCliente', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'token': `${token}`
			}
		}).
			then(response => response.json()).
			then(data => {
				textDatasClient.current.innerHTML = `${data.name}, você possui ${data.cuts} cortes, complete 6 para ganhar um de graça!`;	

			}).
			catch(erro => {
				alert('Erro ao procurar dados do cliente.');
				window.location.href = '/loginCliente';
			});

	}, []);

	async function addCut(){
		if(window.confirm('Tem certeza que deseja solicitar um corte?')){
			fetch('https://gs-barbearia-api.onrender.com/cliente/solicitarCorte', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'token': localStorage.getItem('token')
				}
			}).
				then(response => response.json()).
				then(data => {
					alert(data.message);
				}).
				catch(() => alert('Falha ao adicionar corte ao cliente.'))		
		};
	};

	return(
		<>
			<Container>		
				<ClientMenu />
				<ClientScreenContainer>
					<h2>Cliente</h2>
					<h3 ref={textDatasClient}>CLIENTE, você possui X cortes. Complete 6 para ganhar um de graça!</h3>
					<div className="stars">
						<FaStar className="star-icon" />
						<FaStar className="star-icon" />
						<FaStar className="star-icon" />
						<FaStar className="star-icon" />
						<FaStar className="star-icon" />
						<FaStar className="star-icon" />
					</div>
					<button onClick={addCut} >Solicitar Corte</button>				
					<Footer className="star-icon" />
				</ClientScreenContainer>
			</Container>
		</>
	);	

};

