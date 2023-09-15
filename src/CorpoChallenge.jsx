import React from 'react'

function Corpo(){
    return(
            <>
    
        <section className='container bg-white bordas-container py-1'>
            <div className="m-5">
              <div className="row">
                <div className=" col-md-5 def-form">
                  <form>
                    <div className="cabecario p-3">
                      <h2>Faça seu Login</h2>
                      <h6>Não é registrado?</h6>
                      <a href="signin.html">Cadastre-se</a>
                    </div>
      
                    <div className="p-2">
                      <div className="dados">
                        <input placeholder="Nome" type="text" id="nome" className="inserir"/>
                      </div>
      
                      <div className="p-3 ">
                        <input placeholder="Senha" type="password" id="senha" className="inserir"/>
                      </div>
      
                      <input type="submit" value="Logar" className="btn fundo-botao text-white " id="botao" onclick="validar()"/>
      
                      <p className="mt-2">
                        Esqueceu sua senha?
                        <a href="#">Clique Aqui</a>
                      </p>
                    </div>
                  </form>
                </div>

                <div className="row col-md-6">
                    <div>
                      <img src="./SPRINT2/assets/img/fotosprint2.jpeg" class="borda-img " alt="" />
                    </div>
                </div>
              </div>
            </div>
        </section>
            
        </>
    )
}
export default Corpo