
/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: AutoPrime Motors
Aluno 1: Lucas Panebianchi Antunes - RA: 251159
Aluno 2: Alexander da Silva Fernandes - RA: 251070
Professor: Abimael de Oliveira
Data de entrega: 07/06
*/

// Seleciona o botão de voltar ao topo.
const btnTopo = document.querySelector('#btnTopo');

// Mostra o botão quando o usuário desce a página.
if (btnTopo) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            btnTopo.classList.add('mostrar');
        } else {
            btnTopo.classList.remove('mostrar');
        }
    });

    // Volta para o início da página.
    btnTopo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Seleciona o botão que altera o tema.
const btnTema = document.querySelector('#btnTema');

// Adiciona ou remove o tema escuro.
if (btnTema) {
    btnTema.addEventListener('click', function() {
        document.body.classList.toggle('tema-escuro');
    });
}

// Seleciona o formulário da página de contato.
const formulario = document.querySelector('#formContato');

// Verifica os campos antes de enviar.
if (formulario) {
    formulario.addEventListener('submit', function(event) {

       // <-impede o formulário de tentar enviar os dados.->
        event.preventDefault();

        const nome = document.querySelector('#nome').value.trim();
        const email = document.querySelector('#email').value.trim();
        const mensagem = document.querySelector('#mensagem').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Preencha os campos obrigatórios.');
        } else {
            alert('Mensagem enviada com sucesso!');
            formulario.reset();
        }
    });
}

// ========== FUNCIONALIDADES DA GALERIA ==========

// 4. Filtros da galeria (só executa se existir na página)
const botoesFiltro = document.querySelectorAll('.btn-filtro');
const veiculos = document.querySelectorAll('.veiculo-card');

if (botoesFiltro.length > 0 && veiculos.length > 0) {
    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', function() {
            // Remove a classe 'ativo' de todos os botões
            botoesFiltro.forEach(btn => btn.classList.remove('ativo'));
            
            // Adiciona a classe 'ativo' ao botão clicado
            this.classList.add('ativo');
            
            const categoria = this.getAttribute('data-categoria');
            
            // Filtra os veículos com animação
            veiculos.forEach(veiculo => {
                if (categoria === 'todos' || veiculo.getAttribute('data-categoria') === categoria) {
                    veiculo.style.display = 'block';
                    setTimeout(() => {
                        veiculo.style.opacity = '1';
                        veiculo.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    veiculo.style.opacity = '0';
                    veiculo.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        veiculo.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}