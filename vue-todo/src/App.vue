<template>
  <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
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

</style>

