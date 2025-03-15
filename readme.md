# Things to Love Product Page

Things to Love is a page showcasing products from the [Dummy JSON API](https://dummyjson.com/)

## Third-Party Libraries

Things to Love uses the current version of Tailwind, Font Awesome 6.7 and Google Fonts all linked from a CDN.

## Fun Features

The buy now button is customized according to inventory levels. Products with an "availabilityStatus" of "low stock" warn users to order quickly, and "out of stock" items encourage users to check back soon.

## Roadmap

- Add css transitions to the show/hide events.

- Sort by category click event is not accessible with keyboard events.

- Convert category buttons to dropdown list on mobile.

- Troubleshoot the flex formatting on the individual products. Ideally the top of the product title and the bottom of the buy now button would all line up. The buy now buttons vary a bit on placement and should be revised.

- Most accessiblity requirements are met. However, since the products are loaded through JS, the automated checker thinks the product ul is empty. Investigate a solution.

- Change out of stock message to link to collect email for notification when back in stock.

## Contributors

This project is designed and developed by Barbara Mae Lewis.

## License

[MIT](https://choosealicense.com/licenses/mit/)