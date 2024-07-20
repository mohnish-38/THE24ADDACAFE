'use client'
import { Overlay, Container, Title, Button, Text, Paper, Grid, rem } from '@mantine/core';
import classes from './welcomePagewithImagebg.module.css';
import { StatsGroup } from '../StatGroup/StatsGroup';
import { IconArrowRight } from '@tabler/icons-react';

export default function WelcomePagewithImagebg() {
  return (
    <div className={classes.hero} style={{backgroundColor:'#671F03'}}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={0.8}
        zIndex={0}    
        style={{backgroundColor:'#671F03'}}    
      />
      <Container className={classes.container} size="xl">
        <Title className={classes.title}>Order Your Favorite Brew via SMS</Title>
        <Text className={classes.description} size="xl" mt="xl">
        Enjoy the convenience of placing your order with just a text message. Follow these simple steps to get your delightful brews and yummy treats delivered.
        </Text>
        <Button
      variant="gradient"
      gradient={{ from: 'rgba(158, 0, 0, 1)', to: 'orange', deg: 165 }}
      size="xl"
      radius='lg'
      className={classes.control}
      component="a" href="/Menu"
    >
      Order Now
      <IconArrowRight  style={{ width: rem(40), height: rem(30), paddingLeft:'10px' }} />
    </Button>
      </Container>
    </div>
  );
}