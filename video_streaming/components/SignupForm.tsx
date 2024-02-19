"use client"

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
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";

interface signupFormProps {}

const SignupForm: FC<signupFormProps> = ({}) => {
  const router = useRouter()
  const [submitting, setSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setSubmitting(true)

      const response = await fetch(process.env.NEXT_PUBLIC_SIGNUP_URL!, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (!response.ok) {
        if (response.status === 400) {
          toast.error("The username already exists. Please choose another one.")
        } else {
          toast.error("There was an error signing you up. Please try again later.")
        }
        throw new Error("There was an error signing you up")
      }

      toast.success("Signup successful, redirecting to login page...")

      setTimeout(() => {
        router.push("/auth/login")
      }, 2000);
    } catch (error) {
      console.log(error)
    } finally {
      setSubmitting(false)
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
                <Input placeholder="bobby" {...field} className="bg-neutral-900" required />
              </FormControl>
              <FormDescription>
                Create a username to identify yourself
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
                <Input type="password" placeholder="*********" {...field} className="bg-neutral-900" required />
              </FormControl>
              <FormDescription>
                Set a strong password, we recommend 1 uppercase, 1 number, and 1 symbol
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="default" className="bg-neutral-200 text-black" disabled={submitting}>
          {submitting ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
