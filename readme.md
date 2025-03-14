# Things to Love Product Page

Things to Love is a page showcasing products from the [Dummy JSON API](https://dummyjson.com/)

## Third-Party Libraries

Things to Love uses the current version of Tailwind, Font Awesome 6.7 and Google Fonts all linked from a CDN.

## Fun Features

The buy now button is customized according to inventory levels. Products with an "availabilityStatus" of "low stock" warn users to order quickly, and "out of stock" items encourage users to check back soon.

## Roadmap

- Functionality for category buttons. Currently, the category filters are limited to products returned in the active API request. Categories.js will grab all categories and create a list, but this was too much information to deal with for this test, so I simplified the categories that would display. The list of categories should also be linked to a function to filter the results by the selected category.

- Troubleshoot the flex formatting on the individual products. Ideally the top of the product title and the bottom of the buy now button would all line up. The buy now buttons vary a bit on placement and should be revised.

- Most accessiblity requirements are met. However, since the products are loaded through JS, the automated checker things the product ul is empty. Investigate a solution.

## Contributors

This project is designed and developed by Barbara Mae Lewis.

## License

[MIT](https://choosealicense.com/licenses/mit/)