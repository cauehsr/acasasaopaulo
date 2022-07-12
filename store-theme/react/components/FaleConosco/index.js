import React, { useState } from "react";

const EntreContato = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [mensagem, setMensagem] = useState('');

  const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          nome: nome,
          email: email,
          celular: celular,
          mensagem: mensagem
      })
  };

  const requestSubmit = async () => {
      await fetch(`/api/dataentities/EC/documents`, request)
          .then((res) => res.json())
          .then((data) => {
              setNome('')
              setEmail('')
              setCelular('')
              setMensagem('')
              console.log(data)
          })
  }

  return (
      <>

              <div className="vtex-institucional-content">
                  <h1 className="vtex-institucional-content_title center">Fale Conosco</h1>
                  <div className="vtex-institucional-form_container">
                      <form onSubmit={(e) => {
                          requestSubmit();
                          e.preventDefault();
                      }}>

                        <label>Nome</label>
                        <input type="text" id="ContatoNome" placeholder="Digite seu nome" value={nome} required onChange={(e) => { setNome(e.target.value) }} />

                        <label>E-mail</label>
                        <input type="email" id="ContatoEmail" placeholder="Digite seu e-mail" value={email} required onChange={(e) => { setEmail(e.target.value) }} />

                        <label>Telefone</label>
                        <input type="tel" placeholder="Digite seu número" maxLength="12" value={celular} required onChange={(e) => { setCelular(e.target.value) }} />

                        <label>Deixe sua Mensagem ?</label>
                        <textarea placeholder="Digite sua mensagem" value={mensagem} required onChange={(e) => { setMensagem(e.target.value) }}></textarea>

                        <button type="submit">Enviar</button>

                      </form>
                  </div>
          </div>
      </>
  );
}

export default EntreContato;