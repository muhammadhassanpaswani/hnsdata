import React from "react";
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <div className="Header">
            <h1>HNS TUTION CENTER</h1>
            </div>
            <div className="data">
            <h1>STUDENTS DATA</h1>
            </div>
            </div>
        )
    }
}
export default Header;