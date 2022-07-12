import React, { useState, useEffect } from "react";

const CommonQuestions = ({
    titulo,
    duvidaTitulo_01,
    duvidaTitulo_02,
    duvidaTitulo_03,
    duvidaTitulo_04,
    duvidaTitulo_05,
    duvidaTitulo_06,
    duvidaTitulo_07,
    duvidaTitulo_08,
    duvidaTitulo_09,
    duvidaTitulo_10,
    duvidaTitulo_11,
    duvidaTitulo_12,
    duvidaTitulo_13,
    duvidaTitulo_14,
    duvidaTitulo_15,
    duvidaTexto_01,
    duvidaTexto_02,
    duvidaTexto_03,
    duvidaTexto_04,
    duvidaTexto_05,
    duvidaTexto_06,
    duvidaTexto_07,
    duvidaTexto_08,
    duvidaTexto_09,
    duvidaTexto_10,
    duvidaTexto_11,
    duvidaTexto_12,
    duvidaTexto_13,
    duvidaTexto_14,
    duvidaTexto_15,
}) => {

    const [open, setOpen] = useState('')

    const openAccordion = (item) => {
        if (open === item) {
            setOpen('')
        } else {
            setOpen(item);
        }

    }

    const [accordion, setAccordion] = useState('');

    const openAccordionMenu = (item) => {
        if (accordion === item)
            setAccordion('');
        else
            setAccordion(item);
    }


    return (
        <div className="vtex-about-flex">

            <div className="vtex-about-accordion-container--mobile">

                <div className={`vtex-about-accordion--mobile ${accordion === '1' ? 'vtex-about-accordion--mobile--active' : ''}`} onClick={() => openAccordionMenu('1')}>
                    <span>Dúvidas Frequentes</span>
                </div>

                <ul className={`vtex-about-nav--list--mobile ${accordion === '1' ? 'vtex-about-nav--list--mobile--active' : ''}`}>

                    <li className="vtex-about-nav--item--mobile">
                        <a className="vtex-about-nav--link--mobile" href="/institucional/sobre">Sobre a Lojas MM</a>
                    </li>

                    <li className="vtex-about-nav--item--mobile">
                        <a className="vtex-about-nav--link--mobile" href="/institucional/fale-conosco">Fale Conosco</a>
                    </li>

                    <li className="vtex-about-nav--item--mobile">
                        <a className="vtex-about-nav--link--mobile is--active" href="/institucional/duvidas-frequentes">Dúvidas Frequentes</a>
                    </li>

                    <li className="vtex-about-nav--item--mobile">
                        <a className="vtex-about-nav--link--mobile" href="/institucional/segurança">Segurança</a>
                    </li>

                    <li className="vtex-about-nav--item--mobile">
                        <a className="vtex-about-nav--link--mobile" href="/institucional/termos-de-uso">Termos de Uso</a>
                    </li>

                    <li className="vtex-about-nav--item--mobile">
                        <a className="vtex-about-nav--link--mobile" href="https://www.grupomercadomoveis.com.br/politica-de-privacidade?clean=1">Políticas de Privacidade</a>
                    </li>

                    <li className="vtex-about-nav--item--mobile">
                        <a className="vtex-about-nav--link--mobile" href="/institucional/politica-de-troca-e-devolucao">Políticas de Troca e Devolução</a>
                    </li>

                    <li className="vtex-about-nav--item--mobile">
                        <a className="vtex-about-nav--link--mobile" href="/institucional/entrega-e-frete">Entrega e Frete</a>
                    </li>

                    <li className="vtex-about-nav--item--mobile">
                        <a className="vtex-about-nav--link--mobile" href="/institucional/pagamento">Pagamento</a>
                    </li>
                </ul>
            </div>

            <div className="vtex-about-container">

                <div className="vtex-about-container-link-back">
                    <a className="vtex-about-container-link-back--text" href="#">Voltar</a>
                </div>

                <h3 className="vtex-about-container-title" dangerouslySetInnerHTML={{ __html: titulo }}></h3>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('1')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "1" ? "vtex-about-container-accordion-title--active" : ""}`}
                        dangerouslySetInnerHTML={{ __html: duvidaTitulo_01 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "1" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_01 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('2')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "2" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_02 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "2" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_02 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('3')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "3" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_03 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "3" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_03 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('4')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "4" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_04 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "4" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_04 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('5')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "5" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_05 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "5" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_05 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('6')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "6" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_06 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "6" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_06 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('7')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "7" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_07 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "7" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_07 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('8')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "8" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_08 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "8" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_08 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('9')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "9" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_09 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "9" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_09 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('10')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "10" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_10 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "10" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_10 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('11')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "11" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_11 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "11" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_11 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('12')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "12" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_12 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "12" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_12 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('13')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "13" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_13 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "13" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_13 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('14')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "14" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_14 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "14" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_14 }}></div>
                </div>

                <div className="vtex-about-container-accordion" onClick={() => openAccordion('15')}>
                    <h5 className={`vtex-about-container-accordion-title ${open === "15" ? "vtex-about-container-accordion-title--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTitulo_15 }}></h5>

                    <div className={`vtex-about-container-accordion-text ${open === "15" ? "vtex-about-container-accordion-text--active" : ""}`} dangerouslySetInnerHTML={{ __html: duvidaTexto_15 }}></div>
                </div>
            </div>
        </div>
    )
}

