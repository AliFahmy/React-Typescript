import { Name } from "./Person.types"

type PersonListProps = {
  persons : Name[]
}
export const PersonList = (props:PersonListProps) => {
  return (
    <div>
      {
        props.persons.map(person=>{
          return(
            <h2 key={person.first}>{person.first} {person.last}</h2>
          )
        })
      }
    </div>
  )
}