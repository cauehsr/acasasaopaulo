import React from "react";
const institucionalMenu   = () => {
  return (
    <>
      <div className="vtex-institucional-content_container">
          
          <div className="vtex-institucional-box-selection-Desk">

            <ul>

              <li className="vtex-select-option-politica-de-privacidade ">
                <a  className="vtex-select-option-link" href="/institucional/politica-de-privacidade">
                  Politica de Privacidade
                </a>
              </li>

              <li className="vtex-select-option-politica-de-entrega">
                <a className="vtex-select-option-link"  href="/institucional/politica-de-entrega" >
                Politica de Entrega
                </a>
              </li>

              <li className="vtex-select-option-politica-de-trocas">
                <a
                  className="vtex-select-option-link"
                  href="/institucional/politica-de-trocas"
                >
                  Política de Trocas 
                </a>
              </li>

              <li className="vtex-select-option-seguro-comprar ">
                <a  className="vtex-select-option-link" href="/institucional/seguro-comprar">
                  É Seguro Comprar
                </a>
              </li>

              <li className="vtex-select-option-quem-somos ">
                <a  className="vtex-select-option-link" href="/institucional/quem-somos">
                  Quem Somos
                </a>
              </li>

              <li className="vtex-select-option-fale-conosco ">
                <a  className="vtex-select-option-link" href="/institucional/fale-conosco">
                  Fale conosco
                </a>
              </li>

            </ul>

          </div>
      </div>
    </>
  );
};

export default institucionalMenu;
