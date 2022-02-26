import styled from 'styled-components'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper'

function Contact(){
  // const nodemailer = require('nodemailer');
  // const mailTransport = nodemailer.createTransport('SMTP', {
  //   service: 'Gmail',
  //   auth: {
  //     user: 'b07901162@g.ntu.edu.tw',
  //     pass: 'Penny0916495495',
  //   }
  // })

  // const mailOptions= {
  //   from: 'b07901162@g.ntu.edu.tw',
  //   to: 'b07901162@g.ntu.edu.tw', // list of receipients
  //   subject: 'Test',
  //   html: 'Test'
  // }

  // mailTransport.sendMail(mailOptions, (err, info) => {
  //   if(err) throw err;
  //   if(info) console.log(`Done sending!`, info)
  // });

    return(
      <>
      <BgPaper />
      <TitleContainer elevation={0}>
        <Typography variant='h3' sx={{ position: 'relative', top: 50 }}>Contact.</Typography>
      </TitleContainer>
      <Container>
        <Typography variant='h5'>Send me an email</Typography>
        <Grid container sx={{ pt: 3 }} spacing={2}>
          <ContactGrid item xs={12} sm={6}>
            <TextField required fullWidth id="outlined-required" label="Name" variant="outlined" size="small" margin="dense" />
          </ContactGrid>
          <ContactGrid item xs={12} sm={6}>
            <TextField required fullWidth id="outlined-required" label="Email" variant="outlined" size="small" margin="dense" />
          </ContactGrid>
          <ContactGrid item xs={12} sm={12}>
            <TextField required fullWidth id="outlined-multiline-static" multiline rows={4} 
            label="Message" variant="outlined" size="small" margin="dense" />
          </ContactGrid>
        </Grid>
        <Button variant='contained' sx={{ float: 'right', mt: 2, width: 120 }}>Submit</Button>
      </Container>
        
      </>
    )
  }
  
export default Contact;

const BgPaper = styled(Paper)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 150%;
  background-color: '#fff';
  z-index: -1;
`

const TitleContainer = styled(Paper)`
  width: 100vw;
  height: 35vh;
  text-align: center;
`

const ContactGrid = styled(Grid)`
  height: 2%;
`
