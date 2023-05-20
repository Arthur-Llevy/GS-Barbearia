import logoMenu from '../images/logo_menu_icon.svg';
import { ContainerMenu, PopUp } from './Exports';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export function ClientMenu(){

	let popUp = useRef();
	let visible = false;
	let navigater = useNavigate();
	function navigate(url){
		navigater(url)
	}

	function togglePopUpVisibility(){
		if(!visible){
			popUp.current.style.display = 'flex';
			popUp.current.style.opacity = '1';
			visible = true;
		}else {
			popUp.current.style.display = 'none';
			popUp.current.style.opacity = '0';
			visible = false;
		};
	};

	function logout(){
		localStorage.removeItem('token');
		window.location.href = '/';
	}

	return(
		<>
			<ContainerMenu>
				<img src={logoMenu} alt="Ícone do menu"/>
				<h1>Barbearia</h1>				
				<HiOutlineMenuAlt3 onClick={togglePopUpVisibility} />			
				<PopUp ref={popUp}>
					<p onClick={() => navigate('/cliente/notificacoes')}>Notificações</p>		
					<p onClick={logout} >Sair</p>
				</PopUp>
			</ContainerMenu>
		</>
	);
};