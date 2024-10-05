# Hello & Weather

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

vise o tome: https://medium.com/@yogeshblogger14/mastering-react-js-best-practices-for-professional-naming-conventions-b0a6343dd0fd

## Jednostavan primjer Greetings:

- U mapi Greetings imamo Goodbye.js, Hello.js i index.js. Na ovom primjeru provjezbam kako se komponente importaju iz drugih komponenata i kako ih iskoristit u App.js

- kreacija komponente:

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

- Kada koristimo komponente za razliku od JS-a trebamo koristiti return(). return() vraca podatke koje smo proslijedili u komponenti, koji tada parent komponenta moze koristiti. Generalno se koristi kada želimo vratiti jednu vrijednost iz komponente.

(render vs return)

### Export:

- Da bi smo iskoristili naše komponente potrebno ih je "export". Tu dolazi u igru index.js kao naš sabirni centar svih naših komponenata u toj mapi.

- defalut export:
  export { default as NekaKomponenta } from "./NekaMapa";

- named export:
  export {NekaKomponenta} from "./NekaMapa"

\*zanimljivo: https://dev.to/phuocng/avoid-using-default-exports-a1c

- slijed radnje:
  NekaKomponenta > index.js > App.js

- U App.js zelimo iskoristiti našu komponentu. Prvo ju trebamo "importat".

import NekaKomponenta from "./components/NekaMapa/NekaKomponenta";

te ju iskorititi:

function App() {
return (

<div>
    <main>
        <NekaKomponenta/>
    </main>
</div>
);
}

## Props

U Greetings.js koristimo props
props je skraceno za properties
props su kao argumenti u JS
