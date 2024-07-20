"use client"
import { useState } from 'react';
import { Container, Group, Burger, Button,Image, Avatar, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './HeaderSimple.module.css';
import logoImg from '../../public/cafe.png'
import Link from 'next/link';


export function HeaderSimple({ opened, toggle }) {

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
      <Group gap={5} visibleFrom="xs">
          <Link className={classes.link} href='/'>
          Home
          </Link>
          <Link className={classes.link} href='/Menu'>
          Menu
          </Link>
          <Link className={classes.link} href='/Order'>
          Order
          </Link>
        </Group>
        <MantineLogo size={28} />
        <Button visibleFrom="xs">Contact Us</Button> 
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}