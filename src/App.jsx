
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import TopCategories from './components/TopCategories/TopCategories'
import PopularCourses from './components/PopularCourses/PopularCourses'
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
import OurClints from './components/OurClints/OurClints'
import Footer from './components/Footer/Footer'

function App() {
 const navmenu=[{text:'Home'},
  {text:'Courses'},{text:'About Us'},{text:'Works'},{text:'Blog'},
  {text:'Contact'}
 ]

 const top_categories_card=[
  {icon:"/assets/imags/top-categories/icone-card-1.svg",text:'Art & Design '},
  {icon:"/assets/imags/top-categories/icon-card-circle.svg" ,text:'Cmmunication'},
  {icon:"/assets/imags/top-categories/icon-card-circle.svg",text:'Finance & Bank'},
  {icon:"/assets/imags/top-categories/icon-card-circle.svg",text:'Marketing'},
  {icon:"/assets/imags/top-categories/icon-card-circle.svg",text:'Photography'}
 ]
 const popular_courses_card=[
  {card_top_icon:"/assets/imags/popularcourses/top-div-icon-green.svg"
  ,lesson_number:'25x Lesson'
  ,lesson_categ:'Design'
  ,card_main_text:'Supervised Machine Learning: Regression and Classification'
  ,card_sub_text:'For athletes, high altitude produces two contradi effects on performance.'
  ,card_bottom_btn:'Join',card_logo_img:"/assets/imags/popularcourses/Rectangle1.svg"},
  {card_top_icon:"/assets/imags/popularcourses/top-div-icon-blue.svg"
    ,lesson_number:'16x Lesson'
    ,lesson_categ:'Marketing'
    ,card_main_text:'Programming for Everybody (Getting Started with Python)'
    ,card_sub_text:'For athletes, high altitude produces two contradi effects on performance.'
    ,card_bottom_btn:'Join',card_logo_img:"/assets/imags/popularcourses/Rectangle1.svg"},
    {card_top_icon:"/assets/imags/popularcourses/top-div-icon-pink.svg"
      ,lesson_number:'38x Lesson'
      ,lesson_categ:'Programming'
      ,card_main_text:'Leading Teams: Developing as a Leader'
      ,card_sub_text:'For athletes, high altitude produces two contradi effects on performance.'
      ,card_bottom_btn:'Join',card_logo_img:"/assets/imags/popularcourses/Rectangle1.svg"},
      {card_top_icon:"/assets/imags/popularcourses/top-div-icon-purbl.svg"
        ,lesson_number:'25x Lesson'
        ,lesson_categ:'Design'
        ,card_main_text:'Powerful mental tools to help you master tough subjects'
        ,card_sub_text:'For athletes, high altitude produces two contradi effects on performance.'
        ,card_bottom_btn:'Join',card_logo_img:"/assets/imags/popularcourses/Rectangle1.svg"},
        {card_top_icon:"/assets/imags/popularcourses/top-div-icon-orange.svg"
          ,lesson_number:'16x Lesson'
          ,lesson_categ:'Marketing'
          ,card_main_text:'Programming for Everybody (Getting Started with Python)'
          ,card_sub_text:'For athletes, high altitude produces two contradi effects on performance.'
          ,card_bottom_btn:'Join',card_logo_img:"/assets/imags/popularcourses/Rectangle1.svg"},
          {card_top_icon:"/assets/imags/popularcourses/top-div-icon-yallow.svg"
            ,lesson_number:'38x Lesson'
            ,lesson_categ:'Programming'
            ,card_main_text:'Leading Teams: Developing as a Leader'
            ,card_sub_text:'For athletes, high altitude produces two contradi effects on performance.'
            ,card_bottom_btn:'Join',card_logo_img:"/assets/imags/popularcourses/Rectangle1.svg"}

 ]

 const faqItems = [
  {
    question: 'Can Conversix sync my data to my CRM ?',
    answer: 'Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.'
  },
  {
    question: 'How much data will I receive ?',
    answer: 'The amount of data you receive will depend on the specific parameters of your request and the available data within our system.'
  },
  {
    question: 'Can marketers use Conversix data on behalf of client ?',
    answer: 'Yes, marketers can use Conversix data on behalf of their clients following the proper authorization and usage guidelines.'
  },
  {
    question: 'How accurate is my data ?',
    answer: 'Our data accuracy is maintained through rigorous verification processes and continuous updates to ensure reliability and relevance.'
  }
]
  return (
    <>
      <NavBar logo1='Edu' logo2='jar' navitems={navmenu} btn='Signup'/>
      <Hero/>
      <TopCategories carditem={top_categories_card}/>
      <PopularCourses pc_carditem={popular_courses_card}/>
      <FrequentlyAskedQuestions faqItems={faqItems}/>
      <OurClints/>
      <Footer/>
    </>
  )
}

export default App
