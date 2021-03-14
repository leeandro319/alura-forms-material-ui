import './App.css';
import { Container, Typography } from '@material-ui/core'

import FormulariosCadastro from './components/FormularioCadastro'

const App = () => {
  return (
    <Container component="article" maxWidth="sm">
      <Typography
        variant="h3"
        component="h1"
      >
        Formulário de Cadastro
      </Typography>
      <FormulariosCadastro />
    </Container>
  );
}

export default App;
