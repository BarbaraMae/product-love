// Fetch data from the API
fetch("https://dummyjson.com/products/categories")
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    // Get the list of products from the response
    const categories = data;
    console.log(categories);

    // Get the container element where the category links will be displayed
    const categoryFilters = document.getElementById("category-filters");

    if (Array.isArray(categories)) {
      // Iterate over the list of categories
      categories.forEach((category) => {
        categoryFilters.insertAdjacentHTML(
          "beforeend",
          `
        <li class="bg-pink-300 hover:bg-pink-700 text-black hover:text-white rounded-md px-2 py-2" data-slug="${category.slug}">${category.name}</a></li>
      `
        );
      });
    } else {
      console.error("Products data is not an array.");
    }

  })
  .catch((error) => {
    // Handle any errors that occur during the fetch request
    console.error("Error fetching products:", error);
  });
