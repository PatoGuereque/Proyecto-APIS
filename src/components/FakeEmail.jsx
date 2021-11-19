/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Popover,
  Typography,
} from '@mui/material';
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';

const FakeEmail = ({
  fromName,
  fromEmail,
  toEmail,
  subject,
  letter,
  emailTemplateHtml,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 1000, flexGrow: 1, mb: 5 }}>
      <Grid container spacing={2}>
        <Grid
          item
          sx={{
            mt: '10px',
          }}
        >
          <Avatar>{letter}</Avatar>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography component="span" variant="subtitle1">
                {fromName}
              </Typography>
              <Typography
                variant="body2"
                component="span"
                color="text.secondary"
              >
                {` <${fromEmail}>`}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: '-5px',
                }}
              >
                to me
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={handleClick}
                >
                  <ArrowDropDownIcon fontSize="inherit" />
                </IconButton>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              mt: '20px',
            }}
          >
            <Typography variant="body2" component="div" color="text.secondary">
              8:18 PM
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        elevation={2}
      >
        <Box
          sx={{
            padding: '20px',
          }}
        >
          <div>
            <Typography
              component="span"
              sx={{
                width: '80px',
                display: 'inline-block',
                pr: '10px',
              }}
              textAlign="right"
              variant="body2"
              color="text.secondary"
            >
              to:
            </Typography>
            <Typography variant="body2" component="span">
              {toEmail}
            </Typography>
          </div>
          <div>
            <Typography
              component="span"
              sx={{
                width: '80px',
                display: 'inline-block',
                pr: '10px',
              }}
              textAlign="right"
              variant="body2"
              color="text.secondary"
            >
              from:
            </Typography>
            <Typography variant="body2" component="span">
              {fromEmail}
            </Typography>
          </div>
          <div>
            <Typography
              component="span"
              sx={{
                width: '80px',
                display: 'inline-block',
                pr: '10px',
              }}
              textAlign="right"
              variant="body2"
              color="text.secondary"
            >
              date:
            </Typography>
            <Typography variant="body2" component="span">
              {new Date().toString()}
            </Typography>
          </div>
          <div>
            <Typography
              component="span"
              sx={{
                width: '80px',
                display: 'inline-block',
                pr: '10px',
              }}
              textAlign="right"
              variant="body2"
              color="text.secondary"
            >
              subject:
            </Typography>
            <Typography variant="body2" component="span">
              {subject}
            </Typography>
          </div>
        </Box>
      </Popover>

      <div dangerouslySetInnerHTML={{ __html: emailTemplateHtml }} />
    </Paper>
  );
};

FakeEmail.propTypes = {
  fromName: PropTypes.string,
  fromEmail: PropTypes.string,
  toEmail: PropTypes.string,
  subject: PropTypes.string,
  letter: PropTypes.string,
  emailTemplateHtml: PropTypes.string,
};

export default FakeEmail;
