import * as React from "react";

const Button = ({ children, ...rest }) => <button style={{ background: '#008000', color: 'white', padding: '20px', fontSize: '18px' }} {...rest}>{ children }</button>;

export default Button;
