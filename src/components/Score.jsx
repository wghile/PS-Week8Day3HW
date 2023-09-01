export default ({scores}) => {

  // const findDate = () => {
  //   let i = 0
  //   while(i < score.length){
  //       if(date === score[i].date){
  //           console.log(score[i].date)
  //           return (
  //             <div className="Score">
  //               <p key='date'> Date: {score[i].date}</p>
  //               <p key='score'> Score: {score[i].score}%</p>
  //             </div>
  //           )
  //       }else{
  //         console.log('did not take test that day')
  //         return (
  //           <div className="Score">
  //             <p key='date'> Date: N/A</p>
  //             <p key='score'> Score: N/A</p>
  //           </div>
  //         )
  //       }
  //       i++
  //   } 
  // }

  // findDate()

  // const wrongDate = () => {
  //   return (
  //     <div className="Score">
  //       <p key='date'> Date: N/A</p>
  //       <p key='score'> Score: N/A</p>
  //     </div>
  //   )
  // }

  // return date  ? findDate() : wrongDate()
  
  return (
    <div className="Score">
      {/* <p key='date'> Date: {scores.date}</p>
      <p key='score'> Score: {scores.score}%</p> */}
      {scores.map((score) => {
        return (
          <div>
            <p key={score.date}>Date: {score.date}</p>
            <p key={score.score}>Score: {score.score}%</p>
          </div>
        )
      })}
    </div>
  )
}
