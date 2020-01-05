import React from "react"
import { Link } from "gatsby"

export default props => (
  <div>
    <h2>{props.title}</h2>
    <img src={props.image} alt="" />
    {props.children}
    <Link to={props.link}>Learn More</Link>
  </div>
)
