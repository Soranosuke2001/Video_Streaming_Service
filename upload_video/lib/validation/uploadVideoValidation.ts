import { z } from "zod";

export const formSchema = z.object({
  video_title: z.string().min(2, {
    message: "Title must be present",
  }),
  file_name: z.any(),
});
