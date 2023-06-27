import { ClientMenu, Footer, Container, ClientNotification, ClientNotificationContainer } from '../components/Exports';
import { BsCheck, BsTrash3Fill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import moment from 'moment'

export const ClientNotifications = () => {

	const APIURL = process.env.REACT_APP_API_URL;
	document.title = 'GSB | Notificações';

	let [notifications, setNotifications] = useState([]);

	const handleDeleteNotification = async (id) => {
		if(window.confirm('Tem certeza que deseja excluir esta notificação?')){
			fetch(`${APIURL}/cliente/excluirNotificacao`, {
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
	  fetch(`${APIURL}/cliente/notificacoes`, {
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
		      		clientId: item.idCliente,
		      		requestConfirm: item.solicitacaoAceita,
		      		id: item.id,
		      		time: `(${moment(item.createdAt).format('DD/MM')} às ${moment(item.createdAt).hour()}:${moment(item.createdAt).minute()})`
		      	};
		      });
		      setNotifications(notificationNames);	      
	  		};
	    })
  		.catch(() => alert('Ocorreu um erro ao carregar as notificações, tente novamente mais tarde.'));
});

	return(
		<>
			<Container>
				<ClientMenu />
				<ClientNotificationContainer>					
				{notifications.length === 0 ? (
						<p
							style={{
								color: '#eee',
								fontWeight: 'bold',
								fontSize: '20px'
							}}
						>Carregando notificações...</p>
					) : 
					notifications.map(item => (
						<ClientNotification key={item}>
							<p>Solicitação de corte {item.time}</p>
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