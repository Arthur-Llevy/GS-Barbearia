import { Menu, Footer } from '../components/Exports';
import { AddCutToClientContainer, Container } from '../components/Exports';
import { useRef } from 'react';

export function AddCutToClient(){	

	const APIURL = process.env.REACT_APP_API_URL;
	document.title = 'GSB | Adicionar corte';

	let container = useRef();
	let textInputId = useRef();	

	async function confirm(){

		fetch(`${APIURL}/barbeiro/procurarCliente`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			  'token': localStorage.getItem('token')
			},

			body: JSON.stringify({id: textInputId.current.value})
		}).
			then(response => response.json()).
			then(data => {								
				if(window.confirm(`Tem certeza que deseja adicionar um corte ao cliente ${data.name} ?`)){
					handleAddCut()
				}
			})
	}

	async function handleAddCut(){
		fetch(`${APIURL}/barbeiro/adicionarCorte`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'token': localStorage.getItem('token')
			},
			body: JSON.stringify({id: textInputId.current.value})
		}).
			then(response => response.json()).
			then((data) => {
				alert(data.message)
			})
	}

	return(
		<>
			<Container>
				<Menu />
				<AddCutToClientContainer ref={container}>
					<h2>Adicionar Corte</h2>
					<label>Id do cliente</label>
					<input ref={textInputId} type="text" />				
					<button onClick={confirm}>Adicionar Corte</button>
				</AddCutToClientContainer>			
				<Footer />
			</Container>
		</>
	);
};
