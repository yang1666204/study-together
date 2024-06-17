import React from "react";
export default class Form extends React.Component {
  state = {
    formData: {},
  };
  submitForm = ()=>{
    console.log("formData",this.state.formData);
  }
  handleChange = (value, name) => {
    let { formData } = this.state;
    this.setState({
      formData: {
        ...formData,
        [name]: value,
      },
    });
  };
  resetForm = () => {
    let { formData } = this.state;
    Object.keys(formData).forEach((value) => {
      console.log("value",value);
      formData[value] = "";
    });
    this.setState({
      formData: formData,
    });
  };
  render() {
    const { children } = this.props;
    let renderChildren = [];
    // if(children.type.displayName === 'formItem'){
    React.Children.forEach(children, (child, index) => {
      if (child.type.displayName === "formItem") {
        let { name } = child.props;
        let children = React.cloneElement(child, {
          key: name,
          setValue:this.handleChange,
          value: this.state.formData[name] || '',
        });
        renderChildren.push(children);
      }
    });
   
    // }
    return renderChildren;
  }
}
Form.displayName = "form";
