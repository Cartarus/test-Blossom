interface Character {
    name: string;
    species: string;
    image: string;
  }
  
  export const characters: Character[] = [
    {
      name: "Rick Sanchez",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty Smith",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
    {
      name: "Summer Smith",
      species: "Human",
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    },
  ];