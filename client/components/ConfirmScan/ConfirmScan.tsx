import Button from '../UI/Button/Button'

interface Props {
  name: string
  handleFollow: () => void
}

function ConfirmScan(props: Props) {
  return (
    <div className="flex flex-col pl-4 h-screen items-center justify-center space-y-4">
      <p>Scan is successful</p>
      <p>
        Would you like to follow
        <strong className="bg-primary transform w-1/2  skew-x-12">
          {' '}
          {props.name}{' '}
        </strong>
        ?
      </p>

      <div className="space-x-4">
        <Button onClick={props.handleFollow}>Follow</Button>
        <Button className="bg-white text-primary">Cancel</Button>
      </div>
    </div>
  )
}

export default ConfirmScan
