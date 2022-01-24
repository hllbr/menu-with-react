import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map((iten)=>items.category))];//?
function App() {
 const [menuItems,setMenuItems] = useState(items);//dataları aktarılmış olarak başlatmak istiyorum
 const [categories,setCategories] = useState(allCategories);
 const filterItems = (category)=>{
   if(category === 'all'){
     setMenuItems(items);
     return ;//blok sonlandırmak için kullandım
   }
   const newItems = items.filter((item)=> item.category === category);
   setMenuItems(newItems);
 };
 return(
   //görüntü 
   <main>
     <section className='menu section'>
       <div className='title'>
         <h2>hllbr menu</h2>
         <div className='underline'>

         </div>
       </div>
       <Categories categories={categories} filterItems={filterItems}/>
       <Menu items={menuItems}/>
     </section>
   </main>
 )
}

export default App;
