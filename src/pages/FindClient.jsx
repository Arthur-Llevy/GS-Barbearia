import { Menu, Footer, FindClientContainer, Container } from '../components/Exports';
import { useState } from 'react';

export function FindClient(){	

	const APIURL = process.env.REACT_APP_API_URL;
	document.title = 'GSB | Procurar cliente';
	let [id, setId] = useState('');

	async function handleFindClient(){
		fetch(`${APIURL}/barbeiro/procurarCliente`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'token': localStorage.getItem('token')
			},
			body: JSON.stringify({id: id})
		}).
			then(response => response.json()).
			then(data => {
				alert(`Nome: ${data.name}, Id: ${data.id} e N° de cortes: ${data.cuts}`);
			}).
			catch(() => alert('Falha ao procurar o cliente, tente novamente mais tarde.'))
	};

	return(
		<>
			<Container>
				<Menu />
				<FindClientContainer>
					<h2>Adicionar Corte</h2>
					<label>Id do cliente</label>
					<input onInput={e => setId(e.target.value)} type="text" />				
					<button onClick={handleFindClient}>Procucar cliente</button>
				</FindClientContainer>			
				<Footer />
			</Container>
		</>
	);
};
