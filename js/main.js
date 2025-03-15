// Function to load products from the API
function loadProducts(filter) {
  let apiURL = "https://dummyjson.com/products?limit=50";
  if (filter) {
    apiURL = "https://dummyjson.com/products/category/" + filter;
  }

  // Fetch data from the API
  fetch(apiURL)
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => {
      // Get the list of products from the response
      const products = data.products;

      // Get the container element where the products will be displayed
      const productsContainer = document.getElementById("products-container");
      productsContainer.innerHTML = "";

      // Iterate over the list of products
      products.forEach((product) => {
        // Round off ratings for easier display
        const roundedRating = Math.round(product.rating);
        
        let buyButton = "";
        //Create buy button depending on availability status
        if (product.availabilityStatus === "Low Stock") {
          // if product is low in change buyButton Message
          buyButton = `<button href="#" class="w-full bg-pink-300 hover:bg-pink-700  text-black hover:text-white rounded-md px-4 py-4 flex-none">Running low, order now!</button>`;
        } else if (product.availabilityStatus === "In Stock") {
          // if available and normal inventory, show Add to Cart
          buyButton = `<button href="#" class="w-full bg-pink-300 hover:bg-pink-700 text-black hover:text-white rounded-md px-4 py-4 flex-none">Add to cart</button>`;
        } else {
          // 'out of stock' message, button disabled
          buyButton = `<button disabled class="w-full bg-gray-200 text-black rounded-md px-4 py-4 flex-none">Out of stock. Check back soon!</button>`;
        }

        // Create individual product listing and add it to the grid container
        productsContainer.insertAdjacentHTML(
          "beforeend",
          `
          <a href="#" aria-labelledby="product-${product.id}" class="flex flex-wrap">
            <li class="flex flex-wrap justify-between bg-slate-50 hover:bg-pink-100 px-8 py-6 rounded-md">
              <h3 id="product-${product.id}" class="font-medium text-gray-700 text-3xl mb-3">${product.title}</h3>
              <img src="${product.thumbnail}" alt="${product.title}">
              <p class="font-light text-black text-md mt-3 ">
                ${product.description}
              </p>
              <div class="flex flex-row justify-between w-full">
                <div class="w-30 py-2 rounded-md my-4">
                  <span class="rating text-pink-400" role="img" data-rating="${roundedRating}" aria-label="Rating: ${roundedRating} out of 5 stars"></span>
                </div>
                <div class="w-20 py-2 my-4 flex justify-center font-semibold">
                  $${product.price}
                </div>
              </div>
              <div class="w-full">${buyButton}</div>
            </li>
          </a>
        `
        );
      });
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch request
      console.error("Error fetching products:", error);
    });
}

// Initial load of "all" products without a filter
loadProducts();
