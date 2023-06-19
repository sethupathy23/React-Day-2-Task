import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@mui/material/Button';


export default function App(){

  return(
    <div className="App">
    <Cards />
    </div>
  );
}

function Cards(){
  const CardList=[{
    "details" :"FREE",
    "price" :"$0/month",
    "users" :"Single User",
    "storage" :"5GB Storage",
    "public" : "Unlimited Public Projects",
    "Access" :"Community Access",
    "private" :"Unlimited Private Projects",
    "support" :"Dedicated Phone Support",
    "subdomain" :"Free Subdomain",
    "report" :"Monthly Status Report",

  },
{
  "details" :"PLUS",
  "price" :"$9/month",
  "users" :"5 Users",
  "storage" :"50GB Storage",
  "public" : "Unlimited Public Projects",
  "Access" :"Community Access",
  "private" :"Unlimited Private Projects",
  "support" :"Dedicated Phone Support",
  "subdomain" :"Free Subdomain",
  "report" :"Monthly Status Report", 
},
{
  "details" :"PRO",
  "price" :"$49/month",
  "users" :"Unlimited Users",
  "storage" :"150GB Storage",
  "public" : "Unlimited Public Projects",
  "Access" :"Community Access",
  "private" :"Unlimited Private Projects",
  "support" :"Dedicated Phone Support",
  "subdomain" :"Unlimited Free Subdomains",
  "report" :"Monthly Status Reports", 
}];
return(
  <div className="mav">
    {CardList.map((ele)=>(
      <Price cards= {ele} />
    ))}
  </div>
)
}

function Price({cards}){
  return(
    <div className="card">
      <p><span><FontAwesomeIcon icon="fa-solid fa-check" /></span>{cards.details}</p>
      <h1>{cards.price}</h1>
      <hr />
      <p>{cards.details}</p>
      <p>{cards.storage}</p>
      <p>{cards.public}</p>
      <p>{cards.Access}</p>
      <p>{cards.private}</p>
      <p>{cards.support}</p>
      <p>{cards.subdomain}</p>
      <p>{cards.report}</p>
      <Button variant="contained">Buy Now</Button>

    </div>
  )
}

