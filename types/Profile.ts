export interface Profile extends ProfileDraft {
  auth0Id: string
}

export interface ProfileDraft {
  firstName: string
  lastName: string
  nickname: string
  public: boolean
}
