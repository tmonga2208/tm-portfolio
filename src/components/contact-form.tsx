"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      emailjs.send('service_zfltwni', 'template_fzxy8bz', formData, 'DIHlvXTN3hOjikORT')
      .then((result) => {
          alert("Message Sent Successfully"); 
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="text-gray-500 dark:text-gray-400">Please fill in the form below to get in touch.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            className="min-h-[100px]"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
              <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}