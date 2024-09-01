import React, { useState } from 'react';
import { Button, TextField, Typography, Snackbar, Alert, Slide } from '@mui/material';
import { styled, keyframes } from '@mui/system';
import { motion } from 'framer-motion';


// Styled components
const FeedbackContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 1px 2px 0px rgba(0,255,255,0.7),
            1px 2px 4px 0px rgba(0,255,255,0.7),
            2px 4px 8px 0px rgba(0,255,255,0.7),
            2px 4px 16px 0px rgba(0,255,255,0.7);
  max-width: 600px;
  margin: 8rem auto;
`;

const Title = styled(Typography)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #673ab7;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 1.5rem;
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #673ab7;
    }
    &:hover fieldset {
      border-color: #9575cd;
    }
    &.Mui-focused fieldset {
      border-color: #673ab7;
    }
  }
`;

const SubmitButton = styled(Button)`
  background-color: #673ab7;
  color: #fff;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    background-color: #512da8;
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.95);
  }
`;

const AnimatedBackground = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: #00000;
  
`;

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [errors, setErrors] = useState({ email: '', feedback: '' });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ email: '', feedback: '' });

    // Simple validation
    let isValid = true;
    const newErrors = { email: '', feedback: '' };

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate feedback
    if (!feedback) {
      newErrors.feedback = 'Feedback cannot be empty.';
      isValid = false;
    }

    if (isValid) {
      setSnackbarOpen(true);
      setFeedback('');
      setEmail('');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <AnimatedBackground>
      <FeedbackContainer
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Feedback</Title>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            label="Your Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            error={Boolean(errors.email)}
            helperText={errors.email}
            InputLabelProps={{ style: { color: '#673ab7' } }}
          />
          <StyledTextField
            label="Your Feedback"
            variant="outlined"
            multiline
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            error={Boolean(errors.feedback)}
            helperText={errors.feedback}
            InputLabelProps={{ style: { color: '#673ab7' } }}
          />
          <SubmitButton type="submit" variant="contained" component={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Submit
          </SubmitButton>
        </form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={4000}
          onClose={() => setSnackbarOpen(false)}
          TransitionComponent={(props) => <Slide {...props} direction="up" />}
        >
          <Alert severity="success" onClose={() => setSnackbarOpen(false)}>
            Thank you for your feedback!
          </Alert>
        </Snackbar>
      </FeedbackContainer>
    </AnimatedBackground>
  );
};

export default Feedback;
