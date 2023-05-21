import { ClientMenu, Footer, Container, ClientNotification, ClientNotificationContainer } from '../components/Exports';
import { BsCheck, BsTrash3Fill } from 'react-icons/bs';
import { useState, useEffect } from 'react';

export function ClientNotifications(){
	document.title = 'GSB | Notificações';

	let [notifications, setNotifications] = useState([]);

	async function handleDeleteNotification(id){
		if(window.confirm('Tem certeza que deseja excluir esta notificação?')){
			fetch('https://gs-barbearia-api.onrender.com/cliente/excluirNotificacao', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					'token': localStorage.getItem('token')
				},
				body: JSON.stringify({id: id})
			})
				.then(response => response.json())
				.then(data => alert(data.message))
				.catch(() => alert('Falha ao excluir a notificação. Tente novamente mais tarde.'))
		}
	};

	useEffect(() => {
	  fetch('https://gs-barbearia-api.onrender.com/cliente/notificacoes', {
	    method: 'POST',
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
	  		};
	    })
  		.catch(() => alert('Ocorreu um erro ao carregar as notificações, tente novamente mais tarde.'));
}, []);

	return(
		<>
			<Container>
				<ClientMenu />
				<ClientNotificationContainer>					
				{
					notifications.map(item => (
						<ClientNotification key={item}>
							<p>Solicitação de corte</p>
							{item.requestConfirm ? <BsCheck className="checked"/> : <BsCheck className="notChecked"/>}
							<BsTrash3Fill onClick={() => handleDeleteNotification(item.id)}  className="trash-icon"/>
						</ClientNotification>
						)
					)
				}
				</ClientNotificationContainer>
				<Footer />
			</Container>
		</>
	);
};