import { Container } from '@mui/material';
import React from 'react';

const Info: React.FC = () => (
  <>
    <main>
      <Container sx={{ marginTop: '100px' }}>
        <h2>
          <b>Solicitação de Eliminação de Dados</b>
        </h2>
        <p>
          <strong>Runect APP</strong>
        </p>
        <br />
        <p>
          Caso queira solicitar a eliminação dos seus dados no aplicativo Runect
          APP, entre em contato conosco por meio dos canais abaixo:
        </p>
        <br />
        <p>
          E-mail:&nbsp;
          <a href="mailto:contatorunect@gmail.com?subject=Solicitação%20de%20Eliminação%20de%20Dados&body=Solicito%20a%20eliminação%20dos%20meus%20dados%0ANome%20completo:%20%5Bnome%20completo%5D%0AEmail%20cadastrado:%20%5Bemail%20cadastrado%5D&">
            contatorunect@gmail.com
          </a>
        </p>
        <br />
        <p>Telefone: +55 (69) 99276-0351 </p>
        <br />
        Após o pedido de eliminação de dados, comprometemo-nos a concluir o
        processo no prazo de <strong>30 (trinta) dias</strong>, assegurando que
        os dados sejam eliminados ou anonimizados conforme requerido.
      </Container>
    </main>
  </>
);

export default Info;
