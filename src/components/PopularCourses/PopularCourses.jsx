import './PopularCourses.css'

export default function PopularCourses({pc_carditem}) {
  return (
    <section className='popularcourses'>
<div className='popularcourses-text-div'>
    <p className='pc-first-text'>Popular Courses</p>
    <div className='pc-text-btn-div'>
        <p className='pc-second-text'>Let’s join our best classes with our famous instructor and institutes</p>
        <div className='pc-btn-div'>
            <button className='pc-btn '><img className='arrow-img' src="/assets/imags/popularcourses/Vector9.svg" alt="" /></button>
            <button className='pc-btn '><img className='arrow-img' src="/assets/imags/popularcourses/Vector19.svg" alt="" /></button>
            </div>

    </div>
</div>
<div className='popularcourses-card-container'>
  {/* <div className='pc-card'>
    <div className='card-top-div no-bg'><div className='left-div no-bg'><img className='card-top-icon no-bg' src="/assets/imags/popularcourses/top-div-icon-green.svg" alt="" /><p className='lesson-number-p no-bg'>25x Lesson</p></div><button className='lesson-categ-btn no-bg'>Design</button></div>
    <div className='card-main-text-div no-bg'><p className='card-main-text-p no-bg'>Supervised Machine Learning: Regression and Classification</p></div>
    <div className='card-sub-text-div no-bg'><p className='sub-text-p no-bg'>For athletes, high altitude produces two contradi effects on performance.</p></div>
    <div className='card-bottom-div no-bg'><button className='card-bottom-btn no-bg'>Join</button><div className='card-logo-div no-bg'><img className='card-logo-img no-bg ' src="/assets/imags/popularcourses/Rectangle1.svg" alt="" /></div></div>
  </div> */}
  {pc_carditem.map((element,index)=>{
    return(
      <div className={`pc-card pc-card-${index+1}`} key={index}>
    <div className='card-top-div no-bg'><div className='left-div no-bg'><img className='card-top-icon no-bg' src={element.card_top_icon} alt="" /><p className='lesson-number-p no-bg'>{element.lesson_number}</p></div><button className='lesson-categ-btn no-bg'>{element.lesson_categ}</button></div>
    <div className='card-main-text-div no-bg'><p className='card-main-text-p no-bg'>{element.card_main_text}</p></div>
    <div className='card-sub-text-div no-bg'><p className='sub-text-p no-bg'>{element.card_sub_text}</p></div>
    <div className={`card-bottom-div card-bottom-div-${index+1} no-bg`}><button className='card-bottom-btn no-bg'>{element.card_bottom_btn}</button><div className={`card-logo-div card-logo-div-${index+1} no-bg`}><img className={`card-logo-img card-logo-img-${index+1} no-bg `} src={element.card_logo_img} alt="" /></div></div>
  </div> 
    )
  })}

  
</div>
<div className='last-button'><button className='last-btn'>Explore Courses</button></div>
    </section>
  )
}
