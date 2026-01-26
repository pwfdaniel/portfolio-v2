"use client";

import { mailchimp } from "@/resources";
import {
  Background,
  Button,
  Column,
  Heading,
  Input,
  opacity,
  Row,
  SpacingToken,
  Text,
  Textarea,
} from "@once-ui-system/core";
import { useState } from "react";

interface ContactFormProps extends React.ComponentProps<typeof Column> {}

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactForm({ ...flex }: ContactFormProps) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string>("");

  const validate = (field?: keyof FormState): boolean => {
    const nextErrors: Partial<FormState> = { ...errors };

    const check = (key: keyof FormState, value: string) => {
      if (key === "name") {
        nextErrors.name =
          value.trim().length === 0 ? "Name is required" : undefined;
      }
      if (key === "email") {
        if (!value) nextErrors.email = "Email is required";
        else if (!/^([^\s@]+)@([^\s@]+)\.[^\s@]+$/.test(value))
          nextErrors.email = "Invalid email";
        else nextErrors.email = undefined;
      }
      if (key === "message") {
        nextErrors.message =
          value.trim().length < 10
            ? "Message must be at least 10 characters"
            : undefined;
      }
    };

    if (field) check(field, form[field]);
    else
      (Object.keys(form) as (keyof FormState)[]).forEach((k) =>
        check(k, form[k]),
      );

    setErrors(nextErrors);
    return Object.values(nextErrors).every((v) => !v);
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    validate(key);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setServerMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setStatus("success");
      setServerMessage("Message sent successfully.");
      setForm(initialState);
    } catch (err: any) {
      setStatus("error");
      setServerMessage(err.message || "Unexpected error");
    }
  };

  const disabled = status === "submitting";

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          Contact Me
        </Heading>
        <Text
          wrap="balance"
          marginBottom="l"
          variant="body-default-l"
          onBackground="neutral-weak"
        >
          Got a question or just want to say hi? <br />
          Drop a message below and let's chat!
        </Text>
      </Column>
      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Column fillWidth maxWidth={24} gap="12">
          <Input
            id="contact-name"
            name="name"
            placeholder="Name"
            value={form.name}
            required
            onChange={(e) => update("name", e.target.value)}
            errorMessage={errors.name}
          />
          <Input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            required
            onChange={(e) => update("email", e.target.value)}
            errorMessage={errors.email}
          />
          <Textarea
            id="contact-message"
            name="message"
            placeholder="Message"
            value={form.message}
            required
            rows={5}
            onChange={(e: any) => update("message", e.target.value)}
            errorMessage={errors.message}
          />
          {serverMessage && (
            <Text
              onBackground={status === "error" ? "danger-weak" : "success-weak"}
            >
              {serverMessage}
            </Text>
          )}
          <Row height="48" vertical="center">
            <Button type="submit" size="m" fillWidth disabled={disabled}>
              {status === "submitting" ? "Sending..." : "Send Message"}
            </Button>
          </Row>
        </Column>
      </form>
    </Column>
  );
}
