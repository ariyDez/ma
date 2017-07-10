<template>
    <div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="row">
                    <div class="col-md-2" v-for="(question, index) in questions">
                        <div v-if="question !== null" @click="openModal(index)">
                            <span>{{index+1}}</span>
                            <span>
                                <i class="fa fa-check" v-if="check(index)"></i>
                                <i class="fa fa-times" v-else></i>
                            </span>
                        </div>
                        <div class="disabled" v-else>
                            <span>{{index+1}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div v-for="(number, index) in operation_number">{{number}}</div>
                            </div>
                            <div class="col-md-6">
                                <div>
                                    <i class="fa fa-check" v-if="check(index_number)"></i>
                                    <i class="fa fa-times" v-else></i>
                                </div>
                                <div>
                                    Введенный ответ<br />
                                    {{answer}}
                                </div>
                                <div>
                                    Верный ответ<br />
                                    {{question}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '../../store/arithmetic'
    export default {
        data() {
            return {
                min: null,
                max: null,
                max_value: null,
                speed: null,
                action: null,
                question_deal: null,
                operation_deal: null,
                multiply_numbers: [],
                diff_numbers: [],
                questions: [],
                answers: [],
                question: null,
                answer: null,
                question_number: 1,
                isStarted: false,
                operation_numbers: [],
                operation_number: [],
                index_number: null
            }
        },
        created() {
            Store.init();
            this.init();
        },
        methods: {
            init(){
                this.min = Store.state.min;
                this.max = Store.state.max;
                this.max_value = Store.state.max_value;
                this.speed = Store.state.speed;
                this.action = Store.state.action;
                this.question_deal = Store.state.question_deal;
                this.operation_deal = Store.state.operation_deal;
                this.multiply_numbers = Store.state.multiply_numbers;
                this.diff_numbers = Store.state.diff_numbers;
                this.questions = Store.state.questions;
                this.operation_numbers = Store.state.operation_numbers;
                this.answers = Store.state.answers;
            },
            check(index) {
                return this.questions[index] === parseInt(this.answers[index]);
            },
            openModal(index) {
                this.index_number = index;
                this.operation_number = this.operation_numbers[index];
                this.question = this.questions[index];
                this.answer = this.answers[index];
                $('#myModal').modal();
            }
        }
    }
</script>