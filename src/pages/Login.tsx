import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import nodeServerUrl from '../common/nodeServerUrl';
import {
  useNavigate,
} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Login = () => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate()

  const { setAuthToken } = useAuth()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('clicked form');
    console.log({
      email,
      password,
    });


    try {
      const response = await fetch(`${nodeServerUrl}/usuarios/login`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password,
        })
      })
      const data = await response.json();
      navigate('/explore')
      setAuthToken(data?.token)
      console.log(data);
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <Grid container component="main" sx={{ justifyContent: 'center', marginTop: 4 }}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={5} component={Paper} >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="div" variant="h4">
            Desafiogram
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid justifyContent='center' container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"No tienes cuenta? Signup"}
                </Link>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
export default Login