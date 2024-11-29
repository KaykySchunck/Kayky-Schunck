import React from 'react'


function Navegacao(){
  return (
    <>
    <header>
    <div className="container-fluid mb-5 ">
        <nav className="navbar navbar-expand-lg navbar-light ">
            <a href="#" className="navbar-brand me-auto ">
                <span><img className='logo' src="../SPRINT2/assets/img/logo.png" alt=""/></span>
            </a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse " id="navbarNav">
                <ul class="navbar-nav m-auto gap-4">
                    
                    <li className="nav-item"><a href="#" className="nav-link">Challenge</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Projetos</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Funcionamento</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">App</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Perfil</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Prós X Contras</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Necessário</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Login</a></li>
                   
                    
                    
                </ul>
                <button className="btn text-white ml-auto rounded-5 p-3 fundo-botao ">
                    <i className="bi bi-chat-text-fill px-1"></i>
                    Fazer Login</button>
            </div>
        </nav>
    </div>
</header>


    </>


    )
}

export default Navegacao


