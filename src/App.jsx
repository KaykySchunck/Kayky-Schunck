
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import './App.css'


// Importe os componentes das páginas que deseja distribuir
import Home  from './Challengehome';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Inclua links de navegação aqui, se necessário */}
        

        <Switch>
          {/* Defina suas rotas aqui */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />


          {/* Rota para página não encontrada (404) */}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
