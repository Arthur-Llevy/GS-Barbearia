import logoMenu from '../images/logo_menu_icon.svg';
import { ContainerMenu, PopUp } from './Exports';
import { useRef } from 'react';

export const Menu = () => {

	let popUp = useRef();
	
	const logout = () => {
		localStorage.removeItem('token');
		window.location.href = '/';
	}

	return(
		<>
			<ContainerMenu>
				<img src={logoMenu} alt="Ícone do menu"/>
				<h1>Barbearia</h1>				
				 <img src={logoMenu} alt="Ícone do menu"/>				
				<PopUp ref={popUp}>
					<p>Notificações</p>					
					<p onClick={logout} >Sair</p>
				</PopUp>
			</ContainerMenu>
		</>
	);
};