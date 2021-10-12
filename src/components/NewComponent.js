//компонент по отработке навыков владения сагой при переходе на
//новую страницу

import { useEffect } from "react"
import { useDispatch } from "react-redux";

const NewComponent = () => {
  const dispatch = useDispatch();
  //простой вариант - задиспатчить нужную сагу в юзэффекте
  useEffect(() => {
    dispatch({ type: "GET_PLANETS_startSaga" })
  },[])
  return (
    <div>
      dfgdfdf
    </div>
  )
}
export default NewComponent