import React from 'react'
import price0 from '../images/_price0.png'

export default function Pricing() {
  return (
    <div className='container mt-5'>
        <div className='row '>
            <div className='col-6'>
                <h1>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href=''>See Pricing</a>
            </div>
            <div className='col-6'>
                <div className='row text-center' style={{fontSize:"10px"}}>
                    <div className='col-4 text-muted' >
                        <img src={price0} style={{width:"100px"}}/>
                        <p>Free account opening</p>
                    </div>
                    <div className='col-4'>
                    <div className='col-4 text-muted' >
                        <img src={price0} style={{width:"100px"}}/>
                        <p>Free equity delivery
                        and direct mutual funds</p>
                    </div>
                    </div>
                    <div className='col-4'>
                    <div className='col-4 text-muted' >
                        <img src={price0} style={{width:"100px"}}/>
                        <p>Intraday and F&O</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
