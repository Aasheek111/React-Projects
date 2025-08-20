import React, { useEffect } from 'react'
import { useState } from 'react';

function Flag({country}) {

  const[flag,setflag]=useState('np');

  useEffect(()=>{
    if(country){
      setflag(country.toLowerCase())
    }
  })

const flagurl=`https://flagcdn.com/16x12/${flag}.png`

  return (
    <div className=''> <img className=''
    src={flagurl}
    srcSet={`
https://flagcdn.com/48x36/${flag}.png 3x `}
    width="69"
    height="22"

  ></img></div>
  )
}

export default Flag;