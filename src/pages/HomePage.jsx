import React from 'react';
import { Menu, Footer } from '../components/Exports';
import { HomePageContainer } from '../components/Exports';

export function HomePage(){
	return(
		<>
			<Menu />
			<HomePageContainer>
				<p>Seja bem-vindo(a) a GS Barbearia!</p> 
				<button><a href="loginBarbeiro">Entrar como barbeiro</a></button>
				<button><a href="loginCliente">Entrar como cliente</a></button>
				<button><a href="#">Cadastrar cliente</a></button>
			</HomePageContainer>
			<Footer />
		</>
	);
};