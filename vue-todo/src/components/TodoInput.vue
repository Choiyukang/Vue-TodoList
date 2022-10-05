<template>
  <div class="inputBox shaow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>

<AlertModal v-if="showModal" @close="showModal = false">
      <template #header>
        <h3>경고</h3>
      </template>
      <template #body>
        <h3>아무것도 입력하지 않으셨습니다.</h3>
      </template>

    </AlertModal>

  </div>
</template>

<script>
import AlertModal  from './common/AlertModal.vue'

  export default {
    data(){
      return {
        newTodoItem:"",
        showModal: false
      }
    },
    methods:{
      addTodo(){
        if(this.newTodoItem !== ''){
          //값이 있을 때 실행
          //저장하는 로직
          // this.$emit('addTodoItem',this.newTodoItem);
          // this.$emit('이벤트이름', 인자1,인자2,...)
          this.$store.commit('addOneItem', this.newTodoItem);
          this.clearInput();
        }else{
          console.log('a');
          this.showModal = !this.showModal;
        }
      },
      clearInput(){
        //input 초기화
        this.newTodoItem = '';
      }
    },
    components:{
      AlertModal 
    }

  }
</script>

<style scoped>
input:focus{
  outline: none;
}
.inputBox{
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input{
  border-style: none;
  font-size: 0.9rem;
}
.addContainer{
  float: right;
  background: linear-gradient(to right, #6478FB,#8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px  5px 0;
}
.addBtn{
  color:white;
  vertical-align:middle;
}
.closeModalBtn{
  color:#42b983;

}
</style>
