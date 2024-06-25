export default function productLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        <header
        style={
          {
            backgroundColor:"lightblue",
            padding:"1rem"
          }
        }
        >
          <h1>prodects Header</h1>
        </header>
          
          {children}
          
          <footer
        style={
          {
            backgroundColor:"red",
            padding:"1rem"
          }
        }
        >
          <h1>
           product  footer
          </h1>
        </footer>
          
      </>
    )
}