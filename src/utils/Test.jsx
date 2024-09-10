import { Grid } from '@mui/joy'
import { colors } from '@mui/material'
import React from 'react'

const Test = () => { 

    const style = {
       grid:{
        color:'red'
       }
    
    }
  return (
    <div>
       <h1 style={ style.grid }>hello bhanu</h1>
    </div>
  )
}

export default Test
