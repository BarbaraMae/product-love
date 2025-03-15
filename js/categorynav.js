// Fetch category data from the API
fetch("https://dummyjson.com/products/categories")
  .then((response) => response.json()) // Convert the response to JSON
  .then((data) => {
    // Get the list of products from the response
    const categories = data;

    // Get the container element where the category links will be displayed
    const categoryFilters = document.getElementById("category-filters");

    if (Array.isArray(categories)) {
      // Iterate over the list of categories
      categories.forEach((category) => {
        categoryFilters.insertAdjacentHTML(
          "beforeend",
          `
        <li class="w-full md:w-auto"><button class="w-full md:w-auto bg-pink-300 hover:bg-pink-700 text-black hover:text-white rounded-md px-2 py-2" data-slug="${category.slug}">${category.name}</button></li>
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

// Show/Hide the category list when button is clicked
function toggleCategoryList() {
  const categoryFilters = document.getElementById("category-filters");
  categoryFilters.classList.toggle("hidden");
  let x = categoryFilters.getAttribute("aria-expanded");
  if (x == "true") {
    x = "false";
  } else {
    x = "true";
  }
  categoryFilters.setAttribute("aria-expanded", x);
}

// Add click event listener to the <h2> element
const header = document.querySelector(".category-header #sort");
header.addEventListener("click", toggleCategoryList);

// Function to handle adding/removing the 'active' class
function handleCategoryClick(event) {
  // Get all the button elements inside the #category-filters
  const listItems = document.querySelectorAll("#category-filters button");

  // Remove the 'active' class from all button elements
  listItems.forEach((item) => item.classList.remove("active"));

  // Add the 'active' class to the clicked button
  event.target.classList.add("active");

  //Get category slug from data attribute on clicked button
  const slug = event.target.getAttribute("data-slug");

  // reload with products from selected category
  loadProducts(slug);

  // Collapse the category buttons
  toggleCategoryList();

  // Change breadcrumbs to show current category name
  const name = event.target.textContent;
  document.getElementById("category-name").textContent = name;
}

// Add event listeners to all the button elements inside the #category-filters
const categoryFilters = document.getElementById("category-filters");
categoryFilters.addEventListener("click", function (event) {
  // Only handle clicks on button elements (ignore other elements inside the <ul>)
  if (event.target.tagName === "BUTTON") {
    handleCategoryClick(event);
  }
});
