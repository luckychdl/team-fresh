import { useNavigate } from "react-router"
import NavigationUI from "./navigation.presenter"

const Navigation = () => {
  const navigate = useNavigate()
  const onClickMove = (e) => {
    navigate(`/${e.target.id}`)
  }
  return <NavigationUI onClickMove={onClickMove}/>

}

export default Navigation