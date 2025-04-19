import { useState } from 'react'
import './FrequentlyAskedQuestions.css'

export default function FrequentlyAskedQuestions({faqItems}) {
 
//  const [showanswer , setshowanswer]=useState(true)

const [visibleIndex, setVisibleIndex] = useState(null);

const toggleAnswer = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
}
    return (
    <section className='faq-section'>
        <div className='faq-left-div'>
            <p className='faq-main-head'>Frequently Asked Questions</p>
            <p className='faq-sub-text-1'>Any Questions?</p>
            <p className='faq-sub-text-2'>Find here.</p>
            <button className='faq-btn'>Send Message</button>
        </div>
        <div className='faq-right-container-div'>
            
            {faqItems.map((element,index)=>{
                
            return(
                <div key={index} className={`faq-right-item faq-right-item-${index}`}>
                    <div className={`faq-right-item-q faq-right-item-q-${index}`}>
                        <p className='faq-main'>{element.question}</p>
                        <img  onClick={()=> toggleAnswer(index)} className='faq-plus-img' src="/assets/imags/frequentlyquestions/plus.svg" alt=""/>
                    </div>
                    <div className={`answer answer-${index} `} style={{ display: visibleIndex === index ? 'block' : 'none' }} ><p>{element.answer}</p></div>
                    </div>
            )
            })}

        </div>
    </section>
  )
}

