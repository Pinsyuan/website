import Logo from '../img/Logo.png'
import styled from "styled-components";
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';

function Header(props){
	return(
		<HeaderContainer>
			<LogoContainer>
				<LogoImg src={Logo} onClick={() => props.navigate('*')}/>
			</LogoContainer>
			<MenuGrid container spacing={0}>
				<Grid item xs={12} sm={6} sx={{ justifyContent:'center' }} onClick={() => props.navigate('./Portfolio')}>
					<Typography variant="h4">PORTFOLIO</Typography>
				</Grid>
				<Grid item xs={12} sm={6} onClick={() => props.navigate('./About')}>
					<Typography variant="h4">ABOUT</Typography>
				</Grid>
				{/* <Grid item xs={12} sm={3.5} sx={{ justifyContent:'center' }} onClick={() => props.navigate('./Portfolio')}>
					<Typography variant="h4">PORTFOLIO</Typography>
				</Grid>
				<Grid item xs={12} sm={3.5} onClick={() => props.navigate('./About')}>
					<Typography variant="h4">ABOUT</Typography>
				</Grid>
				<Grid item xs={12} sm={3.5} onClick={() => props.navigate('./Contact')}>
					<Typography variant="h4">CONTACT</Typography>
				</Grid> */}
			</MenuGrid>
		</HeaderContainer>
	)
}

export default Header;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-top: 2vh;

	@media only screen and (max-width: 680px) {
		flex-direction: column;
	}
`

const LogoContainer = styled(Container)`
	width: 20vw;
	display: flex;
`

const LogoImg = styled.img`
	width: 5vw;
	padding-left: 6%;
	cursor: pointer;
	
	@media only screen and (max-width: 680px) {
		display: block;
		margin: auto;
		width: 10vw;
		padding-left: 0%;
	}
`

const MenuGrid = styled(Grid)`
	/* width: 70vw; */
	width: 50vw;
	/* padding-left: 15vw; */
	padding-left: 20vw;
	text-align: center;
	align-items: center;
	cursor: pointer;

	@media only screen and (max-width: 680px) {
		padding-left: 0%;
	}
`