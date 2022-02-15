import React,{useState} from 'react'
import { DeleteOutline } from "@material-ui/icons";
import { Row,Col ,Button} from 'react-bootstrap';
function Oneitem(props) {
    const [item,setitem]=useState(props.item)
    const [select,setselected]=useState(false)
    console.log(props);

    const handle_select = ()=>{
      setselected(!select);
    }
      /*const Delete=(id)=>{
      const array=props.list
      array.splice(id, 1);
      console.log(id);
      console.log(array)
      props.delete(array);
      //console.log(array);
      //setlist(array);
    }*/
     /* const Delete=(index)=>{
      //props.delete(index);
      console.log(index);
    }*/
  return (
      <div>
      <Row xs={1} md={2}>
    <Col>
    {select ? <h4> <strike>{item.item}</strike></h4>: <h4> {item.item}</h4> }
    </Col>
    
    <Col>
    {<Button variant="outline-primary" onClick={handle_select}>Select</Button>}
     <DeleteOutline htmlColor='red' style={{cursor:'pointer' }} onClick={() => props.delete(props.id)}  />
    </Col>
      </Row>
    </div>
  )
}

export default Oneitem