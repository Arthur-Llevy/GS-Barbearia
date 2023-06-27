import logoMenu from '../images/logo_menu_icon.svg';
import { ContainerMenu } from './Exports';
import { useNavigate } from 'react-router-dom';
import { BsBell } from 'react-icons/bs';
import { RxExit } from 'react-icons/rx';

export const BarberMenu = () => {

	let navigater = useNavigate();

	const navigate = (url) => {
		navigater(url)
	};

	const logout = () => {
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
						onClick={() => navigate('/barbeiro/notificacoes')}
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