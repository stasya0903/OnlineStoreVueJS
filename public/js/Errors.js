Vue.component('error', {
    template: `<div v-show="errorMessage" class="errorBody"> 
<div class="errorMsg">
<div class="delete_btn__drop errorBtn">
                            <i @click="errorMessage=''" id="deleteBtn" class="fas fa-times-circle"></i>
                        </div>
<h3>{{errorMessage}}</h3>

</div>

</div>`,
    methods: {
        handleError(msg) {
            this.errorMessage = msg;
        }
    },
    data() {
        return {
            errorMessage: "",
        }
    }

});