import { useState } from 'react';

function FormulaireNom() {
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Prénom: ${prenom}\nEmail: ${email}`);
    setPrenom('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Prénom: 
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>Email: 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Soumettre</button>
    </form>
  );
}

export default FormulaireNom;