import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@Form.create()
class FormPageAntd extends Component {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } = this.props.form;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("submit", values);
      }
    });
    // console.log("submit", getFieldsValue(), getFieldValue("name"));
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    console.log("props", this.props.form);
    return (
      <div>
        <h1>FormPageAntd</h1>
        <Form>
          <Form.Item label="姓名">
            {getFieldDecorator("name", { rules: [nameRules] })(<Input />)}
          </Form.Item>
          <Form.Item label="密码">
            {getFieldDecorator("password", { rules: [passwordRules] })(
              <Input type="password" />,
            )}
          </Form.Item>
        </Form>
        <Button onClick={this.submit}>submit</Button>
      </div>
    );
  }
}

export default FormPageAntd;
