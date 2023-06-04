import { Profile, ProfileDraft } from '../../types/Profile'
import Button from './UI/Button/Button'
import TextBox from './UI/TextBox/TextBox'

interface Props {
  profile?: Profile
  handleSubmit: (profile: Profile | ProfileDraft) => void
}

function Form(props: Props) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      auth0Id: string
      firstName: { value: string }
      lastName: { value: string }
      nickname: { value: string }
    }

    const form: Profile | ProfileDraft = {
      auth0Id: props.profile?.auth0Id,
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      nickname: target.nickname.value,
    }

    props.handleSubmit(form)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <div>
          <label htmlFor="first-name">First Name</label>
          <TextBox
            type="text"
            name="firstName"
            id="first-name"
            required
            defaultValue={props.profile?.firstName}
          />
          <label htmlFor="last-name">Last Name</label>
          <TextBox
            type="text"
            name="lastName"
            id="last-name"
            required
            defaultValue={props.profile?.lastName}
          />
          <label htmlFor="nickname">Nickname</label>
          <TextBox
            type="text"
            name="nickname"
            id="nickname"
            required
            defaultValue={props.profile?.nickname}
          />
        </div>
        <div className="mx-auto">
          <Button>Save</Button>
        </div>
      </form>
    </div>
  )
}

export default Form
