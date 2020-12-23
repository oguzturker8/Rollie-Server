# Rollie-Server

# Deno Oak-GraphQL Server uses MongoDB

# Usage

###  - `git clone https://github.com/oguzturker8/Rollie-Server.git`
###  - create `.env` file on root directory
### .env file:
|Variable|Value|
|-|:-----:|
|`PORT`|Port Number
|`HOST`|MongoDB Host Adress #! Deno-Mongo Driver not support Mongo Atlas rn. Use host like `mongodb://ADRESS:/PORT Default Port Number is 27017
|`DB`|YOUR MongoDB Database Value Default ValueIS "rollie"
|`USERS`|YOUR MongoDB Collection Value Default Value is "users"
|`MOVIES`|Your MongoDB Collection Value Default Value is "movies"
|`URIHEAD`|Omdb Api Head Default Value is "http://www.omdbapi.com/?t="
|`URITAIL`|Omdb Api Key Tail "&apikey=<YOUR_OMDB_API_KEY>"

###  - Run Command on Command Prompt `deno run --allow-net --allow-read server.ts`
