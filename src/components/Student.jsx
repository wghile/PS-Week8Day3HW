import Score from "./Score"

export default ({students}) => {

  // const found = students.find((student) => {
  //   if(student.name === name){
  //     return (
  //       <div>
  //         <p key={student.id}>{student.name}</p>
  //         <p key={student.name}>{student.bio}</p>
  //         <Score scores = {student.scores}/>
  //       </div>
  //     )
  //   }else{
  //     console.log('No Student Matches Search')
  //   }
  // })
  
  // console.log(found)

  return (
    <div className="Student">
      {/* <p key={student.id}>{student.name}</p>
      <p key={student.name}>{student.bio}</p>
      {console.log(student.scores)}
      <Score scores = {student.scores}/>  */}
      {students.map((student) => {
        return (
        <div>
          <p key={student.id}>{student.name}</p>
          <p key={student.name}>{student.bio}</p>
          <Score scores = {student.scores}/>
        </div>
        )        
      })}
    </div>
  )
}
