interface Props {
  children: React.ReactNode
}

function Background(props: Props) {
  return <div className="bg-darkPurple h-screen">{props.children}</div>
}

export default Background
