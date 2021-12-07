type PersonListProps = {
  persons : {first:string,last:string}[]
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