import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard pic={homer} name = {"Homer"} description={"Homer like donuts"} email={"Homer@outlook.com"} />
              <ProfileCard pic={lisa} name= {"Lisa"} description={"lisa like books"}  email={"Lisa@outlook.com"}/>
              <ProfileCard pic={maggie} name={"maggie"} description={"maggie like to sleep"}  email={"Maggie@outlook.com"}/>
              <ProfileCard pic={marge} name={"marge"} description={"marge like to cook"}  email={"Marge@outlook.com"}/>
              <ProfileCard pic={bart} name={"marge"} description={"bart like to skateboard"}  email={"Bart@outlook.com"} />
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
