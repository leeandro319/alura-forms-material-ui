import React, { useState } from "react";

import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

const FormulariosCadastro = () => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocao, setPromocao] = useState("");
  const [novidades, setNovidades] = useState("");

  function submitForm(event) {
    event.preventDefault();
    console.log(nome);
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <TextField
          value={nome}
          onChange={event => {
            let tempNome = event.target.value;
            if(tempNome.length  >= 3){
                tempNome = tempNome.substr(0,3)
            }  
            setNome(tempNome)}}
          id="nome"
          label="Nome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
        value={sobrenome}
        onChange={event => setSobrenome(event.target.value)}
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
        value={cpf}
        onChange={event => setCpf(event.target.value)}
          id="cpf"
          label="CPF"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <FormControlLabel
          label="Promocao"
          control={<Switch value={promocao}
          onChange={event => setPromocao(event.target.value)} defaultChecked color="primary" />}
        />
        <FormControlLabel
          label="Novidades"
          control={<Switch value={novidades}
          onChange={event => setNovidades(event.target.value)} defaultChecked color="primary" />}
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </>
  );
};

export default FormulariosCadastro;
