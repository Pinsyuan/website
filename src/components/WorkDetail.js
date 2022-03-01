import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import itemData from './data.js'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function WorkDetail(){
  const { workName } = useParams();
  const workData = itemData.find(item => item.urlName===workName)


  const handleLink = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
        if (newWindow) newWindow.opener = null;
  }

  return(
    <>
      <BgPaper />
      <Container sx={{ pt: 3 }}>
        <Typography variant='h5' color='primary.main' sx={{ fontFamily: 'Cormorant Garamond', pb: 1 }}>{workData.title}</Typography>
        <Typography variant='body1' color='text.main' sx={{ fontFamily: 'Cormorant Garamond' }}>{workData.discription}</Typography>
        {workData.ifLink && <Button variant='contained' endIcon={<ArrowForwardIcon />} sx={{ mt: 2.5, float: 'right' }} disableElevation onClick={() => handleLink(workData.link)}>see the website</Button>}
        <BannerImg src={workData.banner} />
        {workData.content.map((item) => (
          <>
            <Typography variant='h6' sx={{ fontWeight: 'regular', pt: 3, pb: 1 }}>{item.subtitle}</Typography>
            <Typography variant='body1' color='text.main'>&emsp;&emsp;{item.text}</Typography>
          </>
        ))}
      </Container>
    </>
    )
  }
  
export default WorkDetail;

const BgPaper = styled(Paper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200%;
  background-color: '#fff';
  z-index: -1;

  @media only screen and (max-width: 680px) {
		width: 750px;
	}
`

const BannerImg = styled.img`
  width: 100%;
  padding-top: 3%;

  @media only screen and (max-width: 680px) {
		width: 680px;
	}
`