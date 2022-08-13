<template>
  <div class="inputBox shaow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fa-solid fa-plus addBtn"></i>
    </span>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        newTodoItem:""
      }
    },
    methods:{
      addTodo:function(){
        if(this.newTodoItem !== ''){
          //값이 있을 때 실행
          //저장하는 로직
          this.$emit('addTodoItem',this.newTodoItem);
          // this.$emit('이벤트이름', 인자1,인자2,...)
          this.clearInput();
        }
      },
      clearInput:function(){
        //input 초기화
        this.newTodoItem = '';
      }
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
</style>
