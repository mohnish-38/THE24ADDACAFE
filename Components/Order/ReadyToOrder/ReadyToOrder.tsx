import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './ReadyToOrder.module.css';
import Link from 'next/link';
import { Icon12Hours, IconArrowRight } from '@tabler/icons-react';

export function ReadyToOrder() {
  return (
        <Container size='xl'>
      <div className={classes.inner}>
        <Title className={classes.title}>
        Ready to Order?
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Place your order now and enjoy your favorite Brew Haven delights in no time!
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component="a" href="/Menu" className={cx(classes.control, classes.secondaryControl)}>Order Now 
            <IconArrowRight/>
          </Button> 
        </div>
      </div>
      </Container>
    
  );
}