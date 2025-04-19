import './NavBar.css'

export default function NavBar({logo1,logo2,navitems,btn}) {
  return (
    
    <nav className='navbar'>
        <div className='logo'>
            <p className='logo1'>{logo1}</p>
            <span className='logo2'>{logo2}</span>
        </div>
        <ul className='navmenu'>
            {navitems.map((element,index)=>{
                return(
                    <li  key={index}>{element.text}</li>
                )
            })}

        </ul>
            <button className='navbtn'>{btn}</button>
    </nav>
    
  )
}
