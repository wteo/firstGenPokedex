# First Generation Pokedex

<h2>About</h2>

Pokemon is a popular videogame series featuring fantastical elemental monsters called Pokemon (short for "Pocket Monsters") that a player can catch and train to fight other players. I came across the <a href="https://pokeapi.co/">PokeAPI</a>, an API that contains data for each Pokemon, including its height, weight, types and battle stats. The Pokemon franchise remained a popular franchise amongst millenials and the younger generation. Hence, I thought it'll be a fun project to create an unofficial Pokedex (short for "Pokemon Index") listing all the original 151 Pokemon that a user could use to learn more about their favourite monsters.

I built the first version of the <a href="https://github.com/wteo/firstGenPokedexOld">Pokedex</a> in February 2022 out of vanilla JavaScript.

![image](https://user-images.githubusercontent.com/87306585/185770770-93f7fcc4-71ee-4e49-9aaf-28609ae355c1.png)
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

![image](https://user-images.githubusercontent.com/87306585/185770780-8444d6a3-fc4d-48ba-8232-3bc447308dbf.png)

<br/>
<h4>Extracting the Data</h4>

When you click on the Data Button, a hidden box will appear that contains some basic data of the current Pokemon. The data I extracted from the API includes each of the Pokemon sprite image, species name, type(s), height and weight. 

![image](https://user-images.githubusercontent.com/87306585/185770786-1fe3b3a9-067d-4c2b-9b9a-fa654c1fa6c0.png)


<br/>
<h4>The Search Engine</h4>

![image](https://user-images.githubusercontent.com/87306585/185770789-8736e5e9-5793-4a92-b13b-5bb3e7ff65b4.png)


<br/>
End.
<br/>

