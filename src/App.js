import './App.css';
import { Container, Typography } from '@material-ui/core'

import FormulariosCadastro from './components/FormularioCadastro'

const App = () => {

  return (
    <Container component="article" maxWidth="sm" >
      <Typography
        variant="h3"
        component="h1"
      >
        Formulário de Cadastro
      </Typography>
      <FormulariosCadastro aoEnviar={aoEnviarForm}  validarCPF={validarCPF}/>
    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos."}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
