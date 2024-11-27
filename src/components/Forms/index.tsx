import React, { forwardRef, useState, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormsContent, FormsTitle, TextContent } from './styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FEC200',
    },
    text: {
      primary: '#FFF',
    },
  },
});

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const formatPhone = (value: string): string => {
  const formattedValue = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return formattedValue;
};

const Forms = forwardRef<HTMLDivElement>((props, ref) => {
  const { ...rest } = props;
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [userType, setUserType] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [userTypeError, setUserTypeError] = useState('');
  const [openModal, setOpenModal] = useState(false);

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
    const { value } = target;
    setPhone(value);

    const isValidPhone = /^(\([0-9]{2}\)\s?|[0-9]{2}\s?)[0-9]{5}-?[0-9]{4}$/;
    if (!isValidPhone.test(value)) {
      setPhoneError('Número de telefone inválido');
    } else {
      setPhoneError('');
    }
  };

  const handleUserTypeChange = (event: SelectChangeEvent<string>) => {
    const { value } = event.target;
    setUserType(value);
    if (!value) {
      setUserTypeError('Por favor, selecione uma opção');
    } else {
      setUserTypeError('');
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
    color: 'white',
    border: '2px solid #000',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const HandleFormSubmit = () => {
    let hasError = false;

    if (!fullName.trim()) {
      setNameError('O nome é obrigatório');
      hasError = true;
    }

    if (!email.trim()) {
      setEmailError('O email é obrigatório');
      hasError = true;
    } else if (!isValidEmail(email)) {
      setEmailError('Por favor, insira um email válido');
      hasError = true;
    }

    if (!phone.trim()) {
      setPhoneError('O telefone é obrigatório');
      hasError = true;
    } else {
      const isValidPhone = /^(\([0-9]{2}\)\s?|[0-9]{2}\s?)[0-9]{5}-?[0-9]{4}$/;
      if (!isValidPhone.test(phone)) {
        setPhoneError('Número de telefone inválido');
        hasError = true;
      }
    }

    if (!userType.trim()) {
      setUserTypeError('Por favor, selecione uma opção');
      hasError = true;
    }

    if (hasError) return;

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = `https://docs.google.com/forms/d/e/1FAIpQLSfp-Nk2l2C6cFfd73l4K8boGEV9KhecqFo4fxn0I-fRjIMnTA/formResponse?entry.700511884=${fullName}&entry.278382277=${email}&entry.571064173=${phone}&entry.1811515776=${userType}`;

    document.body.appendChild(iframe);
    setOpenModal(true);

    setTimeout(() => {
      setOpenModal(false);
    }, 5000);

    setFullName('');
    setEmail('');
    setPhone('');
    setUserType('');
  };

  return (
    <FormsContent ref={ref} {...rest}>
      <FormsTitle>Formulário de Contato</FormsTitle>
      <Box
        sx={{
          width: '60%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '3% 0',
          alignItems: 'center',
          backgroundColor: '#F4F3F3',
          borderRadius: '15px',
          '@media (max-width: 901px)': {
            width: '90%',
            marginBottom: '20px',
          },
        }}
      >
        <TextContent>
          <h3>Preencha o formulário</h3>
          <p>Insira suas informações para cadastro.</p>
        </TextContent>
        <Box
          mt={4}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '75%',
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
                  <AccountCircle sx={{ color: '#0F3C19' }} />
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
                  borderColor: '#368548',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#0F3C19',
                },
              },
              '& input': {
                color: 'black',
              },
            }}
          />
        </Box>
        <Box
          mt={2}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '75%',
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
                  <EmailIcon sx={{ color: '#0F3C19' }} />
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
                  borderColor: '#368548',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#0F3C19',
                },
              },
              '& input': {
                color: 'black',
              },
            }}
          />
        </Box>
        <Box
          mt={2}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '75%',
            },
          }}
        >
          <TextField
            id="input-with-icon-textfield-phone"
            placeholder="Telefone com DDD"
            value={formatPhone(phone)}
            onChange={handleInputPhoneChange}
            error={!!phoneError}
            helperText={phoneError}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: '#0F3C19' }} />
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
                  borderColor: '#368548',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#0F3C19',
                },
              },
              '& input': {
                color: 'black',
              },
            }}
          />
        </Box>
        <Box
          mt={2}
          sx={{
            width: '75%',
            '@media (max-width: 901px)': {
              width: '75%',
            },
          }}
        >
          <FormControl
            fullWidth
            error={!!userTypeError}
            sx={{
              '& .MuiInputLabel-root': {
                color: '#6E6E6E',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: '#0F3C19',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#6E6E6E',
                },
                '&:hover fieldset': {
                  borderColor: '#368548',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#0F3C19',
                },
              },
              '& .MuiSelect-root': {
                color: 'black',
              },
            }}
          >
            <InputLabel id="user-type-label">Tipo de Usuário</InputLabel>
            <Select
              labelId="user-type-label"
              id="user-type-select"
              value={userType}
              onChange={handleUserTypeChange}
              label="Tipo de Usuário"
            >
              <MenuItem value="Prestador de Serviços">
                Prestador de Serviços
              </MenuItem>
              <MenuItem value="Produtor Rural">Produtor Rural</MenuItem>
              <MenuItem value="Ambos">Ambos</MenuItem>
            </Select>
            <Typography variant="body2" color="error">
              {userTypeError}
            </Typography>
          </FormControl>
        </Box>
        <Box mt={3}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: '#0F3C19',
              width: '200px',
              '&:hover': {
                backgroundColor: '#0F3C19',
                filter: 'brightness(0.8)',
              },
            }}
            onClick={HandleFormSubmit}
          >
            ENVIAR
          </Button>
        </Box>
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
              Formulário enviado!
            </Typography>
          </Box>
        </Modal>
      </Box>
    </FormsContent>
  );
});

export default Forms;
