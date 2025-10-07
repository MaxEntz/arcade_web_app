import './App.css'

function MyButton({ title }: { title: string }) {
  return (
    <button>{title}</button>
  );
}

function App() {

  return (
    <>
      <h1 id="brand_name">Arcade Games</h1>
      <div id="btn_game">
        <MyButton title ="Black Jack" />
        <MyButton title ="Snake" />
        <MyButton title ="Russian Roulette" />
        <MyButton title ="Slot Machine" />
      </div>
    </>
  )
}

export default App
