import { useQuery } from "@apollo/client/react"
import { graphql } from "gql.tada"

const appQuery = graphql(`
  query appQuery {
    book (title: "1") {
      title
      year
    }
  }
  `)


function App() {
  const result = useQuery(appQuery)

  return (
    <>
      <p>{result.data?.book?.title}</p>
    </>
  )
}

export default App
