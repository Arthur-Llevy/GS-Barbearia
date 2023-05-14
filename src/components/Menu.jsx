import logoMenu from '../images/logo_menu_icon.svg';
import { ContainerMenu } from './Exports';

export function Menu(){
	return(
		<>
			<ContainerMenu>
				<img src={logoMenu} alt="Ícone do menu"/>
				<h1>Barbearia</h1>
				<img src={logoMenu} alt="Ícone do menu"/>
			</ContainerMenu>
		</>
	);
};