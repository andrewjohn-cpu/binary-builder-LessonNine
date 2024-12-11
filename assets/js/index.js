document.addEventListener("DOMContentLoaded", () => {
  let recipeListContainer = document.querySelector("#recipe-display-container");
  let recipeCard = document.getElementById("card");
  let recipeDetailModal = document.querySelector("#myModal");
  let recipeCloseModal = document.querySelector("#modal-close");
  // recipeCloseModal.onclick = () => {
  //   recipeDetailModal.style.display = "none";
  // };

  function displayAllRecipes() {
    fetch("http://localhost:3000/recipes")
      .then((response) => response.json())
      .then((data) => {
        data.map((recipe) => {
          let recipeCard = document.createElement("div");
          recipeCard.classList.add("card");
          recipeCard.innerHTML = `
             <img src="${recipe.recipeImage}" clStrawberry Cream Cheesecakeass="card-img-top"
                          alt="recipe-image">
             <div class="card-body">
                  <h5 class="card-title">${recipe.recipeName}</h5>
                  <a href="/detail-recipe.html" class="btn btn-primary">Read More</a>
             </div>
          `;

          function selectRecipeItem() {
            function openModal() {
              let recipeModalInfo = document.querySelector(".modal-info");
              recipeDetailModal.style.display = "block";
              let recipeDetails = "";
              recipeDetails += `
                    <div class="image-container">
                      <img src="${recipe.recipeImage}" />
                    </div>
                    <div class="recipe-information">
                      <h5>${recipe.recipeName}</h5>
                      <div class="ingredients-section">
                        <h2>Ingredients</h2>
                        <ul>
                    `;
              recipe.recipeIngredient.forEach((ingredient) => {
                recipeDetails += `
                          <li>${ingredient}</li>
                  `;
              });

              recipeDetails += `
                        </ul>
                      </div>
                      <div class="preparation-section">
                       <h2>Preparation Instruction</h2>
                       <ol>
                `;
              recipe.recipePreparation.forEach((instruction) => {
                recipeDetails += `<li>${instruction}</li>`;
              });

              recipeDetails += `
                       </ol>
                      </div>
                    </div>
                `;

              recipeDetails += `
                    <div class="modify-buttons" id="modify-buttons">
                      <button type="btn button" class="delete-button" id="delete-button" data-id=${recipe.id}>Delete</button>&nbsp;
                      <button type="btn button" class="edit-button" data-bs-toggle="modal"
                          data-bs-target="#updateRecipeForm" id="edit-button">Edit</button>
                    </div>
                `;

              recipeModalInfo.innerHTML = recipeDetails;
            }

            function closeModal() {
              recipeDetailModal.style.display = "none";
            }

            recipeCloseModal.addEventListener("click", closeModal);
            recipeCard.addEventListener("click", openModal);
          }
          selectRecipeItem();
          recipeListContainer.appendChild(recipeCard);
        });
      });
  }

  displayAllRecipes();

  function displayMessage() {
    return "Testing this async";
  }
  console.log(displayMessage);
});

// let recipes = [
//   {
//     id: 1,
//     recipeName: "Strawberry Cake",
//     recipeImage: "./assets/images/strawberry-cake.jpg",
//     recipeIngredient: [
//       "400g graham crackers",
//       "150g unsalted butters, melted",
//       "300g marshmallows",
//     ],
//     recipePreparation: [
//       "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
//       "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
//       "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
//     ],
//   },
//   {
//     id: 2,
//     recipeName: "Chapati",
//     recipeImage: "./assets/images/strawberry-cake.jpg",
//     recipeIngredient: [
//       "400g graham crackers",
//       "150g unsalted butters, melted",
//       "300g marshmallows",
//     ],
//     recipePreparation: [
//       "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
//       "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
//       "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
//     ],
//   },
//   {
//     id: 3,
//     recipeName: "Matoke",
//     recipeImage: "./assets/images/strawberry-cake.jpg",
//     recipeIngredient: [
//       "400g graham crackers",
//       "150g unsalted butters, melted",
//       "300g marshmallows",
//     ],
//     recipePreparation: [
//       "testing matoke",
//       "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
//       "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
//       "To prepare crust add graham crackers to a food processor and process until you reach fine crumbs. Add melted butter and pulse 3-4 times to coat crumbs with butter.",
//     ],
//   },
// ];
