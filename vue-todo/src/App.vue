<template>
  <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
      <TodoList v-bind:propsdata="todoItems"></TodoList>
      <TodoFooter></TodoFooter>
<!-- <TodoList v-bind:내려보낼 프롭스 속성이름="현재 위치의 컴포넌트 속성이름"></TodoList> -->
      <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메소드 이름"></TodoInput> -->

  </div>
</template>

<script>
// components 불러옴
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'
/*
ES5
var my_cmp =  {
  template:'<div>my component</div>'
};

new Vue({
  el:'',
  components:{
    '컴포넌트이름':'컴포넌트 내용'
  }
})

*/
export default {
  //ES6
  data:function(){
    return{
      todoItems:[]
    }
  },
  methods:{
    addOneItem:function(todoItemtodoItem){
      var obj = {completed:false,item:this.todoItemtodoItem};
      localStorage.setItem(this.todoItem,JSON.stringify(obj));
      this.todoItems.push(obj);
    }
  },
  created: function(){
    if(localStorage.length > 0){
      for(var i =0;i< localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    } 
  },
  components:{
    //컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader':TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList':TodoList,
    'TodoFooter':TodoFooter
  }
}

</script>

<style>
  
  body{
    text-align: center;
    background-color: #F6F6F6;
  }

  input{
    border-style: groove;
    width: 200px;
  }

  button{
    border-style: groove;
  }

  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>

