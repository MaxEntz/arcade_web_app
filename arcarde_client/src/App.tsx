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
      <div id="main_menu">
        <h1 id="brand_name">Arcade Games</h1>

        <div id="btn_game">
          <MyButton title="Black Jack" onClick={() => setCurrentGame('blackjack')} />
          <MyButton title="Snake" onClick={() => setCurrentGame('blackjack')}/>
          <MyButton title="Russian Roulette" onClick={() => setCurrentGame('blackjack')}/>
          <MyButton title="Slot Machine" onClick={() => setCurrentGame('blackjack')}/>
        </div>
      </div>
      <div id="auth_section">
          <MyButton title="Sign In / Sign Up" onClick={() => setCurrentGame('blackjack')}/>
      </div>
    </>
  )
}

export default App
