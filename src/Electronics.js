import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import  {useState,useEffect} from "react"
 
function Electronics()
{
    const [apidata,setApiData]=useState([])
    const [status,setStatus]=useState(true)
    const [pid,setId]=useState()
function hello(id)
{
  setStatus(false)
  setId(id)
}
   useEffect(()=>{
         fetch("http://localhost:4000/search/electronics").then((result)=>{
             result.json().then((data)=>{
               setApiData(data)
             })
         })
   },[]) 
  
    return(
      <div>
         {

          status?
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
          {
             apidata.map((item)=>
             <MDBCol>
         <MDBCard>
           <center><MDBCardImage
             src={item.pimage}
             alt='...' 
             position='top' style={{width:"200px", height:"200px"}}
           /></center>
           <MDBCardBody>
          
             <MDBCardTitle>{item.pname}</MDBCardTitle>
             <MDBCardTitle>{item.pcat}</MDBCardTitle>
             <MDBCardText>{item.pdesc}</MDBCardText>
             <MDBCardText style={{color:"black"}}>Price : {item.pprice} </MDBCardText>
              <center>  <MDBBtn onClick={()=>hello(item.pid)}>View Detail {item.pid}</MDBBtn></center>
           </MDBCardBody>
         </MDBCard>
       </MDBCol>
             )
          }   
     </MDBRow>:

<MDBRow className='row-cols-1 row-cols-md-3 g-4'>
{
   apidata.map((item)=>
   
   <MDBCol>
<MDBCard>
 <center><MDBCardImage
   src={item.pimage}
   alt='...' 
   position='top' style={{width:"200px", height:"200px"}}
 /></center>
 <MDBCardBody>

   <MDBCardTitle>{item.title}</MDBCardTitle>
   <MDBCardText>{item.description}</MDBCardText>
   <MDBCardText style={{color:"black"}}>Rate : {item.price} </MDBCardText>
   <center>  <MDBBtn >Buy Now</MDBBtn></center><br></br>
    <center>  <MDBBtn onClick={()=>setStatus(true)}>Back</MDBBtn></center>
 </MDBCardBody>
</MDBCard>
</MDBCol>
   )
}   
</MDBRow>
         }
      </div>
    )
}
export default Electronics