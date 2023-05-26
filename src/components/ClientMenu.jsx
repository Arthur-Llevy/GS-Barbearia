import logoMenu from '../images/logo_menu_icon.svg';
import { ContainerMenu } from './Exports';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { BsBell } from 'react-icons/bs';
import { RxExit } from 'react-icons/rx';

export function ClientMenu(){

	let visible = false;
	let navigater = useNavigate();

	function navigate(url){
		navigater(url)
	};

	function logout(){
		localStorage.removeItem('token');
		window.location.href = '/';
	};

	return(
		<>
			<ContainerMenu>
				<img src={logoMenu} alt="Ícone do menu"/>
				<h1>Barbearia</h1>		
				<div 
					style={{
						width: '70px',
						display: 'flex',
						justifyContent: 'space-between'
					}}
					className="iconsMenu"
				>						
					<BsBell
						style={{width: '25px', cursor: 'pointer'}}
						onClick={() => navigate('/cliente/notificacoes')}
					/>
					<RxExit 
						style={{width: '25px', cursor: 'pointer'}}
						onClick={logout}
					/>
				</div>
			</ContainerMenu>
		</>
	);
};