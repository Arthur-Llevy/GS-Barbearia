import { BarberMenu, Footer, Container } from '../components/Exports';  
import { BarberNotificationsContainer, BarberNotification  } from '../styles/pages/barberNotifications'
import { BsCheck, BsTrash3Fill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import moment from 'moment';

export function BarberNotifications(){

	const APIURL = process.env.REACT_APP_API_URL;
	document.title = 'GSB | Notificações';
	let [notifications, setNotifications] = useState([]);

	async function handleConfirmCut(clientId, id){

		if(window.confirm('Tem certeza que deseja confirmar o corte do cliente?')){
			fetch(`${APIURL}/barbeiro/confirmarSolicitacao`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					'token': localStorage.getItem('token')
				},
				body: JSON.stringify({clientId: clientId, id: id})
			}).
				then(response => response.json()).
				then(data => alert(data.message)).
				catch(() => alert('Falha ao confirmar o corte. Tente novamente mais tarde.'))
		};

	};

	async function handleDeleteNotification(id){
		if(window.confirm('Tem certeza que deseja excluir esta notificação?')){
			fetch(`${APIURL}/barbeiro/excluirNotificacao`, {
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
	  fetch(`${APIURL}/barbeiro/notificacoes`, {
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
	      		clientId: item.idCliente,
	      		requestConfirm: item.solicitacaoAceita,
	      		time: ` (${moment(item.createdAt).format('DD/MM')} às ${moment(item.createdAt).hour()}:${moment(item.createdAt).minute()})`,
	      		id: item.id
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
				{notifications.length === 0 ? 
					(
						<p
							style={{
								color: '#eee',
								fontWeight: 'bold',
								fontSize: '20px'
							}}
						>Carregando notificações...</p>
					) :
					notifications.map(item =>
						(
						<BarberNotification key={item}>
							<p onClick={() => handleConfirmCut(item.clientId, item.id)}>Solicitação de corte do cliente {item.name} {item.time}</p>
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