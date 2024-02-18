import { z } from "zod";

export const formSchema = z.object({
  video_title: z.string().min(2, {
    message: "Title must be present",
  }),
  file_name: z.any()
    // .refine((file) => file?.size <= process.env.NEXT_PUBLIC_MAX_FILE_SIZE!, 'Max file size is 3GB.')
    // .refine((file) => process.env.NEXT_PUBLIC_FILE_TYPES!.includes(file?.type), `Only MP4 files are supported.`)
});
