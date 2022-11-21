import { useEffect, useState } from "react"
import config from "../config/config"

function Hero() {
  const [recipeData, setRecipeData] = useState([])

  useEffect(() => {
    async function getRecipeData() {
      const key = config.MY_API_KEY
      const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=american`

      const res = await fetch(url)
      const data = await res.json()
      setRecipeData(data.results)
    }

    getRecipeData()
  }, [])


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Find your favorite recipes</h1>
          <ul>
            {
                recipeData.map(recipe => {
                    return (
                        <li key={recipe.id}>
                            {recipe.title}
                            <img src={recipe.image} alt="" />
                        </li>
                    )
                })
            }
          </ul>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Search Recipe</span>
              </label>
              <input
                type="text"
                placeholder="Search Recipe"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
