/* eslint-disable */
import React from 'react';
import YouTubeVideoCard from './Video'; // Certifique-se de que o nome do arquivo está correto
import Titulo from './styles';
import Grid from '@mui/material/Grid'; // Importe o componente Grid se for usá-lo

function VideoList() {
  // Array de vídeos com objetos contendo id, título e descrição
  const videos = [
    {
      id: '35C-Juiiqis',
      title: 'Apologética - Aula 01',
      description: 'Fundamentos da Apologética / Catolicismo Romano',
    },
  ];

  return (
    <>
      <Titulo>Aulas Gravadas</Titulo>
      <Grid container spacing={2}>
        {/* Mapeando o array de vídeos */}
        {videos.map(video => (
          <Grid item key={video.id} xs={12} sm={6} md={4} lg={3}>
            {/* Renderizando o componente YouTubeVideoCard para cada vídeo */}
            <YouTubeVideoCard
              videoId={video.id}
              title={video.title}
              description={video.description}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default VideoList;
