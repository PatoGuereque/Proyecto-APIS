import React from 'react';
import {
  Grid,
  CardContent,
  Typography,
  CardMedia,
  Avatar,
  Stack,
  IconButton,
} from '@mui/material';
import {
  Mail as MailIcon,
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
} from '@mui/icons-material';
import CardWithShadow from './CardWithShadow';
import { contributors } from './contributors';

const CardGrid = () => (
  <Grid
    container
    display="flex"
    direction="row"
    alignItems="center"
    justifyContent="center"
    rowSpacing={2}
    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    padding="20px"
  >
    {contributors.map(
      ({
        name,
        xs,
        sm,
        md,
        role,
        description,
        avatar,
        mail,
        twitter,
        github,
      }) => (
        <Grid item xs={xs} sm={sm} md={md} key={name}>
          <CardWithShadow init={3} hovered={10}>
            <CardMedia align="center">
              <Avatar
                alt={name}
                src={avatar}
                sx={{
                  mt: 2,
                  width: 100,
                  height: 100,
                }}
              />
            </CardMedia>
            <CardContent align="center">
              <Typography variant="h5" component="div">
                {name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {role}
              </Typography>
              <Typography variant="body2">{description}</Typography>

              <Stack direction="row" spacing={2} display="inline-flex">
                {mail && (
                  <IconButton
                    aria-label="delete"
                    size="large"
                    href={`mailto:${mail}`}
                  >
                    <MailIcon fontSize="inherit" />
                  </IconButton>
                )}
                {twitter && (
                  <IconButton
                    aria-label="delete"
                    size="large"
                    href={`https://twitter.com/${twitter}`}
                  >
                    <TwitterIcon fontSize="inherit" />
                  </IconButton>
                )}
                {github && (
                  <IconButton
                    aria-label="delete"
                    size="large"
                    href={`https://github.com/${github}`}
                  >
                    <GitHubIcon fontSize="inherit" />
                  </IconButton>
                )}
              </Stack>
            </CardContent>
          </CardWithShadow>
        </Grid>
      )
    )}
  </Grid>
);

export default CardGrid;
