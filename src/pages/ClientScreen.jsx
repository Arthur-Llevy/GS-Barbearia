import { Footer, ClientMenu, ClientScreenContainer, Container } from '../components/Exports';
import { FaStar } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

export function ClientScreen(){	

	const token = localStorage.getItem('token');	
	let [amountCuts, setAmountCuts] = useState('');
	let textDatasClient = useRef();
	let stars = [];
	let restOfstars = [];
	
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
				if(data.cuts >= 6){
					textDatasClient.current.innerHTML = `${data.name}, você já possui ${data.cuts} cortes, informe ao barbeiro para ganhar o próximo corte de graça.`;	
					setAmountCuts(data.cuts);
				}else {
					textDatasClient.current.innerHTML = `${data.name}, você possui ${data.cuts} cortes, complete 6 para ganhar 1 corte de graça.`;	
					setAmountCuts(data.cuts);
				}

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

	function renderStars() {  
		for (let i = 0; i < amountCuts; i++) {	  	
			if(stars.length > 6){
				break
			}else {
		  		stars.push(<FaStar className="star-icon" key={i} color="yellow" />);
			};
		};

		return stars;
	};

	function completeStars(){			
			for(let i = 0; i < 6 - stars.length; i++){
				restOfstars.push(<FaStar className="star-icon" key={i} color="gray" />);
			}
		
		return restOfstars;
	}

	return(
		<>
			<Container>		
				<ClientMenu />
				<ClientScreenContainer>
					<h2>Cliente</h2>
					<h3 ref={textDatasClient}>CLIENTE, você possui X cortes. Complete 6 para ganhar um de graça!</h3>
					<div className="stars">			
					{
					  amountCuts !== '' ? (
					    <>
					      {renderStars()}
					      {completeStars()}
					    </>
					  ) : null
					}							
					</div>
					<button onClick={addCut} >Solicitar Corte</button>				
					<Footer className="star-icon" />
				</ClientScreenContainer>
			</Container>
		</>
	);	

};

