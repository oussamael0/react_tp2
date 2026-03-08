import { useState } from 'react';

function MessageBouton() {
  const messages = ["Premier clic", "Deuxième clic", "Troisième clic"];
  const [index, setIndex] = useState(0);

  const changerMessage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div>
      <p>{messages[index]}</p>
      <button onClick={changerMessage}>Cliquer</button>
    </div>
  );
}

export default MessageBouton;