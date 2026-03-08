import MessageBouton from './MessageBouton';
import FormulaireNom from './FormulaireNom';
import CompteurEffet from './CompteurEffet';

function App() {
  return (
    <div>

      <h2>Exercice 1 : Affichage dynamique</h2>
      <MessageBouton />

      <h2>Exercice 2 : Formulaire inscription</h2>
      <FormulaireNom />

      <h2>Exercice 3 : Compteur avec effet personnalisé</h2>
      <CompteurEffet />
    </div>
  );
}

export default App;