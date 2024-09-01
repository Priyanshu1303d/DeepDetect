import React, { useState } from 'react';
import { Button, TextField, Typography, Snackbar, Alert, Zoom } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const CenteredContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #000;
  padding: 2rem;
`;

const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 90%;
  margin-top: 7rem auto; 
`;

const Title = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #000;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 1rem;
  & .MuiOutlinedInput-root {
    & fieldset { border-color: #ccc; }
    &:hover fieldset { border-color: #1976d2; }
    &.Mui-focused fieldset { border-color: #1976d2; }
  }
  & .MuiInputLabel-root { color: #1976d2; }
  & .MuiInputBase-input { color: #333; }
`;

const SubmitButton = styled(Button)`
  background-color: #1976d2;
  color: #fff;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover { background-color: #1565c0; transform: scale(1.05); }
  &:active { background-color: #0d47a1; transform: scale(0.95); }
`;

const ContactUs = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Remove non-numeric characters and limit to 10 digits
    const numericValue = value.replace(/\D/g, '').slice(0, 10);
    setPhone(numericValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message && email && name && phone.length === 10) {
      // Handle contact submission logic here
      setSnackbarOpen(true);
      setMessage('');
      setEmail('');
      setName('');
      setPhone('');
    }
  };

  return (
    <CenteredContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <FormContainer>
        <Title>Contact Us</Title>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            label="Your Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <StyledTextField
            label="Your Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <StyledTextField
            label="Your Phone"
            variant="outlined"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            inputProps={{ pattern: "\\d{10}", maxLength: 10, inputMode: 'numeric' }}
            required
            helperText="Enter a 10-digit phone number"
          />
          <StyledTextField
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <SubmitButton type="submit" variant="contained" component={motion.button} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Send Message
          </SubmitButton>
        </form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          TransitionComponent={(props) => <Zoom {...props} />}
        >
          <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
            Thank you for reaching out!
          </Alert>
        </Snackbar>
      </FormContainer>
    </CenteredContainer>
  );
};

export default ContactUs;
