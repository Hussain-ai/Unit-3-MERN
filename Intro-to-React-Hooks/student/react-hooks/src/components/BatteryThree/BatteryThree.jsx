import React, {useContext} from 'react'

// Access data passed from battery one
import { UserContext } from '../../App'

function BatteryThree() {
    
    const user = useContext(UserContext)

    console.log(user)

  return (
    <div>BatteryThree


    </div>
  )
}

export default BatteryThree