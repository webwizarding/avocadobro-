async function getFoodData(key) {
  let productName = await getProductname();
  let url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${productName}&api_key=${key}`;

  fetch(url)
    .then((response) => response.json())
    .then((results) => {
      let carbs = 0,
        fibre = 0,
        fats = 0,
        sodium = 0,
        sugars = 0,
        energy = 0;
      results.foods[0].foodNutrients.forEach((nutrient) => {
        if (nutrient.nutrientName.includes("Carbohydrate")) {
          carbs = nutrient.value;
        } else if (nutrient.nutrientName.includes("Fiber")) {
          fibre = nutrient.value;
        } else if (nutrient.nutrientName.includes("lipid")) {
          fats = nutrient.value;
        } else if (nutrient.nutrientName.includes("Sodium")) {
          sodium = nutrient.value / 1000;
        } else if (nutrient.nutrientName.toLowerCase().includes("sugar")) {
          sugars = nutrient.value;
        } else if (nutrient.nutrientName.toLowerCase().includes("energy")) {
          energy = nutrient.value;
        }
      });

      let gi = Math.round(((carbs - fibre) * 65 + sugars * 25) / carbs);
      let gl = Math.round((gi * carbs) / (results.foods[0].servingSize * 100));

      let nutrientInfo = {
        glycaemicIndex: gi,
        glycaemicLoad: gl,
        energy: energy,
      };

      setInfoBox(nutrientInfo);
    });
}

let key = "ifCZAscHCiFT5kcgxyDgDv6KW3dHzgnUIsvvFP4W";
getFoodData(key);
