import React, { useState, useEffect } from 'react';

function ClientComponent() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.querySelectorAll('.risk-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          setScore(score + 1);
        } else {
          setScore(score - 1);
        }
      });
    });
  }, [score]);

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 text-4xl">
      <h2 className="titulo text-black">Pontuação</h2>
      <div className="pontuação">
        <span id="scoreDisplay" className="text-4xl text-black">{score}</span>
      </div>
    </div>
  );
}

export default ClientComponent;
