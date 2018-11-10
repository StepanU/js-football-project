import React from 'react'
import "../css/main.css"
export class About extends React.Component{



    render(){
        return(
            <div className={"about"}>
                <img className={"im"} src={"https://i.ytimg.com/vi/_U4QmarC0ng/maxresdefault.jpg"}></img>
                <div className={"pol"}>
                    <div className="main">2</div>
                    <div className="text">countries</div>
                </div>
                <div className={"pol"}>
                    <div className="main">2</div>
                    <div className="text">leagues</div>
                </div>
                <div className={"pol"}>
                    <div className="main">1</div>
                    <div className="text">web-site</div>
                </div>
                <div className={"pol"}>
                    <div className="main">44</div>
                    <div className="text">teams</div>
                </div>
                <div className={"pol"}>
                    <div className="main">656</div>
                    <div className="text">games</div>
                </div>

            </div>


        )
    }
}