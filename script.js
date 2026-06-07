/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: AutoPrime Motors
Aluno 1: Lucas Panebianchi Antunes - RA: XXXXX
Aluno 2: Nome completo - RA: XXXXX
Professor: Abimael de Oliveira
*/

/*
AF - Avaliação Final - Linguagens de Programação
Tema do Projeto: AutoPrime Motors
Aluno 1: Lucas Panebianchi Antunes - RA: XXXXX
Aluno 2: Nome completo - RA: XXXXX
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