# World Clock Application 
<b>Sara Johnson Lundén</b>
klass: KYHA-FE2024
TypeScript examinations uppgift

# The App, World Clock
Applikation skapad med TypeScript och React med Vite. 

<b>Komponenter jag skapat för detta projekt är</b>
- <underline>HomeCities.tsx</underline>: Fungerar som default, i denna har jag 20 större städer samt deras tidzoner som ska fungera som default cities för användaren.   
Datan hämtas ifrån JSON filen defaultCities.json.
Denna komponent möjliggör också att man kan spara, "Favorisera", dessa städer genom en knapp. OnClick funktion på knappen skickar in den staden in i 
Localstorage.tsx som innehåller funktioner där det användaren vill spara sparas i en array som sparas ner på localstorage.


## App
I App.tsx använder jag Routes för att användaren lätt ska kunna navigera genom de komponenter som min applikation innehåller. Det renderar också snabbare. 

## Default Cities
- worldsTimezone.json: is the JSOn file that provides the worlds all different timezones when wanting to add new City or country to the application as a user. The list is devided into timezones continentials. Instead of doing a dropdown menu of all the countries and its cities, I'll put it in timezone categories.
- Mark as favorite and adding new city/country: Doing this as a user will save the data to localstorage. 

## Save and starmark the default cities
- defaultCities.json: Is the JSON file that will provide the already existing countries and cities when you use the application. They are configured in city, country and Timezone. The IANA-timezone format is going to be converted into time with Intl.DateTimeFormat. This will display the time and not the name of the timezone on page.

## Add a new city to our list of cities

## Save to Localstorage

# Loggbok


## Style
Personligen är jag inte alls nöjd med hur gränsnittet ser ut, men tidsmässigt kände inte jag att jag hade den tiden att utveckla det som jag velat. 