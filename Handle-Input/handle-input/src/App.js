import './App.css';
import {useState} from 'react'

function App() {


  // const [state, setState] = useState({
  //   skills: [
  //     { 
  //       skill: "JavaScript",
  //       level: 4 
  //     }
  //   ],
  //   skill: '',
  //   level: 3
    
  //  })


  // made two states
  const [skills, setSkills] = useState(
    [
      { 

      }
    ])


  const [newSkill, setNewSkill] = useState(
    {
      skill: '',
      level: 3
    }
  )




  const addSkill = (e) => {


    // prevent page refresh
    e.preventDefault()


    
    // adding newSkill to skills list
    setSkills([
      ...skills,
      newSkill
    ])

    console.log(skills)

    // reset the new skill saved to empty
    setNewSkill({skill: '', level:3})
  };

  // this will set the state of the skill whenever a user enters words in that input field
  const handleChange = (e) => {

    // setSkills({...newSkill, 
    //   [e.target.name]: e.target.value
    // })

    setNewSkill({
      ...newSkill,
      [e.target.name]: e.target.value
  
    })

    console.log(e.target.name)
    console.log(e.target.value)
    console.log('Handle change ran')
  }

  return (
    <section>
    <h2>Dev Skills</h2>
    <hr />
      {skills.map(s => (
        <article>
          <div>{s.skill}</div>
          <div>{s.level}</div>
        </article>
      ))}
      <hr />

      {/* Adding event listener with add skil */}
      <form onSubmit={addSkill}>
           <label>
             <span>SKILL</span>
             <input name='skill' value={newSkill.skill}  /*Event Handler*/ onChange={handleChange}/>
           </label>
           <label>
             <span>LEVEL</span>
             <select name='level' value={newSkill.level}  /*Event Handler*/ onChange={handleChange}>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
             </select>
           </label>
           <button type='submit'>ADD SKILL</button>
         </form>

    </section>
  );
}

export default App;
