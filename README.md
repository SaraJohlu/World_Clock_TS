# World clock - Examinations uppgift i kurs TypeScript
<b><i>Applikation som visar världens alla städers olika tid zoner och konverterar det till tid</i></b>   
KYHA_FE2024   
Sara JL 

## Dokumentation
TypeScript har många fördelar, men det tar sin tid att lära sig det, som med all kod. 
I min applikation har jag använt props (så som propsCity, savedCitiesProps, propsCties) i många av mina komponenter för att sedan använda de vid "kallning" i
"föräldra" komponenten App av funktioner från de andra komponenterna.    
Det positiva har varit alla de röda understrukna orden som förekommit, istället för att programmet kraschar och   
jag sedan behövt sitta flera timmar med att läsa av error meddelanden i consolen. Där av en stor fördel med att använda TypeScript!
Props måste dock användas på rätt sätt och där kommer det behövas nöta mer. 

Jag har använt mig av ett och samma interface för City hantering. Lätt att uppdatera alla komponenter istället för att skapa flera olika.   
Dessutom meddelar TS att alla filer med samma interface måste ändras vid någon ändring av interface. Mina props har varit kopplade med detta interface   
vilket ledd till att programmet alltid skickat in data i en och samma array. 

Genom att jag använder Vite tillsammans med TS och React så transibileras mitt projekt genom esbuild, vilket gör att min TS kompilator körs via esbuild som gör det   
snabbare än vanligt och gör om det till vanlig Javascript filer som i sin tur är det som körs i webbläsaren.   
Alla de moduler, assets och css som jag använt mig i mitt projekt bundlas ihop till min dist-mapp som i stora hela betyder att vid build gör om alla filer till läsbara   
Javascript filer, i runtime körs fortfarande TS. Med runtime menas under utvecklingens period. Så fort npm run build körs i terminalen transpileras filerna om och det som sedan syns   
i min dist-mapp är javascript. 

## Loggbok - Min arbetsprocess

### Planringen
Använde den klassiska papper och penna tillsammans med Figjam. Började med att skissa upp hur jag ville att applikationen skulle se ut.   
Vilka komponenter jag tänkte att jag skulle behöva ha, hur jag själv kände att appen skulle se ut rent stilmässigt. Vidare i figma började jag   
skapa userstories, en egen kanban tavla för att hålla reda på min arbetsprocess. Jag mappade upp mina tankar i en mindmap/brainstorm.   

Skissen av själva applikationen var trög, jag fick inga bra idéer och blev en aning stressad över att hjärnan inte riktigt ville arbeta med mig.   
Därav är jag inte super nöjd med hur min stil av applikationen just nu ser ut. Det blev styling under arbetsprocessen av koden, vilket jag egentligen inte gillar. 
Brukar ha en prototyp att gå efter annars.   

https://www.figma.com/board/myu7CTty2nDMta5QhXIupT/Untitled?node-id=0-1&t=yUTS9vaxV9nnZZUH-1   
Nedan är min figjam som visar lite hur jag har planerat under resans gång. Det är inte allt då mycket finns i huvudet.

### Applikationen
Mina komponenter ska vara till för att lättare kunna organisera och strukturera min kod, det ska vara simplare att hämta en komponent med props för att hantera funktoner och dessutom   
vid behov av ändring. Det är lättare att gå tillbaka och göra ändringarna istället för att kolla igenom en och samma fil, då det lättare kan bli rörigt. Att ha olika komponenter gör det också lättare vid styling av projektet. 

De komponenter jag försökt hålla mig till i mitt projekt är 
- App.tsx som fungerar som grunden av projektet, i denna valde jag att skapa min header med animation som i sin tur kommer från en annan komponent som heter ImgShuffle. En animiation som med hjälp av function och css shufflar igenom bilder med en ease out som gör att bilderna fade:ar ut.
- DefaultCities.tsx fungerar som min 
