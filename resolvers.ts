import { config } from "https://deno.land/x/dotenv@v2.0.0/mod.ts";
import { movies, users } from "./connection.ts";

const resolvers = {
  Query: {
    users: () => users,
    roll: async (root: any, { input }: any, context: any, info: any) => {
      const allMovies: any = await movies.find().toArray();
      const filtered = allMovies.filter((item: any) => !input.includes(item));
      return await (
        await fetch(
          config().URIHEAD +
            filtered[Math.floor(Math.random() * filtered.length)].Title +
            config().URITAIL
        )
      ).json();
    },
  },
  Mutation: {
    register: async (
      _: any,
      { input: { username, mail, password } }: any,
      context: any,
      info: any
    ) => {
      const tmp = await users.findOne({ mail });
      if (tmp === undefined) {
        const movies = {
          wathced: [],
          later: [],
          declined: [],
          current: {},
        };
        await users.insertOne({ username, mail, password, movies });
        return true;
      }
      return false;
    },
    update: async (
      _: any,
      { input: { movies, mail } }: any,
      context: any,
      info: any
    ) => {
      //update user movies as movies
      console.log(movies);
      await users.updateOne({ mail: mail }, { $set: { movies: movies } });
      return true;
    },
    login: async (
      _: any,
      { input: { mail, password } }: any,
      context: any,
      info: any
    ) => {
      const tmp = await users.findOne({ mail, password });
      return tmp;
    },
  },
};

export default resolvers;
