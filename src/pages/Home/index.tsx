import React from 'react';
import Header from '../../components/Header';
import CadastroContent from '../../components/CadastroContent';
import VideoList from '../../components/VideoList';

const Home: React.FC = () => (
  <>
    <Header />
    <main>
      <VideoList />
    </main>
  </>
);

export default Home;
