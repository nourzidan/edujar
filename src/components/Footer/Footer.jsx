import './Footer.css'

export default function Footer() {
  return (
    <div className='footer-div'>
        <ul className='footer-ul-1'>
            <li className='f-ul1-li1'>
                <p className='f-logo1'>Edu</p>
                <span className='f-logo2'>jar</span></li>
            <li className='f-ul1-li2'><p className='f-li2-main-text'>Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...</p></li>
            <li className='f-ul1-li3'>© 2024 <span className='li3-sp'>edujar</span> - All Rights Reserved</li>
        </ul>

        <ul className='footer-ul-2'>
            <li className='f-ul2-li1'><p className='ul2-li1-p'>Quick links</p></li>
        <li className='f-ul2-li2 f-li'><p className='ul2-li2-p'>Home</p></li>
        <li className='f-ul2-li3 f-li'><p className='ul2-li3-p'>Courses</p></li>
        <li className='f-ul2-li4 f-li'><p className='ul2-li4-p'>About us</p></li>
        <li className='f-ul2-li5 f-li'><p className='ul2-li5-p'>Works</p></li>
        <li className='f-ul2-li6 f-li'><p className='ul2-li6-p'>Blog</p></li>
        </ul>


        <ul className='footer-ul-3'> 
            <li className='f-ul3-li1'><p className='ul3-li1-p'>Legal</p></li>
        <li className='f-ul3-li2 f-li'><p className='ul3-li2-p'>Terms of use</p></li>
        <li className='f-ul3-li3 f-li'><p className='ul3-li3-p'>Terms & conditions</p></li>
        <li className='f-ul3-li4 f-li'><p className='ul3-li4-p'>Privacy policy</p></li>
        <li className='f-ul3-li5 f-li'><p className='ul3-li5-p'>Cookie policy</p></li>
        </ul>

        <ul className='footer-ul-4'>
        <li className='f-ul4-li1'><p className='ul4-li1-p'>Quick Links</p></li>
        <li className='f-ul4-li2 f-li'><input className='f-input' type="text" placeholder='Enter Email' /></li>
        <li className='f-ul4-li3 f-li'><button className='f-bt'>Subscribe</button></li>
        </ul>
        </div>
)
}
