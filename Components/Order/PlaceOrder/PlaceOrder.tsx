"use client";
import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Space,
  Container,
  Stepper,
  Center,
} from "@mantine/core";
// import image from './image.svg';
import classes from "./PlaceOrder.module.css";
import StepsToOrder from "./StepperOrderPage";

export function PlaceOrder() {
  return (
    <Center>
    <Container size="xl">
          <Title className={classes.title} mt='xl'>How to Place Your Order via SMS</Title>
          <Space h="sm" />
          <Text fz="md" c="dimmed">
          Follow these easy steps and enjoy your Brew Haven favorites in no time.
          </Text>
      <Space h="xl" />
      <Center>
      <StepsToOrder />
      </Center>
    </Container>
    </Center>
  );
}
