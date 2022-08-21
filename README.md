# First Generation Pokedex

<h2>About</h2>

Pokemon is a popular videogame series featuring fantastical elemental monsters called Pokemon (short for "Pocket Monsters") that a player can catch and train to fight other players. I came across the <a href="https://pokeapi.co/">PokeAPI</a>, an API that contains data for each Pokemon, including its height, weight, types and battle stats. The Pokemon franchise remained a popular franchise amongst millenials and the younger generation. Hence, I thought it'll be a fun project to create an unofficial Pokedex (short for "Pokemon Index") listing all the original 151 Pokemon that a user could use to learn more about their favourite monsters.

I built the first version of the <a href="https://github.com/wteo/firstGenPokedexOld">Pokedex</a> in February 2022 out of vanilla JavaScript.

![image](https://user-images.githubusercontent.com/87306585/185770692-cb25b8be-a276-4272-9738-1c0ffe22af31.png)
<br/>
(A screenshot of the first version of the Pokedex.)

The first Pokedex left a lot to be desired. It only has a simple box design featuring the image sprite of a Pokemon and its basic details and it only acts as a list with no search feature or interactivity. In spite of this, it was sufficient at that point in time for me whilst learning and understand the Fetch method.

After I started learning React and felt comfortable enough with the UI Library, I decided to create a more complete and interactive version of the Pokedex. And this is the <a href="https://master--benevolent-chebakia-d0ea73.netlify.app/">result</a>.

<br/>
<h2>Key Features</h2>

<h4>Overall Design</h4>

The app was intentionally designed with a simple restrospective 1990s videogames feel to it. To match with the image sprites found in the API, I pixelated the navigation arrows as well as the font of the Pokemon species name.

The Pokemon are grouped in the order of their evolutionary lines. They are also listed in the same order as the listing of the official Pokedex. 

The Pokedex contains two buttons:
1. The Data Buttton; and
2. The Search Button.

![image](https://user-images.githubusercontent.com/87306585/185770674-7c66852f-9f52-4d1b-91c0-639ebb314777.png)

<br/>
<h4>Extracting the Data</h4>

When you click on the Data Button, a hidden box will appear that contains some basic data of the current Pokemon. The data I extracted from the API includes each of the Pokemon sprite image, species name, type(s), height and weight. 

![image](https://user-images.githubusercontent.com/87306585/185770721-79be4a1f-4c41-4ab5-8738-80abdd236f6d.png)


<br/>
<h4>The Search Engine</h4>

![image](https://user-images.githubusercontent.com/87306585/185770752-47f937df-3f43-419a-b85f-1402b57a3e1e.png)


<br/>
End.
<br/>

