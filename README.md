# Hello & Weather - primjeri komponenata u ReactJS

## Zadatak

Potrebno napraviti React aplikaciju koja će imati slijedeće:

1.  Napraviti novu React aplikaciju.
2.  Potrebno je napraviti dvije komponente
3.  Glavna komponenta poziva drugu komponentu ConditionalRendering sa svojstvom (props) number
4.  U ovisnusti o poslanom broju treba ispisati drukčiji tekst
5.  Ako se pošalje nedefinirani broj, komponenta ConditionalRendering ništa ne ispisuje

## Rješenje

1.  Kreiramo React aplikaciju sa:

- npx create-react-app my-app

2.  Kreiranje dvije komponente

- Komponente konvencijski stavljamo u folder "components" i ime nase mape treba opisivati što se unutra nalazi. Sve komponente koji su povezani stavljamo u taj folder.
- Naziv nase datoteke treba biti isti naziv kao i naša komponenta
- Svaka komponenta treba imati svoju datoteku. - nisam stavio neke komponente u zasebnu datoteku iz razloga jer taj kod samo tu koristim za primjer i radi brzine.

vise o tome na: [Medium](https://medium.com/@yogeshblogger14/mastering-react-js-best-practices-for-professional-naming-conventions-b0a6343dd0fd)

### Jednostavan primjer Greetings:

- U mapi Greetings imamo Goodbye.js, Hello.js i index.js. Na ovom primjeru provjezbam kako se komponente importaju iz drugih komponenata i kako ih iskoristit u App.js

- kreacija komponente:

```
import React from "react";

function NekaKomponenta() {
return (
<>
  <p>Ovo je samo primjer</p>
  <p>Kako napraviti komponentu.</p>
</>
  );
}

export default NekaKomponenta;
```

- Kada koristimo komponente za razliku od JS-a trebamo koristiti return(). return() vraca podatke koje smo proslijedili u komponenti, koji tada parent komponenta moze koristiti. Generalno se koristi kada želimo vratiti jednu vrijednost iz komponente.

(render vs return)

### Export:

- Da bi smo iskoristili naše komponente potrebno ih je "export". Tu dolazi u igru index.js kao naš sabirni centar svih naših komponenata u toj mapi.

- defalut export:
  export { default as NekaKomponenta } from "./NekaMapa";

- named export:
  export {NekaKomponenta} from "./NekaMapa"

default vs named export.
više o tome na: [Dev](https://dev.to/phuocng/avoid-using-default-exports-a1c)

- slijed radnje:
  NekaKomponenta > index.js > App.js

- U App.js zelimo iskoristiti našu komponentu. Prvo ju trebamo "import".

```
import NekaKomponenta from "./components/NekaMapa/NekaKomponenta";
```

te ju iskorititi:

```
function App() {
return (

<div>
    <main>
        <NekaKomponenta/>
    </main>
</div>
  );
}
```

### Props

U Greetings.js koristimo props

- props je skraceno za properties
- props su kao argumenti u JS
- props su argumenti koji se prosljeđuju u React komponentama.
- props se prosljeđuje komponentama kao HTML atribut:

```
const myElement = <Car brand="Toyota">
```

- komponente primaju argument props kao objekt:

```
function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

const myElement = <Car brand="Toyota">
```

- I za primjer kako cemo iskoristiti komponentnu funkciju i varijablu myElement.
  Slijed radnje:

1. export komponentu i varijablu
2. navesti export u našem "sabirnom centru" index.js
3. u App.js importati komponentnu funkciju i varijablu
4. napisati je u funkciji App i iskoritite oboje.

- probajte iskoristiti "Car" komponentu u drugoj komponenti, napraviti novi .js recimo Brands. Dodajte svoj auto i napisati je u App.js

primjer Brands.js:

```
import React from "react";
import {Car} from Car.js

export function Brands(){
  <p>Danas vozim: <Car brand="VasAuto"/></p>
}
```

- isto tako mozemo proslijediti "myElement" varijablu u komponentu Car, pa cemo ju iskoristiti na ovaj nacin:

```
  const myElement = "Ford";
  <Car brand={myElement}/>
```

- kreirajte objekt pomocu props i iskoristite ju u Brands komponenti. Napravit cemo novu varijablu myCar.

```
function Car(props){
  <>{props.brand.name}</>
};

function Brands(){
  myCar = {name: Toyota, model: Celica};
return(
  <p>Danas vozim: <Car brand={myCar}></p>
  );
}
```

U Car komponenti mozemo mjenjati sto hocemo prikazati "name" ili "model" u Brands komponenti.

### Da se vratimo na Greetings

3. Glavna komponenta poziva drugu komponentu ConditionalRendering sa svojstvom (props) number.

Prije nego sto krenimo na pozivanje pomocu brojeva napravio sam za primjer za "Conditional Rendering.

- Koristimo tri komponente: Hello, Goodbye i Greetings
- U Hello i Goodbye ispisemo zeljeni tekst
- prosljedimo props kao argument u Greetings komponenti
- u varijablu spremimo props argument, koristimo ju kao stanje ("condition")

```
const isHello = props.isHello
```

- Dali necega ima ili nema i na temelju toga vratimo vrijednost.

Ternary operator:

```
return <>{isHello ? <Hello/> : <Goodbye />}</>;
```

ovo se moze zapisati na nekoliko načina:

if operator:

```
if(isHello){
  return <Hello/>;
}
else {
  return <Goodbye>;
}
```

Logički operator &&:

```
return (
<>
  {isHello && <Hello/>}
  {!isHello && <Goodbye/>}
</>
);
```

Glavna komponenta poziva drugu komponentu ConditionalRendering sa svojstvom props number.

```
function ConditionalRendering(props){
  number = props.number;

}

function GlavnaKomponenta(){
  <ConditionalRendering number={broj?}>
}
```

4. U ovisnusti o poslanom broju treba ispisati drukčiji tekst

```
import React from "react";

function ConditionalRendering(props){
  number = props.number;

if(number < 50){
  return <p>Danas ce biti ljep dan</p>;
}
if(number > 50){
  return <p>Danas ce bit kišni dan</p>;
  }
}

function GlavnaKomponenta(){
  const number = 20;
<ConditionalRendering number={number}/>
}
```

5.  Ako se pošalje nedefinirani broj, komponenta ConditionalRendering ništa ne ispisuje

```
import React from "react";

function ConditionalRendering(props){
  number = props.number;

if(number < 50){
  return <p>Danas ce biti ljep dan</p>;
}
else if(number > 50){
  return <p>Danas ce biti kišni dan</p>;
}
else{
  return null;
  }
}

function GlavnaKomponenta(){
  const number = 20;

<>
  <h1>Kakav ce dan danas biti:</h1>
  <ConditionalRendering number={number}/>
  </>
}
```

- možemo provjeriti dali je varijabla "number" broj, ako nije da nista ne ispisuje

```
if(isNan(number)){
  return //<p>Error: Enter a number.</p>;
}
```

## Definicije

### Kada koristimo fragment?

- Fragment je svojstvo u React-u kojeg koristimo kada zelimo grupirati vise elemenata kao lista djece bez da dodajemo dodatne nodove u DOM-u.

### Kakve komponente imamo i kako ih dijelimo?

- Komponente definirane funkcijom i komponente definirane klasom

- Dijelimo ih na složene(stateful) i jednostavne(stateless)

### Što su to jednostavne, a što složene komponente?

- jednostavne(stateless) komponente ispisuju zadanu informaciju i nemogu promjeniti svoje stanje, dok složene (stateful) komponente mijenjaju informaciju prema inputu korisnika.

Primjer stateless i stateful komponente su Weather i ActiveWeather, a i napravili smo i par stateless primjera.

Ako uočite negdje grešku na ovim primjerima ili definicijama ili ako imate svojih zadataka mozemo ih proći ovdje. Ako bi htjeli nešto bolje napisati/dodati možete na git-u poslati request kao vježbu. 😄
