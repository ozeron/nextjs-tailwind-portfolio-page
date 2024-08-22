"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { SIGNUP_URL } from "@/constants";

export function ContactForm() {
  return (
    <section className="px-8 pb-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4 text-yellow-800">
          Давай працювати разом!
        </Typography>
        <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full md:w-64 bg-yellow-800" color="gray" size="lg">
              Записатися
            </Button>
          </a>
      </div>
    </section>
  );
}

export default ContactForm;
