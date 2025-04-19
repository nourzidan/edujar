import './Hero.css'

export default function Hero() {
  return (<>
    <div className='hero-container'>
        <div className='hero-img1-div'><img src="assets/imags/hero/hero-img-1.png" alt="" /></div>
        <div className='hero-text-div'><p className='main-text'>Learn with us anywhere with the best <span className='hero-span'>experts</span></p>
        <p className='sec-text'>We collaborate with 275+ leading universities and companies</p>
        <div className='input-div'><input className='hero-input' type="text" placeholder='Want do you want to learn?'/><button className='hero-btn'>Explore</button></div></div>
        <div className='hero-img2-div'><img src="assets/imags/hero/hero-img-2.png" alt="" /></div>

    </div>
    <div className='first-bar-div'>
      <div className='small-div'><p className='number'>60k+</p> <p className='text'>Live Courses</p></div>
      <div className='small-div green'><p className='number'>30k+</p> <p className='text'>Category</p></div>
      <div className='larg-div'><div className='larg-div-t'><p className='larg-top'>Trustpilot</p></div><div className='larg-div-b'><p className='l-d-b-p'>View our 1,602 reviews</p><p className='l-d-b-n'>4.9</p></div></div>
      <div className='small-div green'><p className='number'>25k+</p> <p className='text'>Professionals</p></div>
      <div className='small-div'><p className='number'>125k+</p> <p className='text'>Students</p></div>
    </div>
    </>
    
  )
}
