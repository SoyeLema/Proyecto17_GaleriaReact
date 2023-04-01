import './App.css';
import Header from './components/Header';
import Cards from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <Header titulo='Galería de Imágenes con React' />
        <hr />
      </div>
      <div className='gallery'>

        <Cards src='https://placedog.net/201/300?random' title='Hermoso Can' descr='Un muy hermoso perrito. Miren lo feliz que es!' />
        <Cards src='http://placekitten.com/201/300?random' title='Gatito Bonito' descr='Este también es un gatito muy bonito' />
        <Cards src='https://placedog.net/202/300?random' title='Un Perrito especial' descr='Este amiguito es muy especial, mira su carita!' />
        <Cards src='http://placekitten.com/206/300?random' title='Ojos Bellos de Gatito' descr='Los ojitos de este minino demuestran todo su amor.' />
        <Cards src='https://placedog.net/203/300?random' title='Distinguida Mascota' descr='Algunos perritos llegan a ser muy distinguidos del resto.' />
        <Cards src='http://placekitten.com/203/300?random' title='Unos Gatos Singulares' descr='La definición de belleza acompaña a estos gatitos.' />
      </div>
      <div className='footer'>
        <hr />
        <Footer className="footer text-center" detalle='Galería de animales bonitos y tiernos para admirar.' text='Esta es una galería simple construída usando react y bootstrap. Cada vez que refresques la página, nuevos perritos y gatitos aparecerán.' />
      </div>
    </div>
  );
}

export default App;
