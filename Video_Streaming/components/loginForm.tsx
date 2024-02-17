"use client";

import { FC, useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "@/lib/validation/loginValidation";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface loginFormProps {}

const LoginForm: FC<loginFormProps> = ({}) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_LOGIN_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        if (response.status === 400) {
          toast.error(
            "The username does not exist"
          );
        } else if (response.status === 404) {
          toast.error("Invalid password")
        } else {
          toast.error(
            "There was an error signing you in. Please try again later."
          );
        }
        throw new Error("There was an error signing you in");
      }

      toast.success("Login successful, redirecting to home page...");

      setTimeout(() => {
        router.push("/videos");
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-fit space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="bobby1"
                  {...field}
                  className="bg-neutral-900"
                  required
                />
              </FormControl>
              <FormDescription>
                Enter the username you used to sign up with
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="*********"
                  {...field}
                  className="bg-neutral-900"
                  required
                />
              </FormControl>
              <FormDescription>
                This is the password used to sign up with the corresponding
                username
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="default"
          className="bg-neutral-200 text-black"
        >
          {submitting ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
