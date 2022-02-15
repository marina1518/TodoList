import React,{useState} from 'react'
import { Card ,Button , Form} from 'react-bootstrap'
import Oneitem from './Oneitem'

import { DeleteOutline } from "@material-ui/icons";
import { Row,Col } from 'react-bootstrap';
export default function Todolist() {

   const [list,setlist] = useState([])
    const [select,setselected]=useState([])
    

    const handle_select = (index)=>{
      
        console.log(index);
        var news = select;
        news[index].value=!news[index].value;
        setselected(news)
        console.log(news)
      //setselected(!select);
    }
   
   const [FormValues,setFormvalues] = useState({})

   const handle_change=(e)=>{
      
        const name = e.target.name ;
        const value = e.target.value;
        setFormvalues({...FormValues, [name] : value});
  } 
  const Add =()=>{
       setlist((list)=>
           [...list,{item:FormValues.item } ])

       setselected((select)=>
           [...select,{value:false} ])    
           
       setFormvalues({item:""});
      console.log(list);
      
  }
  const Delete=(item_name)=>{

      setlist(list.filter((item)=> item.item !== item_name))
      //var array = list 
      //list.splice(id,1);
      //console.log(array);
      //setlist(array);
      //console.log(list)
    }
  return (
    <div>
     <Card border="primary" style={{ width: '50rem' , margin:'120px',marginLeft:'300px'}}>
    <Card.Header style={{ color:'darkblue' , fontSize:'25px'}} >Todo List</Card.Header>
    <Card.Body>

      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Add new item" name='item' onChange={handle_change} value={FormValues.item}/>
  </Form.Group>
  </Form>

      <Button variant="outline-info" onClick={Add}>Add</Button>
    </Card.Body>
  </Card>
  <div  style={{marginRight:'110px' }} >
   {  list .map((item,index)=>(
     <div key={index} style={{marginTop:'20px'}} >
     <Row xs={1} md={2}>
    <Col>
    {select[index].value ? <h4> <strike>{item.item}</strike></h4>: <h4> {item.item}</h4> }
    </Col>
    
    <Col>
    {<Button variant="outline-primary" onClick={() =>{handle_select(index)}}>Select</Button>}
     <DeleteOutline htmlColor='red' style={{cursor:'pointer' }} onClick={() => Delete(item.item)}  />
    </Col>
      </Row>
    </div>
))}
   

  </div>
  </div>)}