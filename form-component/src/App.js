import logo from "./logo.svg";
import Form from "./components/form";
import FormItem from "./components/form-item";
import Input from "./components/input";
import React,{useEffect} from "react";
import "./App.css";

function App() {
  const form = React.useRef(null);
  const submit = () => {
    /* 表单提交 */
    form.current.submitForm((formValue) => {
      console.log(formValue);
    });
  };
  useEffect(()=>{
    let boolean = false
    boolean && fun()
  },[])
  const fun = ()=>{
    console.log("执行");
  }
  const reset = () => {
    /* 表单重置 */
    form.current.resetForm();
  };
  return (
    <div className="App">
      <Form ref={form}>
        <FormItem name="user" label="用户名">
          <Input></Input>
        </FormItem>
        <FormItem name="emeil" label="邮箱">
          <Input></Input>
        </FormItem>
        <FormItem name="password" label="密码">
          <Input></Input>
        </FormItem>
      </Form>
      <button className="searchbtn" onClick={submit}>
        提交
      </button>
      <button className="concellbtn" onClick={reset}>
        重置
      </button>
    </div>
  );
}

export default App;
