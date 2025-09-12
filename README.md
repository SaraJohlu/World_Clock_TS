# World clock - Examinations uppgift i kurs TypeScript
<b><i>Applikation som visar världens alla städers olika tid zoner och konverterar det till tid</i></b>   
KYHA_FE2024   
Sara JL 

<img width="1920" height="872" alt="World_clock" src="https://github.com/user-attachments/assets/6172f4b2-2d7f-4198-aba8-de292a4ccddd" />


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

### Planeringen
Använde den klassiska papper och penna tillsammans med Figjam. Började med att skissa upp hur jag ville att applikationen skulle se ut.   
Vilka komponenter jag tänkte att jag skulle behöva ha, hur jag själv kände att appen skulle se ut rent stilmässigt. Vidare i figma började jag   
skapa userstories, en egen kanban tavla för att hålla reda på min arbetsprocess. Jag mappade upp mina tankar i en mindmap/brainstorm.   

Skissen av själva applikationen var trög, jag fick inga bra idéer och blev en aning stressad över att hjärnan inte riktigt ville arbeta med mig.   
Därav är jag inte super nöjd med hur min stil av applikationen just nu ser ut. Det blev styling under arbetsprocessen av koden, vilket jag egentligen inte gillar. 
Brukar ha en prototyp att gå efter annars.   

https://www.figma.com/board/myu7CTty2nDMta5QhXIupT/Untitled?node-id=0-1&t=yUTS9vaxV9nnZZUH-1   
Nedan är min figjam som visar lite hur jag har planerat under resans gång. Det är inte allt då mycket finns i huvudet.
Och man kan se på mina skisser att allt inte riktigt blev som jag från början planerade. 

### Applikationen
Mina komponenter ska vara till för att lättare kunna organisera och strukturera min kod, det ska vara simplare att hämta en komponent med props för att hantera funktoner och dessutom   
vid behov av ändring. Det är lättare att gå tillbaka och göra ändringarna istället för att kolla igenom en och samma fil, då det lättare kan bli rörigt. Att ha olika komponenter gör det också lättare vid styling av projektet. 

<b>De komponenter jag försökt hålla mig till i mitt projekt är</b> 
- App.tsx som fungerar som grunden av projektet, i denna valde jag att skapa min header med animation som i sin tur kommer från en annan komponent som heter ImgShuffle. En animiation som med hjälp av function och css shufflar igenom bilder med en ease out som gör att bilderna fade:ar ut.
- DefaultCities.tsx fungerar som min grund av städer som redan finns inlagda i appens data, via en JSON fil som heter defaultCities.json.
- CityData.tsx: ` export interface City {
    city: string;
    country: string;
    timezone: string;
}
 `  importeras in i denna komponent för att med propsCities kunna spara default städer till användarens sparade lista. Funktionen förhindrar också att användaren kan spara dubletter.
  `interface propsCities {
  cities: City[];
  setCities: React.Dispatch<React.SetStateAction<City[]>>;
}`   
Istället för att tidzonerna ska visas som IANA format i applikationen så görs också detta om till en klocka som visar exakt tid för den staden.

`const localTime = (timezone: string) => {   
    return new Intl.DateTimeFormat("sv-SE", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date());
  };`


- CityData.tsx är en mindre komponent som ska fungera som iinterface mall för alla komponenter för att i dessa sen använda props utifrån denne mall.
- LocalStorage.tsx komponenten håller funktioner för hur man sparar till localstorage, samt hur man sedan ska kunna ta bort. Denne har en egen type City men som ser likadan ut som interface City. LocalStorage.tsx tillhandla håller också en speciell key som används i de andra komponenterna när det ska skickas in ny uppdaterad data till localstorage.
- AddNewCity.tsx använder sig av interface City vid användning av propsCity. Dessa props sätts in i funktionen för att användaren ska kunna ha möjligheten att lägga till en stad och tidzon ifall den inte finns med i default listan av städer. Med react hook useState har jag gjort så att när man manuellt ska skriva in en tidzon så kommer autoförslag upp för användaren för enklare användning. Denna data hämtas från min <worldsTimeZones.json> fil som tillanda håller alla världens olika tidzoner med speciella keys, kontinenter, som då visar en lista med kontinenterna istället för hela listan med exempelvis europas städer. På detta sätt så kan användaren lättare hitta och lägga till en ny stad. Här finns också en funktion som förhindrar användaren att spara samma stad flera gånger om användaren inte skulle döpa just denna till olika saker, applikationen kommer också säga till om användaren inte har fyllt i något fält samt meddela när en stad utan problem har sparats.
Denna nya data skickas sedan in i localstorage.

  `interface propsCity {
  newCity: City[]; 
  setNewCity: React.Dispatch<React.SetStateAction<City[]>>;}`

  
- SavedCities.tsx innehåller alltså alla funktioner som visar användarens sparade städer men också med möjlighet av en digital klocka och en analog klocka. Den analoga klockan kommer från react-clock. Även här kan användaren radera städer från sin lista om denne vill. Skulle listan vara tom får användaren ett meddelande om att listan är tom. Även i denna har jag använt props vid namn SavedCitiesProps som funkar utifrån interface City.

  `interface SavedCitiesProps {
  cities: City[]; 
  setCities: React.Dispatch<React.SetStateAction<City[]>>;`

Valet av dessa komponenter kom från planen att dela upp de olika features från userstories på ett lätt-användligt sätt. De mindre komponenterna ville jag ha för att lättare komma ihåg var den eller de uppsättning av funktioner ligger. 

## Git användning
Som start började jag med att starta ett Vite projekt med React-TypeScript. Därefter fixade jag att denna projektmapp fick en lokal git. Efter detta kopplade jag mitt nya repo på min Github med Git lokalt. Eftersom jag har jobbar själv valde jag att jobba utifrån main branch, det jag har gjort för att det ska rulla på bra hela tiden är att göra mina sparningar, commits och pushar via terminalen i VS-Code. På det sättet har jag under hela resans gång varit uppdaterad med nyaste förändringarna. 
Commits har jag gjort vid varje viktig ändring och vid varje avslutat "sessionspass". 
Det enda som varit en skillnad har varit vid dokumentationen av README filen. Eftersom jag skrivit på den på github för preview möjligheten så har jag fått komma ihåg att göra en git pull via min VS-code innan eventuellt fortsatt arbete på koden. 

För att kunna göra en realse på git pages installerade jag gh pages i mitt projekt där mitt repo sedan var tvunget att skrivas in package.json samt vite.config.ts filerna för att fungera korrekt. Det är under denna process som min TS har transpilieras till JS för att kunna visas på git pages, detta med hjälp av npm run build och sedan npm run deploy i terminalen.  

För att testa min applikation har använt mig av liveServer genom att skriva in npm run dev i terminalen. LiveServer fungerar under utvecklingsmiljö då det är en localhost. Här fungerar alltså min TS kod. Något som jag behöver utveckla mer är console.error meddelanden eller bara console.log meddelanden för att genom console kunna se att fungerar vid debugging. 

## Noteringar 
Applikationen är inställd på svensk tid eftersom det är där jag lever, dock så är appen skriven på engelska samt allt content som visas på broswern äe skriven på engelska. 