CommonQuestions.defaultProps = {
    titulo: "Dúvidas frequentes",
    duvidaTitulo_01: "Como me cadastrar no site?",
    duvidaTitulo_02: "Esqueci a senha de acesso, o que faço?",
    duvidaTitulo_03: "Meu e-mail foi cadastrado errado, como efetuar a correção?",
    duvidaTitulo_04: "Como atualizo meus dados cadastrais?",
    duvidaTitulo_05: "Quero alterar minha senha, como faço?",
    duvidaTitulo_06: "Como acompanhar meu pedido?",
    duvidaTitulo_07: "Como comprar?",
    duvidaTitulo_08: "Como imprimir a 2ª via do Boleto Bancário?",
    duvidaTitulo_09: "Qual prazo para confirmar o pagamento?",
    duvidaTitulo_10: "Quais formas de pagamento disponíveis?",
    duvidaTitulo_11: "É possível alterar a forma de pagamento após concluir o pedido?",
    duvidaTitulo_12: "Após realizar o pedido no cartão de crédito, é possível alterar a quantidade de parcelas?",
    duvidaTitulo_13: "O meu pedido não foi aprovado, posso alterar a forma de pagamento?",
    duvidaTitulo_14: "Pode ocorrer do meu pedido não ser aprovado?",
    duvidaTitulo_15: "Como saber se meu pedido foi aprovado?",
    duvidaTexto_01: '<p>Realizar seu cadastro é muito fácil!</p> <p>Basta clicar em “Crie ou entre em sua conta” no topo do site, selecionar uma opção para confirmar sua identidade e prossiga com o preenchimento dos dados.<p>',
    duvidaTexto_02: '<p>Para recuperar a senha de acesso é necessário que o e-mail esteja cadastrado corretamente. Segue passo a passo:</p> <p>1. Na parte superior da página inicial clique em “Entr em sua conta”; <br>2. Clique em “Entrar com e-mail e senha”;<br>3. Clique em “Esqueci minha senha”;<br>4. Digite o e-mail do seu cadastro e clique em “Enviar”;<br>5. Acesse a Caixa de Entrada do seu e-mail para pegar o código que irá validar a nova senha;<br>6. Digite uma nova senha duas vezes e clique em “criar” .<br>7. Pronto, sua nova senha foi validada.</p>',
    duvidaTexto_03: '<p>Neste caso não será possível efetuar a correção do endereço de e-mail, será necessário criar uma nova conta com os mesmos dados pessoais da conta anterior.</p>',
    duvidaTexto_04: '<p>Para atualizar seus dados cadastrais efetue seu login na parte superior da página inicial, utilize seu e-mail e senha para acessar. Em “minha conta” selecione “Dados pessoais” “editar”.</p><p>Procure sempre atualizar seu cadastro. Assim, conseguimos nos comunicar com mais facilidade.</p>',
    duvidaTexto_05: '<p>Para alterar sua senha efetue seu login na parte superior da página inicial, utilize seu e-mail e senha para acessar. Em “minha conta” selecione “Autenticação” “redefinir senha”.</p>',
    duvidaTexto_06: '<p>Para acompanhar seu pedido, basta clicar no topo do site em “CRIE OU ENTRE EM SUA CONTA”, efetue o login e clique em meus pedidos. Escolha o pedido e clique em VER DETALHES DO PEDIDO.</p>',
    duvidaTexto_07: '<p>01- Escolha o produto, clique em COMPRAR, selecione voltagem e cor, se houver e clique em COMPRAR.<br>02- Confira os detalhes do seu Carrinho, você pode alterar a quantidade ou clique em fechar “Fechar Pedido”, você  também pode escolher mais produtos.<br>3- Informe seu e-mail. Usamos o seu e-mail para notificar o andamento dos pedidos.<br>4- Preencha o formulário com seus dados, informando alguns dados pessoais e o endereço de entrega.<br>5- Escolha sua forma de pagamento, o procedimento é totalmente seguro e suas informações sigilosas, clique em “Finalizar Compra”.<br>6- Pronto! Você receberá um email com todas as informações do pedido e aguarde a entrega dos produtos com toda comodidade.</p>',
    duvidaTexto_08: '<p>Para imprimir a 2ª via do boleto bancário de seu pedido, realize o login  em “ Crie ou entre em sua conta” na parte superior do site. Vá para “Meus Pedidos”, basta </p><p>localizar o pedido que deseja imprimir o boleto e clicar em “Imprimir boleto bancário”.</p><p>Atenção! A reimpressão do boleto não prorroga sua data de pagamento, permanecendo a mesma do fechamento do pedido. Se o pagamento não for realizado até a data de vencimento, o pedido será automaticamente cancelado.</p><p>Você pode refazer o pedido clicando em “Pedir Novamente”, confira os itens de seu pedido e clique em “Fechar pedido”, será gerado novo boleto para pagamento.</p>',
    duvidaTexto_09: '<p>- Cartão de crédito: O prazo de aprovação é de até 72 horas. É importante que seus dados de cadastro estejam atualizados (e-mail, telefone, endereço, etc), pois poderemos entrar em contato com você para confirmar algumas informações antes da entrega.</p><p>Boleto Bancário: Após o pagamento do boleto, o banco tem o prazo de 2 dias úteis para confirmar o pagamento.</p>',
    duvidaTexto_10: '<p>- Cartão de Crédito: Você pode fazer suas compras com cartão de crédito das bandeiras: MasterCard, Visa, American Express, Dinner Club, Elo. O pagamento pode ser crédito a vista ou parcelado.</p><p>- Boleto Bancário: O pagamento deverá ser feito à vista, única parcela no valor total de sua compra e pode ser pago em qualquer banco.</p><p>Mas, atenção: Não faça depósito ou transferência direto para a conta bancária descrita no boleto, pois nosso sistema não reconhece esse procedimento.</p>',
    duvidaTexto_11: '<p>Para sua segurança, após o fechamento do pedido não é possível alterar a forma de pagamento.</p><p>Pedidos boleto bancário: Se você fez a compra pelo boleto e deseja alterar a forma de pagamento, não efetue o pagamento que o boleto será automaticamente</p><p>cancelado. É só refazer a compra novamente com o parcelamento de sua preferência.</p>',
    duvidaTexto_12: '<p>Ao finalizar um pedido, não será possível efetuar alterações na forma de pagamento. Será necessário realizar um novo pedido com a quantidade desejada das parcelas e solicitar o cancelamento do pedido incorreto através das opções de contato disponíveis.</p>',
    duvidaTexto_13: '<p>Se o pagamento foi realizado no Cartão de Crédito, neste caso não será possível. Será necessário realizar um novo pedido e aguardar o estorno do pedido anterior.</p><p>Se o pagamento foi realizado no Boleto bancário, também será necessário realizar um novo pedido. Entre em contato através das opções disponíveis para solicitar o estorno do pedido anterior.</p>',
    duvidaTexto_14: '<p>Sim, os motivos mais comuns para que um pedido não seja aprovado são:</p><p>a) Erro de digitação do número do cartão ou validade;<br>b) Dados divergentes;<br>c) Saldo insuficiente.</p><p>Vale a pena lembrar que nas compras a prazo, você precisa ter um saldo que seja igual ou maior ao valor total do pedido e não do valor das parcelas.</p>',
    duvidaTexto_15: '<p>Você receberá um e-mail confirmando a aprovação do pagamento. O acompanhamento do seu pedido também pode ser feito no site através de sua conta.</p>',
};

