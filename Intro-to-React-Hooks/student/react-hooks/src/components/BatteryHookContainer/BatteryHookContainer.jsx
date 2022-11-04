import React, {useState, useEffect} from 'react'

import Battery from '../Battery/Battery'

// import {register, unregister} from '../../utils/battery'

function BatteryHookContainer() {

    //   // useState always returns an array of two elements
    //   const [level, setLevel] = useState(.90);

    const [batteryData, setBatteryData] = useState({
        level: .55,
        charging: true
    })

    /*
    Use effect functions that calls many functions

    const fn = () => {
        console.log('Yoooo')
    }

    useEffect(() => {
        fn()
    })
    */



    // const updateBattery = () => {
    //     setBatteryData({level, charging})
    // }


    // useEffect(() => {
    //     register(updateBattery)
    //     console.log('useEffect was called');

    //     return () => {
    //         unregister(updateBattery)
    //     }

    // }, []) 


    // add triggers in the (mounts) + (changes) part of componenet lifecycle
    // Adding the [] add the end will add trigger only at the (mount)
    // [] called dependency list so its waiing for this list of variable to change
    useEffect(() => {
        console.log('Use effect run!!')
    }, [batteryData.level]) 
    


    //   // useState always returns an array of two elements
    //   const [level, setLevel] = useState(.90);


    // take contents from the original data the update the level
    // using the ... (spread operator)
    const chargeBattery = () => {
        setBatteryData({
            ...batteryData,
            level: (batteryData.level + 0.01)%1.01}
        )
            
    }


  return (
    <>    
        <Battery charging={batteryData.charging} level={batteryData.level} />
        <button onClick={chargeBattery}>
            Charge Battery
        </button>
    </>
  )
}

export default BatteryHookContainer