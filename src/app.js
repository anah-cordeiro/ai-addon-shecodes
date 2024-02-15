function displayRecipe(response) {
    new Typewriter("#recipe", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  function generateRecipe(event) {
    event.preventDefault();
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "8b0f6dca34a0f66b303deotf68e3607e";
    let context =
      "You are a cuisine and gastronomy expert, and love to share authentic recipes of different world cuisine and gastronomy. Your mission is to generate a recipe in basic HTML and separate each sentence with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and NOT at the beginning";
    let prompt = `User instructions: Generate a recipe for ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe for ${instructionsInput.value}</div>`;
  
    axios.get(apiURL).then(displayRecipe);
  }
  
  let recipeFormElement = document.querySelector("#recipe-generator-form");
  recipeFormElement.addEventListener("submit", generateRecipe);