CommonQuestions.getSchema = () => {
    return {
        title: 'Texto Termo de uso',
        description: 'Texto Termo de uso',
        type: 'object',
        properties: {
            titulo: {
                type: "string",
                title: "Titulo",
                text: "Texto",
            },
            duvidaTitulo_01: {
                type: "string",
                title: "Titulo perguta 1",
                text: "Texto",
            },
            duvidaTitulo_02: {
                type: "string",
                title: "Titulo perguta 2",
                text: "Texto",
            },
            duvidaTitulo_03: {
                type: "string",
                title: "Titulo perguta 3",
                text: "Texto",
            },
            duvidaTitulo_04: {
                type: "string",
                title: "Titulo perguta 4",
                text: "Texto",
            },
            duvidaTitulo_05: {
                type: "string",
                title: "Titulo perguta 5",
                text: "Texto",
            },
            duvidaTitulo_06: {
                type: "string",
                title: "Titulo perguta 6",
                text: "Texto",
            },
            duvidaTitulo_07: {
                type: "string",
                title: "Titulo perguta 7",
                text: "Texto",
            },
            duvidaTitulo_08: {
                type: "string",
                title: "Titulo perguta 8",
                text: "Texto",
            },
            duvidaTitulo_09: {
                type: "string",
                title: "Titulo perguta 9",
                text: "Texto",
            },
            duvidaTitulo_10: {
                type: "string",
                title: "Titulo perguta 10",
                text: "Texto",
            },
            duvidaTitulo_11: {
                type: "string",
                title: "Titulo perguta 11",
                text: "Texto",
            },
            duvidaTitulo_12: {
                type: "string",
                title: "Titulo perguta 12",
                text: "Texto",
            },
            duvidaTitulo_13: {
                type: "string",
                title: "Titulo perguta 13",
                text: "Texto",
            },
            duvidaTitulo_14: {
                type: "string",
                title: "Titulo perguta 14",
                text: "Texto",
            },
            duvidaTitulo_15: {
                type: "string",
                title: "Titulo perguta 15",
                text: "Texto",
            },
            duvidaTexto_01: {
                type: "string",
                title: "Resposta perguta 1",
                text: "Texto",
            },
            duvidaTexto_02: {
                type: "string",
                title: "Resposta perguta 2",
                text: "Texto",
            },
            duvidaTexto_03: {
                type: "string",
                title: "Resposta perguta 3",
                text: "Texto",
            },
            duvidaTexto_04: {
                type: "string",
                title: "Resposta perguta 4",
                text: "Texto",
            },
            duvidaTexto_05: {
                type: "string",
                title: "Resposta perguta 5",
                text: "Texto",
            },
            duvidaTexto_06: {
                type: "string",
                title: "Resposta perguta 6",
                text: "Texto",
            },
            duvidaTexto_07: {
                type: "string",
                title: "Resposta perguta 7",
                text: "Texto",
            },
            duvidaTexto_08: {
                type: "string",
                title: "Resposta perguta 8",
                text: "Texto",
            },
            duvidaTexto_09: {
                type: "string",
                title: "Resposta perguta 9",
                text: "Texto",
            },
            duvidaTexto_10: {
                type: "string",
                title: "Resposta perguta 10",
                text: "Texto",
            },
            duvidaTexto_11: {
                type: "string",
                title: "Resposta perguta 11",
                text: "Texto",
            },
            duvidaTexto_12: {
                type: "string",
                title: "Resposta perguta 12",
                text: "Texto",
            },
            duvidaTexto_13: {
                type: "string",
                title: "Resposta perguta 13",
                text: "Texto",
            },
            duvidaTexto_14: {
                type: "string",
                title: "Resposta perguta 14",
                text: "Texto",
            },
            duvidaTexto_15: {
                type: "string",
                title: "Resposta perguta 15",
                text: "Texto",
            },
        }
    };
}

export default CommonQuestions;