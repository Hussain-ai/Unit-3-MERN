import React from 'react'
import Kitchen from '../Kitchen/Kitchen'
import LivingRoom from '../LivingRoom/LivingRoom'
import Bedroom from '../Bedroom/Bedroom'
import Bath from '../Bath/Bath'
function FloorPlan() {
  return (
    <div class='floorplan'>

        <LivingRoom />
        <Kitchen />
        <Bedroom bedNum={1} />
        <Bath size={'Half'}/>
        <Bedroom bedNum={2}/>
        <Bath size={'Full'}/>
        <Bedroom bedNum={3}/>

    </div>
  )
}

export default FloorPlan