import React, {
  useEffect,
  useState,
} from "react";
import $ from "jquery";

import IconArrow from "../../../assets/icons/IconArrow";
const MenuDepartment = ({ children }) => {
  useEffect(() => {
    $(".vtex-menu__accordion__container").on("click", function () {
      const arrow = $(this).find(".vtex-menu__accordion__container--items-item svg");
      const listItems = $(this).find(".vtex-menu__accordion__container--items-item__block");
      if (listItems.hasClass("is--active") && arrow.hasClass("svg--is--active")) {
        listItems.removeClass("is--active");
        arrow.removeClass("svg--is--active");
      } else {
        listItems.addClass("is--active");
        arrow.addClass("svg--is--active");
      }
    });

    $(".vtex-menu__accordion__link").on("click", function () {
      $(this)
        .siblings(".vtex-menu__accordion__opened")
        .show()
        .addClass("is--active");
    });
    $(".vtex-menu__accordion--close").on("click", function () {
      $(".vtex-menu__accordion__opened").hide().removeClass("is--active");
    });

  }, []);

  return (
    <>
      <div className="vtex-menu__accordion">
      <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
          <span className="colorBlue">Direto da Fábrica</span> <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Direto da Fábrica</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
            <div className="vtex-menu-list-images">
                    {children.slice(1,9)}
            </div>
          </div>
        </div>
        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
            Auto Aspirante <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Auto Aspirante</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
            <div className="vtex-menu-list">
              <ul className="vtex-menu-list-container">
                <li className="vtex-menu-list-item">
                  <div>
                    <div className="vtex-menu__accordion__container">
                      <h4 className="vtex-menu__accordion__container--items-item">
                        Marcas
                        <IconArrow pointArrow="top" />
                      </h4>
                      <ul className="vtex-menu__accordion__container--items-item__block">
                        <li>
                          <a href="#" className="">
                            Ebara
                          </a>
                          <a href="#" className="">
                            Thebe
                          </a>
                          <a href="#" className="">
                            Famac
                          </a>
                          <a href="#" className="">
                            Scneider
                          </a>
                          <a href="#" className="">
                            Bombas Leão
                          </a>
                          <a href="#" className="">
                            Vibra Vert
                          </a>
                          <a href="#" className="">
                            Lepono
                          </a>
                          <a href="#" className="">
                            Syllent
                          </a>
                          <a href="#" className="">
                            Megapress
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="vtex-menu__accordion__container">
                      <h4 className="vtex-menu__accordion__container--items-item">
                        Produtos
                        <IconArrow pointArrow="top" />
                      </h4>
                      <ul className="vtex-menu__accordion__container--items-item__block">
                        <li>
                          <a href="#" className="">
                            MotoBomba Centrifuga
                          </a>
                          <a href="#" className="">
                            MotoBomba Centrifuga
                          </a>
                          <a href="#" className="">
                            MotoBomba Centrifuga
                          </a>
                          <a href="#" className="">
                            MotoBomba Centrifuga
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
            Centrifuga
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Centrifuga</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
          </div>
        </div>
        
        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
          Multi Estágio
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Multi Estágio</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
          </div>
        </div>

        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
          Drenagem
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Drenagem</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
          </div>
        </div>

        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
          Incêncio
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Incêncio</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
          </div>
        </div>

        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
          Submersa
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Submersa</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
          </div>
        </div>

        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
          Sapo
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Sapo</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
          </div>
        </div>

        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
          Piscina
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Piscina</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
          </div>
        </div>

        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
          Pressurizadores
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Pressurizadores</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
          </div>
        </div>

        <div className="vtex-menu__accordion__content">
          <h2 className="vtex-menu__accordion__link">
          Acessórios e peças
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Acessórios e peças</h3>
              <div className="vtex-menu__accordion--closeMenu">{children[0]}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MenuDepartment.defaultProps = {
    links: [
        {
            icon: "ds-top-brands",
            title: "Marcas Certas",
            description: "Encontre produtos das marcas Brastemp, Consul, KitchenAid, Sony e mais."
        },
        {
            icon: "ds-top-promotions",
            title: "Melhores promoções",
            description: "Produtos marca própria direto da fábrica para garantir a melhor opção para o seu bolso."
        },
        {
            icon: "ds-earn-credits",
            title: "Convide e Ganhe",
            description: "Convide seus amigos e ganhe créditos para comprar ainda mais barato."
        },
        {
            icon: "ds-earn-share",
            title: "Programa de benefícios",
            description: "Cumpra missões, suba de nível e acumule vantagens especiais."
        }
    ]
};

MenuDepartment.getSchema = () => {
    return {
        title: "Links Menu Titulo",
        description: "Links Menu Desc",
        type: "object",
        properties: {
            links: {
                type: "array",
                title: "Links Menu",
                items: {
                    type: "object",
                    title: "Benefício",
                    properties: {
                        icon: {
                            type: "string",
                            title: "Nome do ícone (ex.: ds-top-brands)"
                        },
                        title: {
                            type: "string",
                            title: "Título da Vantagem"
                        },
                        description: {
                            type: "string",
                            title: "Descrição da Vantagem"
                        }
                    }
                }
            }
        }
    };
}
export default MenuDepartment;
