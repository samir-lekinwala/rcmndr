import * as z from 'zod'

export const songDraftSchema = z.object({
  title: z.string(),
  artist: z.string(),
  genre: z.string().nullable(),
  link: z.string().nullable(),
  comments: z.string().nullable(),
  is_banned: z.boolean(),
})

export const song = songDraftSchema.extend({
  id: z.string(),
})

export type SongDraft = z.infer<typeof songDraftSchema>
export type Song = z.infer<typeof song>
