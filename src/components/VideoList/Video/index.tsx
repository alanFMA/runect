/* eslint-disable */
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';

interface YoutubeVideoCardProps {
  videoId: string;
  title: string;
  description: string;
}

export default function YouTubeVideoCard({
  videoId,
  title,
  description,
}: YoutubeVideoCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
