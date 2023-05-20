import { BarberMenu, Footer, Container } from '../components/Exports';  
import { BarberNotificationsContainer, BarberNotification  } from '../styles/pages/barberNotifications'
import { BsCheck, BsTrash3Fill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

export function BarberNotifications(){

	let [notifications, setNotifications] = useState([]);

	async function handleConfirmCut(id){

		if(window.confirm('Tem certeza que deseja confirmar o corte do cliente?')){
			fetch('https://gs-barbearia-api.onrender.com/barbeiro/confirmarSolicitacao', {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					'token': localStorage.getItem('token')
				},
				body: JSON.stringify({id: id})
			}).
				then(response => response.json()).
				then(data => alert(data.message)).
				catch(() => alert('Falha ao confirmar o corte. Tente novamente mais tarde.'))
		};

	};

	async function handleDeleteNotification(id){
		if(window.confirm('Tem certeza que deseja excluir esta notificação?')){
			fetch('https://gs-barbearia-api.onrender.com/barbeiro/excluirNotificacao', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'token': localStorage.getItem('token')
				},
				body: JSON.stringify({id: id})
			}).
				then(response => response.json()).
				then(data => alert(data.message)).
				catch(() => alert('Falha ao excluir a notificação. Tente novamente mais tarde.'))
		}
	};

	useEffect(() => {
	  fetch('https://gs-barbearia-api.onrender.com/barbeiro/notificacoes', {
	    method: 'GET',
	    headers: {
	      'Content-Type': 'application/json',
	      'token': localStorage.getItem('token')
	    }
	  })
	    .then(response => response.json())
	    .then(data => {
	    if(data){
	      const notificationNames = data.map(item => {
	      	return {
	      		name: item.nome,
	      		id: item.idCliente,
	      		requestConfirm: item.solicitacaoAceita
	      	}
	      });

	      setNotifications(notificationNames);	      
	     }
	    })
  		.catch(() => alert('Ocorreu um erro ao carregar as notificações, tente novamente mais tarde.'));
}, []);	

	return(
		<>
			<Container>
				<BarberMenu />
				<BarberNotificationsContainer>
				{
					notifications.map(item => (
						<BarberNotification key={item}>
							<p onClick={() => handleConfirmCut(item.id)}>Solicitação de corte do cliente {item.name}</p>
							{item.requestConfirm ? <BsCheck className="checked"/> : <BsCheck className="notChecked"/>}
							<BsTrash3Fill onClick={() => handleDeleteNotification(item.id)} className="trash-icon"/>
						</BarberNotification>
						)
					)
				}
				</BarberNotificationsContainer>
			<Footer />
			</Container>
		</>
	);
}