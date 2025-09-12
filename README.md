# World clock - Examinations uppgift i kurs TypeScript
<b><i>Applikation som visar världens alla städers olika tid zoner och konverterar det till tid</i></b>   
KYHA_FE2024   
Sara JL 

## Dokumentation
TypeScript har många fördelar, men det tar sin tid att lära sig. 
I min applikation har jag använt props (så som propsCity, savedCitiesProps, propsCties) i många av mina komponenter för att sedan använda de vid "kallning" i
"föräldra" komponenten App av funktioner från de andra komponenterna.    
Det positiva har varit alla de röda understrukna orden som förekommit, istället för att programmet kraschar och   
jag sedan behövt sitta flera timmar med att läsa av error meddelanden i consolen. Där av en stor fördel med att använda TypeScript!
Props måste dock användas på rätt sätt och där kommer det behövas nöta mer. 

Jag har använt mig av ett och samma interface för City hantering. Lätt att uppdatera alla komponenter istället för att skapa flera olika.   
Dessutom meddelar TS att alla filer med samma interface måste ändras vid någon ändring av interface. Mina props har varit kopplade med detta interface   
vilket ledd till att programmet alltid skickat in data i en och samma array. 

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
