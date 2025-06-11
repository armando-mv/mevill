
"use server";

import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Simulate sending an email or saving to a database
  console.log("Contact form submission received:");
  console.log("Name:", validatedFields.data.name);
  console.log("Email:", validatedFields.data.email);
  console.log("Subject:", validatedFields.data.subject);
  console.log("Message:", validatedFields.data.message);

  // In a real application, you would integrate with an email service (e.g., SendGrid, Resend)
  // or save the inquiry to your database here.

  // For now, we'll just return a success message.
  return {
    message: "Thank you for your message! We'll get back to you soon.",
    status: "success",
  };
}
