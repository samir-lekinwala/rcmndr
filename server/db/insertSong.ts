import db from './connection'
import { AddSongWithUserId } from '../../types/Song'

export async function insertSong(song: AddSongWithUserId) {
  // console.log('db!')
  // return song
  await db('songs').insert({
    user_id: song.userId,
    title: song.title,
    artist: song.artist,
    genre: song.genre,
    link: song.link,
    comments: song.comments,
    is_banned: 0,
  })
  // .onConflict(['user_id', 'title', 'artist', 'genre'])
  // .merge()
}
