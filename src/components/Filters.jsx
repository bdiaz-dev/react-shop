import { useId } from "react"
import { useFiltersStore } from "../stores/filtersStore"

export function Filters () {
    const {startPrice, category, setStartPrice, setCategory} = useFiltersStore()
    const minPriceRangeId = useId()
    const categoryInputId = useId()
    return (
        <div className='filtersContainer'>
          <div>
            <label htmlFor={minPriceRangeId}>Price start:</label>
            <input 
            type="range" 
            name="minPriceRange" 
            id={minPriceRangeId} 
            min={0} max={2000} 
            value={startPrice}
            onChange={setStartPrice}
            />
            <b>${startPrice}</b>
          </div>
          <div>
            <label htmlFor={categoryInputId}>Category:</label>
            <select 
            name="categorySelector" 
            id={categoryInputId}
            value={category}
            onChange={setCategory}
            >
              <option value="all">All</option>
              <option value="laptops">Laptops</option>
              <option value="smartphones">Smartphones</option>
            </select>
          </div>
        </div>
    )
}