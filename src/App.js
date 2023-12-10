import app from "./firebase/config"; // Import the 'app' object

function App() {
  const mobile = {
    name: 'mi',
    price:5454
  };
  const addproduct =()=>{
app.firestore().collection('products').doc('0AL0EhSJ79YG3a3VrAZr').set({
  name:'huwei',
  price:'411'
  
})

.catch((error)=>{

  console.error(error)
})
  }
  return (
    <div className="App">
    <button onClick={addproduct}>fetch data</button>
    </div>
  );
}

export default App;
