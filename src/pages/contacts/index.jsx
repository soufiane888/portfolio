import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Oval } from 'react-loader-spinner';

import { InputField, useStyles } from './styles/contacts';

const Contact = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const url = 'https://formspree.io/f/xzblzjpo';

  const handleOnSubmit = useCallback((e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);
    axios({
      method: 'post',
      url,
      data: new FormData(form),
    })
      .then((_) => {
        toast.success('Message envoyé avec succès');
        form.reset();
      })
      .catch((error) => {
        toast.error("Erreur d'envoie de message");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="div" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
          Prendre contact
          </Typography>
          <form onSubmit={handleOnSubmit}>
            <InputField
              fullWidth={true}
              label="Nom"
              variant="outlined"
              name="name"
              inputProps={{ className: classes.input }}
              required
            />
            <InputField
              fullWidth={true}
              label="Adresse mail"
              variant="outlined"
              name="email"
              inputProps={{ className: classes.input }}
              className={classes.field}
              required
            />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              name="message"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
              required
            />
            <Button
              type="submit"
              variant="outlined"
              fullWidth={true}
              endIcon={!loading && <Send />}
              className={classes.button}
              disabled={loading}
            >
              {loading ? (
                <Oval
                  height={25}
                  width={25}
                  color="tomato"
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#250220"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                'Envoyer'
              )}
            </Button>
          </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
