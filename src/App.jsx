
import './App.css'
import Counter from './counter'
import Players from './Team'
import Friends from './Friends'
function App() {
  function handleClick(){
    alert('button click')
  }
  const handleClick2 = () =>{
    alert('botton on click')
  }
  const handle4 =(num)=>{
    alert (num+5)
  }



  return (
    <>
      <h3>core React concepts</h3>
      <Friends></Friends>
      <Counter></Counter>
      <Players></Players>


      <button onClick={handleClick}>click</button>
      <button onClick={handleClick2}> click me </button>
      <button onClick={ () => alert('third click')}>third</button>
      <button onClick ={()=>handle4(3)}>four</button>
    </>
  )
}

export default App
