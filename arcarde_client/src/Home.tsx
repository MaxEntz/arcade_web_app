import { useNavigate } from 'react-router-dom';
import './App.css'

function MyButton({ title, onClick }: { title: string; onClick?: () => void }) {
  return (
    <button onClick={onClick}>{title}</button>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div id="main_menu">
        <h1 id="brand_name">Arcade Games</h1>

        <div id="btn_game">
          <MyButton title="Black Jack" onClick={() => navigate('/blackjack')} />
          <MyButton title="Snake" onClick={() => navigate('/snake')}/>
          <MyButton title="Russian Roulette" onClick={() => navigate('/roulette')}/>
          <MyButton title="Slot Machine" onClick={() => navigate('/slots')}/>
        </div>
      </div>
      <div id="auth_section">
          <MyButton title="Sign In / Sign Up" onClick={() => navigate('/login')}/>
      </div>
    </>
  )
}

export default Home
