interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <header>
          <a href="http://localhost:3000/logout">Logout</a>
          <a href="http://localhost:3000/login">Login</a>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default Layout
