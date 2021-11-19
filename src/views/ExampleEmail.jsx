import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import FakeEmail from '../components/FakeEmail';
import ebay from '../emails/ebay';
import microsoft from '../emails/microsoft';
import google from '../emails/google';
import word from '../emails/word';

const ExampleEmailView = () => {
  const recipient = {
    name: 'Test',
    email: 'test@my-email.com',
  };

  const templates = {
    ebay,
    microsoft,
    google,
    word,
  };

  const [selectedEmail, setSelectedEmail] = useState({
    name: 'ebay',
    content: ebay(recipient),
  });

  return (
    <>
      <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1000, flexGrow: 1, mb: 5 }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedEmail.name}
            label="Age"
            onChange={(event) => {
              setSelectedEmail({
                name: event.target.value,
                content: templates[event.target.value](recipient),
              });
            }}
          >
            {Object.keys(templates).map((templateName) => (
              <MenuItem key={templateName} value={templateName}>
                {templateName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
      <FakeEmail
        fromEmail={selectedEmail.content.fromEmail}
        fromName={selectedEmail.content.fromName}
        subject={selectedEmail.content.subject}
        emailTemplateHtml={selectedEmail.content.emailTemplateHtml}
        letter={selectedEmail.content.letter}
        toEmail={recipient.email}
      />
    </>
  );
};

export default ExampleEmailView;
