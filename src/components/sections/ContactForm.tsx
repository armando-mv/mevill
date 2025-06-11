
"use client";

import { useActionState } from "react"; // Changed from "react-dom" and useFormState
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { type ContactFormState, submitContactForm } from "@/app/contact/actions";
import { contactFormSchema } from "@/app/contact/schema";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import AnimatedSection from "../layout/AnimatedSection";

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  status: "idle",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState); // Changed from useFormState
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.status === "success") {
      toast({
        title: "Success!",
        description: state.message,
      });
      form.reset(); // Reset form fields on success
    } else if (state.status === "error" && state.message && !state.errors) {
       toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast, form]);

  return (
    <AnimatedSection>
      <form action={formAction} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-foreground">Full Name</Label>
          <Input
            id="name"
            type="text"
            {...form.register("name")}
            className="mt-1 bg-white"
            aria-invalid={state.errors?.name ? "true" : "false"}
          />
          {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground">Email Address</Label>
          <Input
            id="email"
            type="email"
            {...form.register("email")}
            className="mt-1 bg-white"
            aria-invalid={state.errors?.email ? "true" : "false"}
          />
          {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
        </div>

        <div>
          <Label htmlFor="subject" className="text-foreground">Subject</Label>
          <Input
            id="subject"
            type="text"
            {...form.register("subject")}
            className="mt-1 bg-white"
            aria-invalid={state.errors?.subject ? "true" : "false"}
          />
          {state.errors?.subject && <p className="text-sm text-destructive mt-1">{state.errors.subject[0]}</p>}
        </div>

        <div>
          <Label htmlFor="message" className="text-foreground">Message</Label>
          <Textarea
            id="message"
            {...form.register("message")}
            rows={5}
            className="mt-1 bg-white"
            aria-invalid={state.errors?.message ? "true" : "false"}
          />
          {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
        </div>
        
        <SubmitButton />
      </form>
    </AnimatedSection>
  );
}
