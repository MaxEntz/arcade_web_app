import './App.css'
import Blackjack from './blackjack/blackjack'
import { useState } from 'react'

function MyButton({ title, onClick }: { title: string; onClick?: () => void }) {
  return (
    <button onClick={onClick}>{title}</button>
  );
}

function App() {
  const [currentGame, setCurrentGame] = useState<string | null>(null);

  if (currentGame === 'blackjack') {
    return <Blackjack />;
  }

  return (
    <>
      <h1 id="brand_name">Arcade Games</h1>
      <div id="btn_game">
        <MyButton title="Black Jack" onClick={() => setCurrentGame('blackjack')} />
        <MyButton title="Snake" />
        <MyButton title="Russian Roulette" />
        <MyButton title="Slot Machine" />
      </div>
    </>
  )
}

export default App
