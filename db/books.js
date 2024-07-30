const books = [
  {
    id: "123e4567-e89b-12d3-a456-426614174001",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A novel about the serious issues of rape and racial inequality, told through the eyes of young Scout Finch.",
    image: "https://picsum.photos/id/237/400/300",
    published: 1960,
    price: 7.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174002",
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian novel set in a totalitarian society under constant surveillance.",
    image: "https://picsum.photos/id/238/400/300",
    published: 1949,
    price: 6.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174003",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel that also critiques the British landed gentry at the end of the 18th century.",
    image: "https://picsum.photos/id/239/400/300",
    published: 1813,
    price: 5.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174004",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A novel about the American dream and the disillusionment of the Jazz Age.",
    image: "https://picsum.photos/id/240/400/300",
    published: 1925,
    price: 10.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174005",
    title: "Moby-Dick",
    author: "Herman Melville",
    description:
      "The narrative of Captain Ahab's obsessive quest to seek revenge on the white whale that bit off his leg.",
    image: "https://picsum.photos/id/241/400/300",
    published: 1851,
    price: 8.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174006",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description:
      "A novel about teenage rebellion and angst, narrated by the iconic Holden Caulfield.",
    image: "https://picsum.photos/id/242/400/300",
    published: 1951,
    price: 9.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174007",
    title: "Brave New World",
    author: "Aldous Huxley",
    description:
      "A dystopian novel about a technologically advanced society that prioritizes consumerism and superficial happiness.",
    image: "https://picsum.photos/id/243/400/300",
    published: 1932,
    price: 8.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174008",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    description:
      "A novel about a future society where books are banned and 'firemen' burn any that are found.",
    image: "https://picsum.photos/id/244/400/300",
    published: 1953,
    price: 7.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174009",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "A fantasy novel about the adventure of Bilbo Baggins, who finds himself on an unexpected journey.",
    image: "https://picsum.photos/id/245/400/300",
    published: 1937,
    price: 10.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174010",
    title: "Lord of the Flies",
    author: "William Golding",
    description:
      "A novel about a group of boys stranded on an uninhabited island who descend into savagery.",
    image: "https://picsum.photos/id/246/400/300",
    published: 1954,
    price: 8.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174011",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    description:
      "A novel about an orphaned girl who overcomes hardship and finds love and independence.",
    image: "https://picsum.photos/id/247/400/300",
    published: 1847,
    price: 6.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174012",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    description:
      "A novel about the intense and tragic love story between Catherine Earnshaw and Heathcliff.",
    image: "https://picsum.photos/id/248/400/300",
    published: 1847,
    price: 7.89,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174013",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description:
      "A novel about a man who remains eternally young while his portrait ages and reflects his moral corruption.",
    image: "https://picsum.photos/id/249/400/300",
    published: 1890,
    price: 9.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174014",
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    description:
      "A series of fantasy novels about the adventures in the magical land of Narnia.",
    image: "https://picsum.photos/id/250/400/300",
    published: 1950,
    price: 11.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174015",
    title: "Animal Farm",
    author: "George Orwell",
    description:
      "A satirical novella about a group of farm animals who overthrow their human farmer.",
    image: "https://picsum.photos/id/251/400/300",
    published: 1945,
    price: 6.89,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174016",
    title: "Les Misérables",
    author: "Victor Hugo",
    description:
      "A novel that chronicles the lives of several characters, particularly Jean Valjean, in early 19th-century France.",
    image: "https://picsum.photos/id/252/400/300",
    published: 1862,
    price: 12.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174017",
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    description:
      "A novel about the Buendía family and their multi-generational story in the fictional town of Macondo.",
    image: "https://picsum.photos/id/253/400/300",
    published: 1967,
    price: 14.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174018",
    title: "Catch-22",
    author: "Joseph Heller",
    description:
      "A novel about the absurdities of war and bureaucracy, following the experiences of Captain John Yossarian.",
    image: "https://picsum.photos/id/254/400/300",
    published: 1961,
    price: 11.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174019",
    title: "The Bell Jar",
    author: "Sylvia Plath",
    description:
      "A semi-autobiographical novel about a young woman's struggle with mental illness.",
    image: "https://picsum.photos/id/255/400/300",
    published: 1963,
    price: 8.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174020",
    title: "The Road",
    author: "Cormac McCarthy",
    description:
      "A novel about a father and son's journey through a post-apocalyptic world.",
    image: "https://picsum.photos/id/256/400/300",
    published: 2006,
    price: 9.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174021",
    title: "The Shining",
    author: "Stephen King",
    description:
      "A horror novel about a family staying in an isolated hotel with a dark history.",
    image: "https://picsum.photos/id/257/400/300",
    published: 1977,
    price: 10.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174022",
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    description:
      "A comedic science fiction series about an unwitting human's adventures through space.",
    image: "https://picsum.photos/id/258/400/300",
    published: 1979,
    price: 7.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174023",
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "A novel about a shepherd's journey to find treasure and his own personal legend.",
    image: "https://picsum.photos/id/259/400/300",
    published: 1988,
    price: 9.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174024",
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    description:
      "A novel about the American Civil War and its impact on the life of a Southern woman.",
    image: "https://picsum.photos/id/260/400/300",
    published: 1936,
    price: 12.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174025",
    title: "The Color Purple",
    author: "Alice Walker",
    description:
      "A novel about the struggles of African American women in the early 20th century South.",
    image: "https://picsum.photos/id/261/400/300",
    published: 1982,
    price: 10.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174026",
    title: "Little Women",
    author: "Louisa May Alcott",
    description:
      "A novel about the lives, loves, and growth of the four March sisters in 19th-century New England.",
    image: "https://picsum.photos/id/262/400/300",
    published: 1868,
    price: 8.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174027",
    title: "Dracula",
    author: "Bram Stoker",
    description:
      "A Gothic horror novel about Count Dracula's attempt to move from Transylvania to England to spread the undead curse.",
    image: "https://picsum.photos/id/263/400/300",
    published: 1897,
    price: 7.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174028",
    title: "Frankenstein",
    author: "Mary Shelley",
    description:
      "A novel about a scientist who creates a sentient creature through an unorthodox scientific experiment.",
    image: "https://picsum.photos/id/264/400/300",
    published: 1818,
    price: 6.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174029",
    title: "The Outsiders",
    author: "S.E. Hinton",
    description:
      "A novel about the conflict between two teenage gangs, the Greasers and the Socs, in the 1960s.",
    image: "https://picsum.photos/id/265/400/300",
    published: 1967,
    price: 8.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174030",
    title: "The Giver",
    author: "Lois Lowry",
    description:
      "A dystopian novel about a boy who is chosen to be the Receiver of Memories in a seemingly perfect society.",
    image: "https://picsum.photos/id/266/400/300",
    published: 1993,
    price: 7.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174031",
    title: "A Wrinkle in Time",
    author: "Madeleine L'Engle",
    description:
      "A science fantasy novel about a young girl who travels through space and time to rescue her father.",
    image: "https://picsum.photos/id/267/400/300",
    published: 1962,
    price: 8.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174032",
    title: "Watership Down",
    author: "Richard Adams",
    description:
      "A novel about a group of rabbits who escape from their warren to find a new home.",
    image: "https://picsum.photos/id/268/400/300",
    published: 1972,
    price: 9.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174033",
    title: "Ender's Game",
    author: "Orson Scott Card",
    description:
      "A science fiction novel about a young boy who is trained to lead humanity's defense against an alien threat.",
    image: "https://picsum.photos/id/269/400/300",
    published: 1985,
    price: 10.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174034",
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    description:
      "A novel about the bond between two boys in Afghanistan and the impact of betrayal and redemption.",
    image: "https://picsum.photos/id/270/400/300",
    published: 2003,
    price: 11.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174035",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    description:
      "A thriller novel about a symbologist's investigation into a murder and a conspiracy involving the Catholic Church.",
    image: "https://picsum.photos/id/271/400/300",
    published: 2003,
    price: 12.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174036",
    title: "Life of Pi",
    author: "Yann Martel",
    description:
      "A novel about a boy stranded on a lifeboat with a Bengal tiger after a shipwreck.",
    image: "https://picsum.photos/id/272/400/300",
    published: 2001,
    price: 13.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174037",
    title: "The Hunger Games",
    author: "Suzanne Collins",
    description:
      "A dystopian novel about a young girl's fight for survival in a televised death match.",
    image: "https://picsum.photos/id/273/400/300",
    published: 2008,
    price: 10.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174038",
    title: "The Lovely Bones",
    author: "Alice Sebold",
    description:
      "A novel about a young girl who watches from the afterlife as her family copes with her murder.",
    image: "https://picsum.photos/id/274/400/300",
    published: 2002,
    price: 9.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174039",
    title: "The Secret Life of Bees",
    author: "Sue Monk Kidd",
    description:
      "A novel about a young girl's journey to uncover the truth about her deceased mother and herself.",
    image: "https://picsum.photos/id/275/400/300",
    published: 2002,
    price: 8.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174040",
    title: "Big Little Lies",
    author: "Liane Moriarty",
    description:
      "A novel about a group of women whose seemingly perfect lives unravel, leading to a murder.",
    image: "https://picsum.photos/id/276/400/300",
    published: 2014,
    price: 11.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174041",
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    description:
      "A novel about a young girl who grows up isolated in the marshlands and becomes the prime suspect in a murder case.",
    image: "https://picsum.photos/id/277/400/300",
    published: 2018,
    price: 12.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174042",
    title: "The Martian",
    author: "Andy Weir",
    description:
      "A science fiction novel about an astronaut stranded on Mars and his struggle for survival.",
    image: "https://picsum.photos/id/278/400/300",
    published: 2011,
    price: 10.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174043",
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description:
      "A psychological thriller about a woman who shoots her husband and then stops speaking, and the therapist who tries to uncover the truth.",
    image: "https://picsum.photos/id/279/400/300",
    published: 2019,
    price: 9.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174044",
    title: "The Night Circus",
    author: "Erin Morgenstern",
    description:
      "A fantasy novel about a magical competition between two young illusionists in a mysterious circus.",
    image: "https://picsum.photos/id/280/400/300",
    published: 2011,
    price: 11.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174045",
    title: "The Woman in the Window",
    author: "A.J. Finn",
    description:
      "A psychological thriller about an agoraphobic woman who believes she has witnessed a crime in her neighbor's house.",
    image: "https://picsum.photos/id/281/400/300",
    published: 2018,
    price: 9.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174046",
    title: "Before We Were Strangers",
    author: "Renée Carlino",
    description:
      "A novel about a couple who reconnect after years apart and explore the love they lost.",
    image: "https://picsum.photos/id/282/400/300",
    published: 2015,
    price: 8.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174047",
    title: "The 5th Wave",
    author: "Rick Yancey",
    description:
      "A science fiction novel about an alien invasion and the struggle for survival of the human race.",
    image: "https://picsum.photos/id/283/400/300",
    published: 2013,
    price: 10.99,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174048",
    title: "Divergent",
    author: "Veronica Roth",
    description:
      "A dystopian novel about a society divided into factions and a girl who discovers she is Divergent.",
    image: "https://picsum.photos/id/284/400/300",
    published: 2011,
    price: 9.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174049",
    title: "Ready Player One",
    author: "Ernest Cline",
    description:
      "A science fiction novel about a young man's quest to find an Easter egg in a virtual reality world.",
    image: "https://picsum.photos/id/285/400/300",
    published: 2011,
    price: 10.49,
  },
  {
    id: "123e4567-e89b-12d3-a456-426614174050",
    title: "The Goldfinch",
    author: "Donna Tartt",
    description:
      "A novel about a young boy who survives a terrorist attack and steals a famous painting.",
    image: "https://picsum.photos/id/286/400/300",
    published: 2013,
    price: 13.99,
  },
];

export default books;
