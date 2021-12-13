import { useState } from "react"
import { useNavigate } from "react-router"
import NavigationUI from "./navigation.presenter"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mouseOver, setMouseOver] = useState("")
  const navigate = useNavigate()
  const onClickMove = (e) => {
    navigate(`/${e.target.id}`)
    setIsOpen(false)
  }
  const onClickOpen = () => {
    setIsOpen(prev=>!prev)
  }
  const onMouseOver = () => {
    setMouseOver(0)
  }
  const onMouseOut = () => {
    setMouseOver("")
  }
  return <NavigationUI onClickMove={onClickMove} onClickOpen={onClickOpen} onMouseOver={onMouseOver} onMouseOut={onMouseOut} mouseOver={mouseOver} isOpen={isOpen}/>

}

export default Navigation