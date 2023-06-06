<template>
    <div
        v-show="showModal"
        id="modal-container"
        class="modal-container"
    >
        <div id="modal-content">
            <div id="options">
                <div class="options-row">
                    <p>Termos de Uso</p>
                </div>
                <div class="termos-de-uso">
                    <h3>1. Uso do Site</h3>
                    <p>
                        Ao utilizar este site, você concorda em utilizá-lo
                        apenas para fins legais e de acordo com todas as leis e
                        regulamentações aplicáveis.<br />
                        Você é responsável por garantir que todas as informações
                        fornecidas por você sejam precisas, atualizadas e
                        completas.
                    </p>

                    <h3>2. Propriedade Intelectual</h3>
                    <p>
                        Todo o conteúdo presente neste site, incluindo, mas não
                        se limitando a textos, gráficos, logotipos, ícones,
                        imagens, áudio e vídeo clipes, downloads digitais e
                        compilações de dados, é de propriedade de Hidrosaver
                        e está protegido por leis de direitos autorais.<br />
                        Você não tem permissão para reproduzir, distribuir,
                        exibir publicamente, modificar, transmitir ou usar o
                        conteúdo deste site sem a permissão prévia por escrito
                        de Hidrosaver.
                    </p>

                    <h3>3. Limitação de Responsabilidade</h3>
                    <p>
                        O uso deste site é de sua inteira responsabilidade. O
                        site é fornecido "como está", sem garantias de qualquer
                        tipo, sejam expressas ou implícitas.<br />
                        Hidrosaver não se responsabiliza por quaisquer danos
                        diretos, indiretos, incidentais, consequenciais ou
                        punitivos decorrentes do uso ou incapacidade de uso
                        deste site.
                    </p>

                    <h3>4. Links para Sites de Terceiros</h3>
                    <p>
                        Este site pode conter links para sites de terceiros que
                        não são controlados ou mantidos por Hidrosaver.<br />
                        Hidrosaver não se responsabiliza pelo conteúdo
                        desses sites de terceiros ou por quaisquer danos ou
                        perdas decorrentes do uso desses sites.
                    </p>

                    <h3>5. Alterações nos Termos de Uso</h3>
                    <p>
                        Hidrosaver reserva-se o direito de alterar estes
                        Termos de Uso a qualquer momento, mediante notificação
                        prévia ou publicação das alterações no site.<br />
                        É responsabilidade do usuário revisar regularmente estes
                        Termos de Uso para estar ciente de quaisquer alterações.
                    </p>

                    <h3>6. Disposições Gerais</h3>
                    <p>
                        Estes Termos de Uso serão regidos e interpretados de
                        acordo com as leis aplicáveis.
                    </p>
                </div>
            </div>
            <div id="actions">
                <a id="button-aceitar" @click.prevent="submitAndClose">
                    <p>Aceitar</p>
                </a>
                <a id="button-rejeitar">
                    <p>Rejeitar</p>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import moment from 'moment'

export default {
    components: {
        Dropdown,
        InputNumber,
    },
    props: {
        showModal: {
            type: Boolean,
            required: true,
        },
    },
    watch: {
        times(newValue) {
            this.times = Number(newValue)
        },
    },
    methods: {
        setNewSelectedOption(selectedOption) {
            this.config.placeholder = selectedOption.value
        },
        formatDate(date) {
            return moment(date).format('DD/MM/YY')
        },
        submitAndClose() {
            this.$emit('onClose')
        },
    },
}
</script>
<style scoped>
.modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.38);
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

#modal-content {
    position: relative;
    top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    width: 40%;
    height: min-content;
    border-radius: 30px;
    background-color: white;
    box-shadow: 4px 4px 4px rgba(79, 79, 79, 0.25);
    gap: 3vh;
}

#button-aceitar {
    background: #004c90;
    border: 2px solid #004c90;
    border-radius: 20px;
    padding: 10px;
    padding-left: 14px;
    padding-right: 14px;
    cursor: pointer;
    font-size: 15px;
}

#button-rejeitar {
    background: grey;
    border: 2px solid grey;
    border-radius: 20px;
    padding: 10px;
    padding-left: 14px;
    padding-right: 14px;
    cursor: pointer;
    font-size: 15px;
}

#actions {
    flex: 1;
    display: flex;
    align-items: flex-end;
    gap: 3vw;
}

#options {
    display: flex;
    flex-direction: column;
    flex: 2;
    align-content: center;
    justify-content: space-around;
    gap: 1vh;
    padding-right: 5vw;
    padding-left: 5vw;
}

.options-row {
    display: flex;
    flex-direction: row;
    gap: 1vw;
    color: black;
    font-size: 20px;
}

.options-text {
    display: flex;
    gap: 1vw;
    flex-direction: row;
}

.termos-de-uso {
    color: black;
    display: flex;
    flex-direction: column;
}

h3 {
    margin: 0;
    margin-top: 6px;
    font-size: 13px;
}

/* min-width */
@media screen and (min-width: 100px) {
    #modal-content {
        min-width: min-content;
    }

    .options-row {
        flex-direction: column;
    }
}
</style>
