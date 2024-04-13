
import { Button } from '@ui/Button'

function App() {

  return (
    <>
      <Button label='Register' type='button' />
      <label> checkbox</label> 
      <input  type='checkbox'/>
      <input type='radio'/>
      <input type='text' placeholder='name'/>
      <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select> 


    </>
  )
}

export default App
