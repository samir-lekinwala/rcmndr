import * as z from 'zod'

export const songDraftSchema = z.object({
  title: z.string(),
  artist: z.string(),
  genre: z.string().nullable(),
  link: z.string().nullable(),
})

export const song = songDraftSchema.extend({
  id: z.string(),
})

export const addSongDraft = songDraftSchema.extend({
  comments: z.string().nullable(),
})

export const addSongWithUserId = addSongDraft.extend({
  userId: z.string(),
})

export type SongDraft = z.infer<typeof songDraftSchema>
export type Song = z.infer<typeof song>
export type AddSongDraft = z.infer<typeof addSongDraft>
export type AddSongWithUserId = z.infer<typeof addSongWithUserId>
