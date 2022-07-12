import React, { Fragment, Component, useEffect, useState, useContext, useLayoutEffect } from "react";

const Cookies = () => {

    const [close, setClose] = useState('');

    const [showCookies, setShowCookies] = useState(true);

    const closeCookies = (item) => {
        setClose(item);
    }

    const cookiesActive = (valor) => {
        setShowCookies(localStorage.setItem('cookies', valor))
    }

    useEffect(() => {
        setShowCookies(localStorage.getItem('cookies'));
    })

    return (
        <>
            {!showCookies ?
                <div className={`vtex-cookies ${close === "1" ? "vtex-cookies--active" : ""}`}>
                    <div className="vtex-cookies-container">
                        <p className="vtex-cookies-container-text">
                            Ao clicar em "Aceitar cookies", você concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação no site, analisar a utilização do site e ajudar nas nossas iniciativas de marketing. Dúvidas? Acesse nossa <a className="vtex-cookies-container-link" href="/institucional/politica-de-privacidade">Política de Privacidade.</a>
                        </p>

                        <div className="vtex-cookies-button">
                            <a className="vtex-cookies-button-link"  onClick={() => { closeCookies('1'), cookiesActive(false) }}>Aceitar Cookies</a>
                        </div>
                    </div>
                </div>
                : ''}
        </>
    );
}

export default Cookies;