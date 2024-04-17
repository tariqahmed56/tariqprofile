import { createContext, useContext, useEffect, useState } from "react";
import Ecommerce from './assets/Ecommerce.png'
import Educational from './assets/EducationalWeb.png'
import Netflix from './assets/Netflix.png'
import pepsi from './assets/pepsi.png'
import food from './assets/food.png'

let context = createContext();

export const DataContext = ({children}) =>{
    let [darkMood, setDarkMood] = useState(
        JSON.parse(localStorage.getItem('theme')) !== null 
            ? JSON.parse(localStorage.getItem('theme')) 
            : false
    );
    const projectData = [
        {
              id: 1,
              title: 'React Ecommerce',
              category: 'React , tailwind , Api',
              img: Ecommerce,
             url: 'https://smashcodeassignment1.netlify.app/'
          },
          {
              id: 2,
              title: 'Educationa Website',
              category: 'HTML , CSS , JS',
              url: 'https://pwclonebytariq.netlify.app/',
              img: Educational,
          },
          {
              id: 3,
              title: 'Netflix Landing Page',
              category: 'HTML , CSS , JS',
              img: Netflix,
              url:'https://tariqahmed56.github.io/HTMLCSSProject/'
          },
          {
              id: 4,
              title: 'Pepsi Landing Page',
              category: 'HTML , CSS , JS',
              img: pepsi,
              url:'https://landingpagelikepepsi.netlify.app/'
          },
          {
              id: 5,
              title: 'Fast Food website',
              category: 'HTML, CSS , JS',
              img: food,
              url: 'https://tastethebest.netlify.app/'
          },
          {
              id: 6,
              title: 'blog website (Upcoming)',
              category: 'Blog application with Firebase',
              img: 'https://cdn.hackr.io/uploads/posts/attachments/1683704157c2lIUSQChl.webp',
          },
      ]

    useEffect(() => {
        localStorage.setItem("theme", JSON.stringify(darkMood));
    }, [darkMood]);

    return (
        <context.Provider value={{ darkMood, setDarkMood ,projectData }}>
            {children}
        </context.Provider>
    );
}

export const useData = () => useContext(context);
