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
import { formSchema } from "@/lib/validation/uploadVideoValidation";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";

interface loginFormProps {}

const VideoUploadForm: FC<loginFormProps> = ({}) => {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const user_id = getCookie('user_id')
  const username = getCookie('username')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      video_title: "",
      file_name: "",
    },
  });

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);

    try {
      if (!selectedFile) {
        toast.error("Please add a valid file before submitting");
        return;
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response_java = await fetch(process.env.NEXT_PUBLIC_UPLOAD_URL!, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const video_data = {
        user_id,
        username,
        video_title: values['video_title'],
        video_link: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${user_id}/${String(selectedFile.name)}`
      }

      const response_mysql = await fetch(process.env.NEXT_PUBLIC_DB_URL!, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(video_data)
      });

      if (!response_java.ok || !response_mysql.ok) {
        toast.error("File could not be saved to the database. Please try again later.")
        throw new Error("There was an error signing you in");
      }

      toast.success("Video was successfully uploaded!");

      setTimeout(() => {
        router.refresh();
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
          name="video_title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Title</FormLabel>
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
          name="file_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video File</FormLabel>
              <FormControl>
                <Input
                  id="video"
                  type="file"
                  {...field}
                  className="w-full text-sm text-neutral-300 cursor-pointer bg-neutral-900 file:text-white"
                  onChange={handleFileChange}
                />
              </FormControl>
              <FormDescription>Select the MP4 file to upload</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="default"
          className="bg-neutral-200 text-black"
          disabled={submitting || !selectedFile}
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

export default VideoUploadForm;
