import { useState } from 'react'
import FilterTabs from '../FilterTabs'

export default function FilterTabsExample() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categories = ['All', 'Photography', 'Videography', 'Events']

  return (
    <div className="p-8">
      <FilterTabs
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </div>
  )
}
