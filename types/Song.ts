import * as z from 'zod'

export const songDraft = z.object({
  title: z.string(),
  artist: z.string(),
  genre: z.string(),
  link: z.string(),
})

export const song = songDraft.extend({
  id: z.string(),
})

export type SongDraft = z.infer<typeof songDraft>
export type Song = z.infer<typeof song>
