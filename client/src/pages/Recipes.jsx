import YoutubeEmbed from "../components/YoutubeEmbed";

function Recipes({ recipes }) {
  return (
    <div className="m-8 border ">
      {recipes &&
        recipes.map((recipe) => (
          <div key={recipe.id} className="flex flex-row mb-2">
            <YoutubeEmbed url={recipe.video_link} />
            <div className="flex p-2 flex-col">
              <div className="flex flex-col">
                <span className="font-bold">Recipe Name: {recipe.cuisine}</span>
                <span>Chef's Name: {recipe.chef_name}</span>
              </div>
              <div className="flex flex-col mt-8">
                <span>Time: {recipe.cook_time}</span>
                <span>Est. budget: {recipe.servings}</span>
                <span>Cusine: {recipe.cuisine}</span>
                <span>Description: {recipe.description}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Recipes;
