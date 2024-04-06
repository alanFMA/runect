import React, { useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkIcon from '@mui/icons-material/Link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Modal, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TextContent } from './styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#31AC47', // Cor principal (linha, foco, etc.)
    },
    text: {
      primary: '#FFF',
    },
  },
});

const isValidEmail = (email: string): boolean => {
  // Regex para validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const formatPhone = (value: string): string => {
  const formattedValue = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return formattedValue;
};

export default function Forms() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInputEmailChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setEmail(value);
    if (!isValidEmail(value)) {
      setEmailError('Por favor, insira um email válido');
    } else {
      setEmailError('');
    }
  };

  const handleInputNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFullName(value);

    if (value.length < 5) {
      setNameError('Nome deve ter pelo menos 5 caracteres');
    } else {
      setNameError('');
    }
  };

  const handleInputPhoneChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    let { value } = target;

    value = value.slice(0, 15);

    setPhone(value);

    const isValidPhone = /^(\([0-9]{2}\)\s?|[0-9]{2}\s?)[0-9]{5}-?[0-9]{4}$/;
    const isPhoneValid = isValidPhone.test(value);

    if (!isPhoneValid) {
      setPhoneError('Número de telefone inválido');
    } else {
      setPhoneError('');
    }
  };

  const handleInputDateChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    let { value } = target;

    value = value.slice(0, 10);

    let formattedValue = value.replace(/\D/g, '');

    if (formattedValue.length > 2) {
      formattedValue = formattedValue.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
    }

    if (formattedValue.length > 5) {
      formattedValue = formattedValue.replace(
        /^(\d{2})\/?(\d{2})(\d{0,4})/,
        '$1/$2/$3',
      );
    }

    setDate(formattedValue);

    const isValidDate = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!isValidDate.test(formattedValue)) {
      setDateError('Data inválida. Utilize o formato DD/MM/YYYY.');
    } else {
      setDateError('');
    }
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: '#1C1C1E',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const HandleFormSubmit = () => {
    if (
      !nameError &&
      !emailError &&
      !phoneError &&
      !dateError &&
      fullName &&
      date &&
      email &&
      phone
    ) {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = `https://docs.google.com/forms/d/e/1FAIpQLSdVCrVmYGiOHKr3ZnK4nORVlkzZf09flrOGojLZzZvlj9CD_g/formResponse?entry.1404004919=${fullName}&entry.823484063=${date}&entry.1019781588=${phone}&entry.926534741=${email}`;
      document.body.appendChild(iframe);
      setOpenModal(true);

      setTimeout(() => {
        setOpenModal(false);
      }, 5000);

      setFullName('');
      setEmail('');
      setPhone('');
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: '60%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '3% 0',
          alignItems: 'center',
          backgroundColor: '#1C1C1E',
          borderRadius: '15px',
          '@media (max-width: 901px)': {
            width: '90%',
            marginBottom: '20px',
          },
        }}
      >
        <TextContent>
          <strong>
            <h1 style={{ textAlign: 'center' }}>INSCRIÇÕES ENCERRADAS</h1>
          </strong>
          <br />
          <p>
            Período de Inscrição: <span>03/04 - 05/04</span>
          </p>
          <p>
            Início das aulas: <span>06/04 às 14:00hrs </span>
          </p>
          <p>
            Local: <span>Congregação - AD Valentina 1 </span>
          </p>
          <p>
            <a
              target="_blank"
              href="https://docs.google.com/document/d/1nqKJnonAOKDXSGDa5yZw6TRmGt2qoh5hP1QcKeBAOBg/edit?usp=sharing"
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginTop="7%"
              >
                <LinkIcon sx={{ color: '#31AC47' }} /> Acesse aqui o conteúdo do
                curso <LinkIcon sx={{ color: '#31AC47' }} />
              </Box>
            </a>
          </p>
        </TextContent>
        {/* <Box
          mt={3}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '90%',
            },
          }}
        >
          <TextField
            id="input-with-icon-textfield-name"
            placeholder="Nome Completo"
            value={fullName}
            onChange={handleInputNameChange}
            error={!!nameError}
            helperText={nameError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6E6E6E',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& input': {
                color: '#FFF',
              },
            }}
          />
        </Box>
        <Box
          mt={2}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '90%',
            },
          }}
        >
          <TextField
            id="input-with-icon-textfield-date"
            placeholder="Data de Nascimento (Apenas números)"
            value={date}
            onChange={handleInputDateChange}
            error={!!dateError}
            helperText={dateError}
            variant="outlined"
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6E6E6E',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& input': {
                color: '#FFF',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EventIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box
          mt={2}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '90%',
            },
          }}
        >
          <TextField
            id="input-with-icon-textfield-email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={handleInputEmailChange}
            error={!!emailError}
            helperText={emailError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6E6E6E',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& input': {
                color: '#FFF',
              },
            }}
          />
        </Box>
        <Box
          mt={2}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '90%',
            },
          }}
        >
          <TextField
            id="input-with-icon-textfield-phone"
            placeholder="Número de Telefone"
            value={formatPhone(phone)}
            onChange={handleInputPhoneChange}
            error={!!phoneError}
            helperText={phoneError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: '#fff' }} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{
              width: '100%',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6E6E6E',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              '& input': {
                color: '#FFF',
              },
            }}
          />
        </Box>
        {isEmpty && (
          <Typography variant="body2" sx={{ color: 'red', mt: 2 }}>
            A inscrição não pode ser enviada vazia.
          </Typography>
        )}
        <Box mt={3}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            sx={{ fontWeight: 'bold' }}
            onClick={HandleFormSubmit}
          >
            INSCREVA-SE
          </Button>
        </Box> */}
        <Modal
          open={openModal}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <CheckCircleIcon sx={{ color: 'green', fontSize: 50, mb: 1 }} />{' '}
              Inscrição realizada com sucesso!
            </Typography>
          </Box>
        </Modal>
      </Box>
    </ThemeProvider>
  );
}
