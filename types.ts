import { gql } from "https://deno.land/x/oak_graphql/mod.ts";

const typeDefs = gql`
  type User {
    username: String!
    mail: String!
    password: String!
    movies: Movies!
  }

  type Movies {
    watched: [Movie]!
    later: [Movie]!
    declined: [Movie]!
    current: Movie!
  }

  type Movie {
    Title: String
    Year: String
    Rated: String
    Released: String
    Runtime: String
    Genre: String
    Director: String
    Writer: String
    Actors: String
    Plot: String
    Language: String
    Country: String
    Awards: String
    Poster: String
    Ratings: [Ratings]
    Metascore: String
    imdbRating: String
    imdbVotes: String
    imdbID: String
    Type: String
    DVD: String
    BoxOffice: String
    Production: String
    Website: String
    Response: String
  }

  type Ratings {
    Source: String
    Value: String
  }

  input RegisterInput {
    username: String!
    mail: String!
    password: String!
  }
  input LoginInput {
    mail: String!
    password: String!
  }

  input UpdateInput {
    movies: MoviesInput!
    mail: String!
  }

  input MoviesInput {
    watched: [MovieInput]
    later: [MovieInput]
    declined: [MovieInput]
    current: MovieInput!
  }

  input MovieInput {
    Title: String
    Year: String
    Rated: String
    Released: String
    Runtime: String
    Genre: String
    Director: String
    Writer: String
    Actors: String
    Plot: String
    Language: String
    Country: String
    Awards: String
    Poster: String
    Ratings: [RatingsInput]
    Metascore: String
    imdbRating: String
    imdbVotes: String
    imdbID: String
    Type: String
    DVD: String
    BoxOffice: String
    Production: String
    Website: String
    Response: String
  }

  input RatingsInput {
    Source: String
    Value: String
  }

  type Query {
    users: [User]
    roll(input: [String]): Movie
  }

  type Mutation {
    register(input: RegisterInput): Boolean
    login(input: LoginInput): User
    update(input: UpdateInput): Boolean
  }
`;

export default typeDefs;
