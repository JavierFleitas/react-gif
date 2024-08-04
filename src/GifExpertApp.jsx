import {useState} from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['ferrari'])

    const onAddCategory = (newCategory) =>{

      if ( categories.includes(newCategory)) {
        return
      }

      // console.log(newCategory)
      setCategories([newCategory,...categories]) //hace una copia de las categorias y despues inserta la nueva

    }
    

    return (
  
      <>
          <h1>GifExpertApp</h1>


          <AddCategory 
              onNewCategory={event => onAddCategory(event)}
          ></AddCategory>

    
          

          {
            categories.map((category) => (
              <GifGrid 
                key={category} 
                category={category}>
              </GifGrid>))
            
          }
            
          
      </>
      
    )
  }
  
  //lWVBhBystHXNN5TW68fAr7SwxGIS4R9h