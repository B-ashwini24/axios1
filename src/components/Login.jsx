import axios from "axios"
import { useState } from "react"
import {useNavigate} from "react-router-dom"
import { Form, Input, Button, Checkbox } from 'antd';

const Login=()=>{
    let navigate=useNavigate();
    const [state,setState]=useState({})
    const onFinish = (values) => {
        console.log('Success:', values);
        axios.post(`https://jsonplaceholder.typicode.com/users`,state).then(response=>{
             console.log(response.data);
              alert("Data Saved");
              localStorage.setItem("token",response.data.id)
            navigate("/mount")
           }).catch(err=>{
               console.log(err);
           })
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
    return (
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="name"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    )
}

export default Login;