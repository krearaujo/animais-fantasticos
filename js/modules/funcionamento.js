export default class Funcionamento {
    constructor(funcionamento, activeClass) {
        this.funcionamento = document.querySelector(funcionamento);
        this.activeClass = activeClass;
    }

    dadosFuncionamento() {
        this.diaSemana = this.funcionamento.dataset.semana.split(',').map(Number);
        this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
    }

    dadosAgora() {
        this.dataAgora = new Date();
        this.diaAgora = this.dataAgora.getDay();
        this.horarioAgora = this.dataAgora.getUTCHours() - 3;
    }

    estaAberto() {
        const semanaAberto = this.diaSemana.indexOf(this.diaAgora) !== -1;
        const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);
        return semanaAberto && horarioAberto;
    }

    ativaAberto() {
        if (this.estaAberto()) {
            this.funcionamento.innerHTML += " - Aberto";
            this.funcionamento.classList.add(this.activeClass);
        } else {
            this.funcionamento.innerHTML += " - Fechado";
        }
    }

    init() {
        if (this.funcionamento) {
            this.dadosFuncionamento();
            this.dadosAgora();
            this.ativaAberto();
        } return this;
    }
}
