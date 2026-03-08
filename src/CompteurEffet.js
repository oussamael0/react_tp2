import { useState, useEffect } from 'react';

function CompteurEffet() {
  const [compte, setCompte] = useState(0);

  useEffect(() => {
    document.title = `Vous avez cliqué ${compte} fois`;
  }, [compte]);

  return (
    <div>
      <p>Nombre de clics : {compte}</p>
      <button onClick={() => setCompte(compte + 1)}>Cliquez-moi</button>
    </div>
  );
}

export default CompteurEffet;