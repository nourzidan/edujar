import './TopCategories.css'

export default function TopCategories({carditem}) {
  return (
    <div className='topcategories'><div className='text-div'><p className='explor-p'>Explore Top Categories</p>
    <p className='clickon-p'>Click on the categories and explore all courses</p></div>
    <div className='topcat-bar-div'><div className='bar-card-container'>
    {carditem.map((element,index)=>{
        return(
            <div className={`topcat-card-${index} topcat-card `} key={index}>
                <div className={`topcat-card-div-img-${index} topcat-card-div-img`}><img className={`topcat-card-img-${index} topcat-card-img`} src={element.icon} alt="" /></div>
                <p className='topcat-card-text-p'>{element.text}</p>
            </div>
        )
    })}
    </div>
    </div>
    </div>
  )
}
