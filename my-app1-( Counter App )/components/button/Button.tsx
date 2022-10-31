type ButtonTypes = {
  buttonTitle: string,
  onClickHandler: ()=> void
}

const Button = (props:ButtonTypes) =>{
  console.log("props : ", props);

  return (
      <button onClick={props.onClickHandler} > {props.buttonTitle}</button>
  )
}

export default Button