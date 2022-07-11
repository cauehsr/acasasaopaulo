import React, { useEffect, useState } from "react";
import $ from "jquery";

import IconArrow from "../../../assets/icons/IconArrow";
const MenuDepartments = ({
  children,
  linkMarcasAutoAspirante,
  linkProdutosAutoAspirante,
  linkMarcasCentrifuga,
  linkProdutosCentrifuga,
  linkMarcasMultiEstagio,
  linkProdutosMultiEstagio,
  linkMarcasDrenagem,
  linkProdutosDrenagem,
  linkMarcasIncencio,
  linkProdutosIncencio,
  linkMarcasSubmersa,
  linkProdutosSubmersa,
  linkMarcasSapo,
  linkProdutosSapo,
  linkMarcasPiscina,
  linkProdutosPiscina,
  linkMarcasPressurizadores,
  linkProdutosPressurizadores,
  linkMarcasAcessorios,
  linkProdutosAcessorios,
}) => {
  // console.log( props, "testeew");
  useEffect(() => {
    $(".vtex-menu__accordion__container").on("click", function () {
      const arrow = $(this).find(
        ".vtex-menu__accordion__container--items-item svg"
      );
      const listItems = $(this).find(
        ".vtex-menu__accordion__container--items-item__block"
      );
      if (
        listItems.hasClass("is--active") &&
        arrow.hasClass("svg--is--active")
      ) {
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
            <span className="colorBlue">Direto da Fábrica</span>{" "}
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Direto da Fábrica</h3>
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
            </div>
            <div className="vtex-menu-list-images">{children.slice(1, 9)}</div>
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
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasAutoAspirante.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosAutoAspirante.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasCentrifuga.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosCentrifuga.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
            Multi Estágio
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Multi Estágio</h3>
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasMultiEstagio.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosMultiEstagio.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
            Drenagem
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Drenagem</h3>
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasDrenagem.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosDrenagem.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
            Incêncio
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Incêncio</h3>
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasIncencio.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosIncencio.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
            Submersa
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Submersa</h3>
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasSubmersa.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosSubmersa.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
            Sapo
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Sapo</h3>
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasSapo.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosSapo.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
            Piscina
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Piscina</h3>
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasPiscina.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosPiscina.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
            Pressurizadores
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">Pressurizadores</h3>
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasPressurizadores.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosPressurizadores.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
            Acessórios e peças
            <IconArrow pointArrow="right" />
          </h2>
          <div className="vtex-menu__accordion__opened">
            <div className="vtex-menu__header">
              <div className="vtex-menu__accordion--close">
                <IconArrow pointArrow="left" />
              </div>
              <h3 className="vtex-menu__accordion--title">
                Acessórios e peças
              </h3>
              <div className="vtex-menu__accordion--closeMenu">
                {children[0]}
              </div>
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
                          {linkMarcasAcessorios.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
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
                          {linkProdutosAcessorios.map((item) => (
                            <a className="" href={`/${item.href}`}>
                              {item.title}
                            </a>
                          ))}
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MenuDepartments.defaultProps = {
  linkMarcasAutoAspirante: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosAutoAspirante: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkMarcasCentrifuga: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosCentrifuga: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkMarcasMultiEstagio: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosMultiEstagio: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkMarcasDrenagem: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosDrenagem: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkMarcasIncencio: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosIncencio: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkMarcasSubmersa: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosSubmersa: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkMarcasSapo: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosSapo: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkMarcasPiscina: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosPiscina: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkMarcasPressurizadores: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosPressurizadores: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkMarcasAcessorios: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
  linkProdutosAcessorios: [
    {
      title: "Link 1",
      href: "link1",
    },
  ],
};

MenuDepartments.getSchema = () => {
  return (
    {
      title: "Links Menu Mobile",
      description: "Links Menu Mobile",
      type: 'object',
      properties: {
        linkMarcasAutoAspirante: {
          type: "array",
          title: "Link SubMenu Marcas Auto Aspirante",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosAutoAspirante: {
          type: "array",
          title: "Link SubMenu Produtos Auto Aspirante",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkMarcasCentrifuga: {
          type: "array",
          title: "Link SubMenu Marcas Centrifuga",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosCentrifuga: {
          type: "array",
          title: "Link SubMenu Produtos Centrifuga",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkMarcasMultiEstagio: {
          type: "array",
          title: "Link SubMenu Marcas MultiEstagio",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosMultiEstagio: {
          type: "array",
          title: "Link SubMenu Produtos MultiEstagio",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkMarcasDrenagem: {
          type: "array",
          title: "Link SubMenu Marcas Drenagem",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosDrenagem: {
          type: "array",
          title: "Link SubMenu Produtos Drenagem",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkMarcasIncencio: {
          type: "array",
          title: "Link SubMenu Marcas Incenciom",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosIncencio: {
          type: "array",
          title: "Link SubMenu Produtos Incencio",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkMarcasSubmersa: {
          type: "array",
          title: "Link SubMenu Marcas Submersa",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosSubmersa: {
          type: "array",
          title: "Link SubMenu Produtos Submersa",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkMarcasSapo: {
          type: "array",
          title: "Link SubMenu Marcas Sapo",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosSapo: {
          type: "array",
          title: "Link SubMenu Produtos Sapo",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkMarcasPiscina: {
          type: "array",
          title: "Link SubMenu Marcas Piscina",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosPressurizadores: {
          type: "array",
          title: "Link SubMenu Produtos Pressurizadores",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkMarcasPressurizadores: {
          type: "array",
          title: "Link SubMenu Marcas Pressurizadores",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosPressurizadores: {
          type: "array",
          title: "Link SubMenu Produtos Pressurizadores",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkMarcasAcessorios: {
          type: "array",
          title: "Link SubMenu Marcas Acessorios",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        },
        linkProdutosAcessorios: {
          type: "array",
          title: "Link SubMenu Produtos Acessorios",
          items: {
            type: "object",
            title: "Item SubMenu",
            properties: {
              title: {
                type: "string",
                title: "Título do link",
              },
              href: {
                type: "string",
                title: "Link",
              },
            },
          },
        }
      }
    }
  );
};
export default MenuDepartments;
