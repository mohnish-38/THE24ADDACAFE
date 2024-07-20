"use client";
import { useState } from "react";
import { Stepper, Button, Group, Center, rem } from "@mantine/core";
import { IconBook, IconConfetti, IconMessage2Heart, IconUserCheck } from "@tabler/icons-react";

export default function StepsToOrder() {
  return (
    <>
      <Stepper
        active={0}
        pl="xl"
        orientation="vertical"
        maw={rem('500px')}
      >
        <Stepper.Step label="Step 1: Browse Our Menu" description="Check out our menu online and decide what you'd like to order." icon={<IconBook style={{ width: rem(18), height: rem(18) }} />}>
        </Stepper.Step>
        <Stepper.Step label="Step 2: Send Us a Text" description="SMS/Whatsapp your order to our number: +91XXXXXXXX01. Include your name and address." icon={<IconMessage2Heart style={{ width: rem(18), height: rem(18) }} />}>
        </Stepper.Step>
        <Stepper.Step label="Step 3: Confirmation" description="You'll receive a confirmation text with your order details and estimated delivery time." icon={<IconConfetti style={{ width: rem(18), height: rem(18) }} />}>
        </Stepper.Step>
      </Stepper>
    </>
  );
}
