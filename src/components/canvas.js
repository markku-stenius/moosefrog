import React from 'react'
import '../css/index.css'

class Canvas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            x: window.innerWidth,
            y: window.innerHeight
        }
        window.onmousemove = this.draw.bind(this)
        window.addEventListener("resize", this.resize.bind(this), false)
    }
    resize() {
        this.setState({
            x: window.innerWidth,
            y: window.innerHeight
        })
    }
    draw(e) {
        const canvas = this.refs.canvas
        const context = canvas.getContext('2d')
        let circleData = [
            {x: Math.floor(canvas.width/2), y: Math.floor(canvas.height/2), radius: 200, color: "orange"},
            {x: Math.floor(canvas.width/2), y: Math.floor(canvas.height/2), radius: 300, color: "#00000020"},
            {x: Math.floor(canvas.width/2), y: Math.floor(canvas.height/2), radius: 400, color: "#00000020"},
            {x: Math.floor(canvas.width/2), y: Math.floor(canvas.height/2), radius: 500, color: "#00000020"},
            {x: Math.floor(canvas.width/2), y: Math.floor(canvas.height/2), radius: 600, color: "#00000020"}
            ]
        canvas.width = canvas.width;
        let x = Math.floor(canvas.width/2-e.screenX);
        let y = Math.floor(canvas.height/2-e.screenY);
        circleData.forEach((circle)=>{
          context.beginPath();
          context.arc(circle.x-(x/circle.radius)*5, circle.y-(y/circle.radius)*5, circle.radius,0,2*Math.PI);
          context.fillStyle = circle.color
          context.fill()
        })
    }
    render() {
        return <canvas ref="canvas" className="canvas" width={this.state.x} height={this.state.y}/>
    }
}
export default Canvas