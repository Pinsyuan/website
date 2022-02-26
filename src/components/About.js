import styled from 'styled-components'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import profileImg from '../img/profile.jpeg'

function About(){
  const handleLink = (url) => {
    return () => openNewTab(url)
  }

  const openNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
  }

  const handleEmail =() => {
    const mailNode = document.getElementById("send");
    mailNode.setAttribute("href","mailto:b07901162@g.ntu.edu.tw");
    mailNode.click();
  }


  return(
    <>
      <BgPaper />
      <TitleContainer elevation={0}>
        <Typography variant='h3' sx={{ position: 'relative', top: 50 }}>About.</Typography>
      </TitleContainer>
      <Container>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={3}>
            <ProfileImg src={profileImg}/>
            <Grid container sx={{ pt: 3, width: 1, textAlign: 'center' }}>
              <Grid item xs={4}>
                <IconButton color='primary' sx={{ width: 48, height: 48 }} onClick={handleLink('https://github.com/Pinsyuan')}> <GitHubIcon sx={{ width: 48, height: 48 }} /> </IconButton>
              </Grid>
              <Grid item xs={4}>
                <IconButton color='primary' sx={{ width: 48, height: 48 }} onClick={handleLink('https://www.linkedin.com/in/pin-hsuan/')}> <LinkedInIcon sx={{ width: 48, height: 48 }} /> </IconButton>
              </Grid>
              <Grid item xs={4}>
                <IconButton color='primary' sx={{ width: 48, height: 48 }} onClick={handleEmail}> <MailOutlineIcon sx={{ width: 48, height: 48 }} /> </IconButton>
                <a href="mailto" id="send" />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={9}>
            <Typography variant='body1' color='text.main'>「簡介」</Typography>

            <Typography variant='h2' sx={{ mt: 4 }}>Education</Typography>
            <Typography variant='body1' color='secondary.main' sx={{ mt: 0.5 }}>National Taiwan University</Typography>
            <Typography variant='body2' component='span'>B.S. in Electrical Engineering</Typography>
            <Typography variant='body2' component='span' sx={{ position: 'absolute', right: 60 }}>Sep. 2018 ‐ Expected Jun. 2022</Typography>
            

            <Typography variant='h2' sx={{ mt: 4 }}>Work Experience</Typography>
            <Typography variant='body1' color='secondary.main' sx={{ mt: 0.5 }}>Cardbo Fintech</Typography>
            <Typography variant='body2' component='span'>UIUX Designer</Typography>
            <Typography variant='body2' component='span' sx={{ position: 'absolute', right: 60 }}>Jan. 2021 ‐ Jan. 2022</Typography>
            <Typography variant='body1' color='secondary.main' sx={{ mt: 1 }}>National Taiwan University</Typography>
            <Typography variant='body2' component='span'>Teaching Assistant - Mobile Cloud Service Design</Typography>
            <Typography variant='body2' component='span' sx={{ position: 'absolute', right: 60 }}>Sep. 2021 ‐ Jan. 2022</Typography>
            <Typography variant='body1' color='secondary.main' sx={{ mt: 1 }}>National Taiwan University</Typography>
            <Typography variant='body2' component='span'>Teaching Assistant - Presentation and Communication Skills</Typography>
            <Typography variant='body2' component='span' sx={{ position: 'absolute', right: 60 }}>Jun. 2021 ‐ Jan. 2022</Typography>
            

            <Typography variant='h2' sx={{ mt: 4 }}>Leadership</Typography>
            <Typography variant='body1' color='secondary.main' sx={{ mt: 0.5 }}>NTUEE Badminton Team</Typography>
            <Typography variant='body2' component='span'>Captain</Typography>
            <Typography variant='body2' component='span' sx={{ position: 'absolute', right: 60 }}>Aug. 2019 ‐ Jul. 2020</Typography>
            
          </Grid>
        </Grid>
      </Container>
      
    </>
    )
  }
  
export default About;

const BgPaper = styled(Paper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 220%;
  background-color: '#fff';
  z-index: -1;
`

const TitleContainer = styled(Paper)`
  width: 100vw;
  height: 35vh;
  text-align: center;
`

const ProfileImg = styled.img`
  width: 90%;
  display: block;
  margin: auto;

  @media only screen and (max-width: 680px) {
		width: 50%;
	}
`