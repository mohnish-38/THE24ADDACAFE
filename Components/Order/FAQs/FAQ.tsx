'use client'
import { Image, Accordion, Grid, Container, Title } from '@mantine/core';
import image from '../../../public/image.b0c2306b.svg';
import classes from './FAQ.module.css';

export function FAQ() {
  return (
    <div className={classes.wrapper}>
      <Container size="xl">
        <Grid id="faq-grid" gutter={50}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src={image.src} alt="Frequently Asked Questions" />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>

            <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>What is the SMS number to place orders?</Accordion.Control>
                <Accordion.Panel>You can place your orders by texting +91XXXXXXXX01.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="another-account">
                <Accordion.Control>What information should I include in my SMS order?</Accordion.Control>
                <Accordion.Panel>Please include your full name, address, and the items you wish to order.</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item className={classes.item} value="newsletter">
                <Accordion.Control>How will I know if my order is confirmed?</Accordion.Control>
                <Accordion.Panel>You will receive a confirmation text with your order details and estimated delivery time.</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}