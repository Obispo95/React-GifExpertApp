import { useState } from "react"
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Cats']);

  const onAddCategory = (newCategory) => {

    // setCategories(categories => [...categories, 'Valorant']);
    // setCategories(['Valorant', ...categories]);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <center>
        <h1 className="title">GIF EXPERT APP</h1>

        <AddCategory
          onNewCategory={onAddCategory}
        />

        {
          categories.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </center>

    </>
  )
}
