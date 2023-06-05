import Button from '../UI/Button/Button'

interface Props {
  name: string
}

function ConfirmScan(props: Props) {
  async function handleFollow() {}

  return (
    <div className="flex flex-col pl-4 h-screen items-center justify-center space-y-4">
      <p>
        Would you like to follow <b>{props.name}</b>
      </p>
      <div className="space-x-4">
        <Button onClick={handleFollow}>Follow</Button>
        <Button className="bg-white text-primary">Cancel</Button>
      </div>
    </div>
  )
}

export default ConfirmScan
