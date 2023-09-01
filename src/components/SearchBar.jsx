import { useState, useRef} from "react"

export default () => {
    let initialState = [
      {id: 0,
      name: 'Cait Yomorta',
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
      scores: [
        {
          date: '2018-02-08',
          score: 77
        },
        {
          date: '2018-04-22',
          score: 92
        },
        {
          date: '2018-09-15',
          score: 68
        }
      ]},
      {id: 1,
      name: 'Holly Baird',
      bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
      scores: [
        {
          date: '2018-12-14',
          score: 88
        },
        {
          date: '2019-01-09',
          score: 79
        },
        {
          date: '2019-02-23',
          score: 91
        },
        {
          date: '2019-03-01',
          score: 95
        }
      ]},
      {id: 2,
      name: 'Wes Mungia',
      bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
      scores: [
        {
          date: '2018-10-11',
          score: 62
        },
        {
          date: '2018-11-24',
          score: 74
        },
        {
          date: '2018-12-19',
          score: 85
        }
      ]}
    ]
    const [studentData, setStudentData] = useState(initialState)
    const [heading, setHeading] = useState('')
    const [student, setStudent] = useState()

    const nameRef = useRef()
    const dateRef = useRef()

    const findStudent = () => {
      let i = 0
      while(i < studentData.length){
        if(nameRef.current.value === studentData[i].name){
          setStudent(studentData[i])
          let v = 0
          while(v < studentData[i].scores.length){
            if(dateRef.current.value === studentData[i].scores[v].date){
              console.log(studentData[i].scores[v].date)
              return
            }
            v++
          }
          if(dateRef.current.value !== studentData[i].scores.date){
            console.log('Student Did Not Take Test on This Day')
          }
        }
        i++
      }  
    }

    // const fun = studentData.includes(nameRef.current.value)
    //   if(fun === false){
    //     console.log(fun)
    //     setHeading('No Student Matches Search')
    //   }
      

    const clearState = () => {
      setStudentData(initialState)
      setHeading('')
    }

    // const setStudent = () => {
    //   return (
    //     <Student student = {studentData} />
    //   )
    // }

  return (
    <div className="SearchBar">
        <input type = 'text' placeholder = 'Full Name' ref = {nameRef}/>
        <input type = 'date' ref = {dateRef}/>
        <input type = 'submit' value = {'Submit'} onClick={findStudent}/>
        <input type = 'reset' value = {'Reset'} onClick={clearState}/>
        <h1>{heading}</h1>
        {/* <Student student = {student}/> */}
    </div>
  )
}
