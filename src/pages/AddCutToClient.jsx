import { Menu, Footer } from '../components/Exports';
import { AddCutToClientContainer } from '../components/Exports';
import { useRef } from 'react';

export function AddCutToClient(){	

	let container = useRef();
	let textInputId = useRef();	

	async function confirm(){

		fetch('https://gs-barbearia-api.onrender.com/barbeiro/procurarCliente', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			  'token': sessionStorage.getItem('token')
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
		fetch('https://gs-barbearia-api.onrender.com/barbeiro/adicionarCorte', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'token': sessionStorage.getItem('token')
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
			<Menu />
			<AddCutToClientContainer ref={container}>
				<h2>Adicionar Corte</h2>
				<label>Id do cliente</label>
				<input ref={textInputId} type="text" />				
				<button onClick={confirm}>Adicionar Corte</button>
			</AddCutToClientContainer>			
			<Footer />
		</>
	);
};
