import React from 'react';
import { Menu, Footer, Container, HomePageContainer} from '../components/Exports';
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
	
	document.title = 'GSB | Página inicial';
	let navigater = useNavigate();

	const navigate = (url) => {
		navigater(url)
	};

	return(
		<>
			<Container>
				<Menu />
				<HomePageContainer>
					<p>Seja bem-vindo(a) a GS Barbearia!</p> 
					<button onClick={() => navigate('/loginBarbeiro')} >Entrar como barbeiro</button>
					<button onClick={() => navigate('/loginCliente')} >Entrar como cliente</button>
					<button onClick={() => navigate('/cadastrarCliente')} >Cadastrar cliente</button>				
				</HomePageContainer>
				<Footer />
			</Container>
		</>
	);
};