import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Home'

function App() {


  return(
    <section>
      {/* This is navbar */}
      <nav>
        <Navbar />
      </nav>

      {/* This is homepage */}
      <main>
        <Home />
      </main>
      
      {/* This is footer */}
      <footer>
        <Footer />
      </footer>
      
    </section>
  )
}
export default App