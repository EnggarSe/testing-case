import React, {Component, Fragment} from 'react';
import {Card, InputNumber, Checkbox, Button} from 'antd'
import {PlusOutlined, MinusOutlined, CloseOutlined, BorderOuterOutlined} from '@ant-design/icons'

class Content extends Component {
   constructor(props){
      super(props)
      this.state = {
         checkBox1 : false,
         checkBox2 : false,
         checkBox3 : false,
         value1 : "",
         value2 : "",
         value3 : "",
         count : 0,
         result : '',
      }
   }

   onChangeCheck  (key, value)  {
      console.log(key, value.target.checked, 'vall');
      const {count} = this.state
      if(value.target.checked === true){
         this.setState({
            count : count + 1
         })
      }
      else{
         this.setState({
            count : count - 1
         })
      }
      const {value1, value2, value3, checkBox1, checkBox2, checkBox3} = this.state
      this.setState({
         [key] : value.target.checked,
      })
   }

   onChangeInput (key, value) {
      console.log(key, value, 'vall');
      this.setState({
         [key] : value
      })
   }

   addResult (operator)  {
      console.log(operator, 'OPERATOR');
      
      const {value1, value2, value3, checkBox1, checkBox2, checkBox3, count} = this.state
      if(count === 0 || count === 1){
         this.setState({
            result : "Error Number"
         })
      } else if (checkBox2 === true && checkBox3 === true && checkBox1 === true){
         this.setState({ 
            result : operator === "tambah" ? value1 + value2 + value3 : operator === "kurang" ? value1 - value2 - value3 : operator === "kali" ? value1 * value2 * value3 : value1 / value2 / value3
         })
      } else if (checkBox1 === true && checkBox2 === true) {
         this.setState({
            result : operator === "tambah" ? value1 + value2 : operator === "kurang" ? value1 - value2 : operator === "kali" ? value1 * value2 : value1 / value2
         })
      } else if (checkBox1 === true && checkBox3 === true){
         this.setState({
            result : operator === "tambah" ?  value1 + value3 : operator === "kurang" ?  value1 - value3 : operator === "kali" ?  value1 * value3 : value1 /  value3
         })
      } else if (checkBox2 === true && checkBox3 === true){
         this.setState({
            result : operator === "tambah" ? value2 + value3 : operator === "kurang" ? value2 - value3 : operator === "kali" ? value2 * value3 : value2 / value3
         })
      } 
   }

   render (){
      const {value1, value2, value3, result, checkBox1, checkBox2, checkBox3} = this.state
      console.log(result, 'jumlah');
      console.log(value1, value2, value3, 'JUMLAAAAH');
      
      
      return(
         <div className = "body-content">
            <div className="site-card-border-less-wrapper">
               <Card className = "card-title" title="Your Calculator" bordered={true} style={{ width: 500 }}>
                  <div className = "form-content">
                     <div className = "group-form">
                        <InputNumber type = "number" min={1} max={1000} onChange = {(value) => this.onChangeInput('value1', value)} disabled = {checkBox1 === true ? true : false}/>
                        <Checkbox onChange = {(value) => this.onChangeCheck('checkBox1', value)} disabled={value1 ==="" || value1 === null ? true : false}></Checkbox>   
                     </div>
                     <div className = "group-form">
                        <InputNumber type = "number" min={1} max={1000} onChange = {(value) => this.onChangeInput('value2', value)} disabled = {checkBox2 === true ? true : false}/>
                        <Checkbox onChange = {(value) => this.onChangeCheck('checkBox2', value)} disabled={value2 ==="" || value2 === null ? true : false}></Checkbox>   
                     </div>
                     <div className = "group-form">
                        <InputNumber type = "number" min={1} max={1000} onChange = {(value) => this.onChangeInput('value3', value)} disabled = {checkBox3 === true ? true : false}/>
                        <Checkbox onChange = {(value) => this.onChangeCheck('checkBox3', value)} disabled={value3 ==="" || value3 === null ? true : false}></Checkbox>   
                     </div>
                  </div>
                  <div className = "operator-content">
                     <Button type="primary" shape="round" icon={<PlusOutlined />} onClick = {() => this.addResult ("tambah")} size="large" />
                     <Button type="primary" shape="round" icon={<MinusOutlined />}onClick = {() => this.addResult ("kurang")} size="large" />
                     <Button type="primary" shape="round" icon={<CloseOutlined />}onClick = {() => this.addResult ("kali")} size="large" />
                     <Button type="primary" shape="round" icon={<BorderOuterOutlined />} onClick = {() => this.addResult ("bagi")} size="large" />
                  </div>
                  <hr className = "line-hr"/>
                  <h1 className = "result-content">Hasil : {result}</h1>
               </Card>
            </div>
         </div>
      )
   }
}

export default Content