import PesronCard from "./components/PesronCard";


function App() {
  return (
    <div className="App">

    <PesronCard firstName="Bayan" lastName = "Abu Sarari" initialAge ={27} hairColor = "Very Dark Brown"/>

    <PesronCard firstName="Renad" lastName = "Barakat" initialAge ={27} hairColor = "Dark Golden Brown"/>
    
    <PesronCard firstName="Raneem" lastName = "Jiann" initialAge ={27} hairColor = " Coffee"/>

    <PesronCard firstName="Reem" lastName = "Joudeh" initialAge ={29} hairColor = "Chestnut Mahogany"/>
  

    </div>

  )
}

export default App
