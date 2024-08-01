This is a sample Book Store project build by Ashan Perera.

A hosted version of the project can be found in [ashanperera-bookstore.netlify.app](https://ashanperera-bookstore.netlify.app/)

## Tech Stack

- NextJS
- ReactJS
- MantineUI
- TailwindCSS
- Zustand
- React-Hook-Form
- Zod
- React-Icons

## (Instructions) How to Tweak

- As backend a static JavaScript object has been used. Changing that object will mimic the db changes.
- To mimic requests and responses an artificial delay has been placed in the api routes. Which can be turn off by commenting.
- To recreate error situations an 'errorState' constant has been placed on top of each api route. Turning it on will show an server error.

## Features

- List of books with titles, authors, covers, and other relevant information.
- Search functionality to allow users to search for books by title or author.
- Enable users to sort the book list by title, author, or other criteria.
- Filter options to allow users to filter books by category, price range, or any other relevant criteria
- Pagination for the book listing if the number of books exceeds a certain limit.
- Add books to a shopping cart, view the contents, update quantities, and remove items.
- Checkout process with form validation for shipping details using Zod.
- Responsive design and accessibility across various devices and screen sizes

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
