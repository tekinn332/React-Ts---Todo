

import React, {useState} from "react";
import InputPage, {DataFunction} from "./components/inputPage";
 const App = () => {
  const [baslik, setBaslik] = useState<string>("")
  const [inputValue, setInputValue] = useState<string>("");
  const [data, setData] = useState<DataFunction[]>([]);
  const [show, setShow] = useState< null | number>(null);
  const [warning, setWarning] = useState<boolean>(false)
  const [colorShowFunc, setColorShowFunc] = useState<number |  null>(null)
  const [edit, setEdit] = useState<number>(-1);
  const [editedText, setEditedText] = useState<string>("");
  return(
    <div>
      <InputPage baslik={baslik} setBaslik={setBaslik} 
      inputValue={inputValue} setInputValue={setInputValue}
      data={data} setData={setData} show={show} setShow={setShow}
      warning={warning} setWarning={setWarning} colorShowFunc={colorShowFunc} setColorShowFunc={setColorShowFunc}
      edit={edit} setEdit={setEdit} editedText={editedText} setEditedText={setEditedText}
      />
    </div>
  )
 };
 export default App;