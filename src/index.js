import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E61AD',
      light: '#8DB3ED',
      contrast: '#fff',
    },
    secondary: {
      main: '#F0C808',
    },
    text: {
      main: '#6C6C6C',
      dark: '#414143',
    },
    background: {
      default: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  }
});

theme.typography.h1 = {
  fontSize: '2.4rem',
  fontWeight: 700,
  [theme.breakpoints.up('md')]: {
    fontSize: '3.8rem',
  },
  color: theme.palette.text.main,
};

theme.typography.h2 = {
  fontSize: '2rem',
  fontWeight: 600,
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
  color: theme.palette.primary.main,
};

theme.typography.h3 = {
  fontSize: '2.4rem',
  fontWeight: 500,
  [theme.breakpoints.up('md')]: {
    fontSize: '3.8rem',
  },
  color: theme.palette.primary.main,
};

theme.typography.h4 = {
  fontSize: '1.2rem',
  fontWeight: 700,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
  color: theme.palette.primary.main,
  '&:hover':{
    color: theme.palette.primary.light,
  }
};

theme.typography.h5 = {
  fontSize: '1.8rem',
  fontWeight: 500,
  fontFamily: 'Noto Sans TC',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.3rem',
  },
  color: theme.palette.text.main,
};

theme.typography.body1 = {
  fontSize: '0.8rem',
  fontWeight: 400,
  fontFamily: 'Noto Sans TC',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
  color: theme.palette.primary.main,
};

theme.typography.body2 = {
  fontSize: '0.6rem',
  fontWeight: 300,
  fontFamily: 'Noto Sans TC',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
  color: theme.palette.text.main,
};


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
