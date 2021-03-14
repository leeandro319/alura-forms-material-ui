import React, { useState } from "react";

import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";



const FormulariosCadastro = ({aoEnviar, validarCPF}) => {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocao, setPromocao] = useState(true);
  const [novidades, setNovidades] = useState(false);

  const [erros, setErros] = useState({
      cpf:{
          valido: true,
          texto: "",
      }});

  return (
    <>
      <form onSubmit={(event)=>{
          event.preventDefault();
          aoEnviar({nome, sobrenome, cpf, promocao, novidades})
      }}> 
        <TextField
          value={nome}
          onChange={event => {
            let tempNome = event.target.value;
           /*  if(tempNome.length  >= 3){
                tempNome = tempNome.substr(0,3)
            }   */
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
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={(event)=>{
          const ehValido = validarCPF(cpf);
          setErros({cpf:ehValido})
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
        <FormControlLabel
          label="Promocao"
          control={<Switch value={promocao}
          onChange={event => setPromocao(event.target.value)} defaultChecked={promocao} color="primary" />}
        />
        <FormControlLabel
          label="Novidades"
          control={<Switch value={novidades}
          onChange={event => setNovidades(event.target.value)} defaultChecked={novidades} color="primary" />}
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </>
  );
};

export default FormulariosCadastro;
