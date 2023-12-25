

import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { ImCheckmark2 } from "react-icons/im";
import { MdOutlineCancel } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TiCancel } from "react-icons/ti";
import { RiPaintFill } from "react-icons/ri";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GoIssueClosed } from "react-icons/go";
import { IoCheckmarkDoneSharp } from "react-icons/io5"; 

export interface DataFunction {
baslik: string;
input: string;
color?:string;
margin?: number;
colordone: string
};

export interface showProps {
  show: number | null,
  setShow: number | null
}

interface Props {
  baslik: string,
  setBaslik: React.Dispatch<React.SetStateAction<string>>,
  inputValue: string,
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  data: DataFunction[];
  setData: React.Dispatch<React.SetStateAction<DataFunction[]>>
  show: number | null,
  setShow: React.Dispatch<React.SetStateAction<null | number>>
  warning: boolean
  setWarning: React.Dispatch<React.SetStateAction<boolean>>
  colorShowFunc: null | number
  setColorShowFunc:  React.Dispatch<React.SetStateAction<null | number>>
  edit: number,
  setEdit: React.Dispatch<React.SetStateAction<number>>,
  editedText: string,
  setEditedText: React.Dispatch<React.SetStateAction<string>>,
}

const InputPage:React.FC<Props> = ({baslik, 
  setBaslik, 
  inputValue, 
  setInputValue, 
  data, 
  setData,
  show,
  setShow,
  warning,
  setWarning,
  colorShowFunc,
  setColorShowFunc,
  edit,
  setEdit,
  editedText,
  setEditedText
}) => {

const situations = () =>  {
  if (inputValue !== "") {
  const inputs: DataFunction = {
    baslik: baslik || "No Title",
    input: inputValue,
    color: "white",
    margin: 1,
    colordone: "red"
  }

  setData([inputs, ...data]);
  setInputValue("");
  setBaslik("");
  setWarning(false);
  setShow(null);
}
else if(inputValue === "") {
  setWarning(true)
  setShow(null)
}
}

const showcolorbutton = (index: number) => {
setColorShowFunc(index)
setShow(null)
}


const renkFunc = (color: string, index: number) => {
  const colorchange = ([...data])
  colorchange[index].color = color;
  setData(colorchange)
}


const marginFunc = (margin: number, index: number) => {
  const colorchange = [...data];
  colorchange[index].margin = colorchange[index].margin === 1 ? 850 : 1
  colorchange[index].colordone = colorchange[index].colordone === "red" ? "green" : "red";
  setData(colorchange);
};


const editFunc = (index: number) => {
  setEdit(index);
  setEditedText(data[index].input);
};

const saveEditedText = (index: number) => {
  const newData = [...data];
  newData[index].input = editedText;
  setData(newData);
  setEdit(-1);
  setEditedText("");
};

const cancelEditing = (index: number) => {
  setEdit(-1);
  setEditedText("");
  setEditedText(data[index].input);
}


const deletefunc = (index: number) => {
  const deletenewfunc = ([...data])
  deletenewfunc.splice(index, 1)
  setData(deletenewfunc)
  setShow(null)
}

let cancelfunc = (index: number) => {
  setShow(null)
}

const deletebutton = (index: number) => {
  setShow(index)
  setColorShowFunc(null)
}

let cancelfuncolor = (index: number) => {
  setColorShowFunc(null)
}

  return(
    <ul>
    <>
    <div>
      <input 
      className="input"
      id="baslik" value={baslik} 
      placeholder="Title" 
      style={{backgroundColor:"black", color:"white"}}
      onChange={(event:  React.ChangeEvent<HTMLInputElement>) => setBaslik(event.target.value)} />
      
      <input
      className="input2"
      id="baslik" value={inputValue} 
      placeholder="Enter a note" 
      style={{backgroundColor:"black", color:"white", marginBottom:"10px"}}
      onChange={(event:  React.ChangeEvent<HTMLInputElement>) => setInputValue(event?.target.value)}
      />
      <button className="addbutton" onClick={situations} >Go</button>
    </div>
   

     <div> <h1 style={{color:"red"}} >Not complat<span style={{color:"white"}} >ed</span></h1> </div>  

     <div><h1 style={{color:"green", marginLeft:"850px",marginTop:"-65px",marginBottom:"30px"}} >Complat<span style={{color:"white"}} >ed</span></h1></div>
  

    {data.map((item, index) => (

      <li key={index}>
        <div style={{border:"2px solid white", paddingTop:"20px", 
        paddingBottom:"20px",marginBottom:"10px",}} >


       <div style={{marginLeft: item.margin,}} >

        <div style={{fontSize:"28px"}} >{item.baslik}</div>
        <div  style={{fontSize:"20px", color: item.color, width:"400px", wordWrap:"break-word"}} >{item.input}</div> 


        <AiOutlineDelete style={{ padding: "5px", backgroundColor: "none", color: "white", fontSize: "20px" }} onClick={() => deletebutton(index)} />
        <RiPaintFill  style={{color:"white", fontSize: "20px", padding:"2px",marginLeft:"2px",marginRight:"5px"}}onClick={() => showcolorbutton(index)} />
        <CiEdit  style={{fontSize: "28px",color:"white"}}  onClick={() => editFunc(index)} />
        <IoCheckmarkDoneSharp style={{fontSize: "28px",color: item.colordone ,marginRight:"5px"}}  onClick={() => marginFunc(850, index)} />
        </div>
        </div>



     <>
     { show === index && (<ImCheckmark2 style={{ padding: "5px", backgroundColor: "none", color: "green", fontSize: "20px", marginLeft:item.margin }} onClick={() => deletefunc(index)} />)}
     { show === index && (<MdOutlineCancel style={{ padding: "5px", backgroundColor: "none", color: "red", fontSize: "20px", marginLeft:item.margin }}  onClick={() => cancelfunc(index)} />)}
    </>
   
      <>
      { colorShowFunc === index && (<HiOutlinePaintBrush style={{marginLeft:item.margin, color:"red"}} onClick={() => renkFunc("red", index)} />)}
      { colorShowFunc === index && (<HiOutlinePaintBrush style={{marginLeft:item.margin, color:"blue"}} onClick={() => renkFunc("blue", index)} />) }
      { colorShowFunc === index && (<HiOutlinePaintBrush style={{marginLeft:item.margin, color:"white"}} onClick={() => renkFunc("white", index)} />) }
      { colorShowFunc === index && (<ImCheckmark2 style={{marginLeft:item.margin, color:"white"}} onClick={() => cancelfuncolor(index)} />) }
      </>

{edit === index && (
          <>
          <input type="text"
         style={{backgroundColor:"black", color: item.color, padding:"2px",fontSize:"18px",border:"2px solid white",marginLeft: item.margin}}
          value={editedText}
          onChange={(event) => setEditedText(event.target.value)}
          />
        <ImCheckmark2  style={{backgroundColor: "none", color: "rgb(0, 255, 0)", fontSize: "23px",marginLeft:"7px", }} onClick={()=>saveEditedText(index)} />
        <TiCancel style={{backgroundColor: "none", color: "red", fontSize: "25px", marginLeft: item.margin}} onClick={() => cancelEditing(index)} />
       
        </>
        )}
    

      </li>
    ))}
     {warning && <p style={{color:"red"}} >Please enter a value</p>}
    </>
    </ul>
  )
};
export default InputPage;
