
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactsTable from './ContactsTable';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Management
      </Typography>
      <Box mb={4}>
        <ContactForm fetchContacts={fetchContacts} />
      </Box>
      <ContactsTable contacts={contacts} fetchContacts={fetchContacts} />
    </Container>
  );
};

export default App;
