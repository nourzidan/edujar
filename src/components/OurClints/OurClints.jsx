import { useState } from 'react'
import './OurClints.css'

export default function OurClints() {
const [clintname, setclintname] =  useState(2)

const handlePrevClick = () => {
    setclintname(clintname === 0 ? clients.length - 1 : clintname - 1);
  }

  const handleNextClick = () => {
    setclintname(clintname === clients.length - 1 ? 0 : clintname + 1);
  }
    const clients = [
        {img:'assets/imags/ourclints/client1.svg',name:'Adrian Smith'},
        {img:'assets/imags/ourclints/client2.svg',name:'Mary Liam '},
        {img:'assets/imags/ourclints/client3.svg',name:'Sara Ramos'},
        {img:'assets/imags/ourclints/client4.svg',name:'Loura divan'},
        {img:'assets/imags/ourclints/client1.svg',name:'Helena Marker'}
      ]

    return (<>
    <div className='ourclints-div'>
        <p className='oc-main-text no-bg'>What our client’s say</p>
        <img className='no-bg' src="assets/imags/ourclints/Frame.svg" alt="" />
        <p className='oc-sub-text no-bg'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
        <p className='oc-slider-name no-bg'>{clients[clintname].name}</p>
        <div className='oc-slider-div no-bg'>
            <img onClick={handlePrevClick} className='oc-prives no-bg' src="/assets/imags/ourclints/prives.svg" alt="" />
            
            {clients.map((element,index)=>{
                return(<div className='oc-img-div no-bg' key={index}>
                    
            <img className={`oc-img ${index === clintname ? 'active' : ''} no-bg`} src={element.img} alt="" />
            </div>
                )
            })}
            <img onClick={handleNextClick} className='oc-next no-bg' src="/assets/imags/ourclints/next.svg" alt="" />
            
        </div>
        </div>
        <div className='oc-bar'>
        <img src="assets/imags/ourclints/prives.svg" alt="" />
        <img src="assets/imags/ourclints/brand-1.svg" alt="" />
        <img src="assets/imags/ourclints/brand-2.svg" alt="" />
        <img src="assets/imags/ourclints/brand-3.svg" alt="" />
        <img src="assets/imags/ourclints/brand-4.svg" alt="" />
        <img src="assets/imags/ourclints/brand-5.svg" alt="" />
        <img src="assets/imags/ourclints/next.svg" alt="" />
        </div>
        </>
        
  )
}
