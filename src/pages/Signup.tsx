
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DesafiogramImage from '../assets/DesafiogramImage.png';
import { useState } from 'react';
import nodeServerUrl from '../common/nodeServerUrl';
import {
  useNavigate,
} from 'react-router-dom';

const Signup = () => {

  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [biography, setBiography] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('clicked form');
    console.log({
      email,
      name,
      username,
      biography,
      password,
    });

    try {
      const response = await fetch(`${nodeServerUrl}/usuarios/signup`, {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          nombre: name,
          username,
          bio: biography,
          password,
        })
      })
      const data = await response.json();
      navigate('/login')
      console.log(data);
    } catch (error) {
      console.log(error);
    }




  };


  return (
    <>
      <Grid container component="main" sx={{ height: '80vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{

            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >

          <Box sx={{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <img src={DesafiogramImage} alt="Desafiogram" />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
            <Typography variant="body1">
              Registrate para que veas el clon de Instagram
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
                id="name"
                label="Nombre"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(event) => setName(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="usuario"
                label="Nombre de usuario"
                name="usuario"
                autoComplete="usuario"
                autoFocus
                onChange={(event) => setUsername(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="bio"
                label="Biografía"
                name="bio"
                autoComplete="bio"
                autoFocus
                onChange={(event) => setBiography(event.target.value)}
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
                Sign Up
              </Button>
              <Grid justifyContent='center' container>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Ya tienes cuenta? Login"}
                  </Link>
                </Grid>
              </Grid>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
export default Signup;