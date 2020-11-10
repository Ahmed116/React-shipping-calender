import React,{useState} from 'react';
import { render } from 'react-dom';
import Calender from './components/Calender';
import Events from './components/Events';
import './index.css';

function App() {
  const [selactabel,setSelectabel] = useState({title:'',clicked:'',description:'',color:''});
 
 

 const handleDateClick = (arg) => { 
 
  const data = arg.view.calendar.currentDataManager.currentCalendarOptionsInput.events.findIndex(item =>{
    
   return item.title === arg.dayEl.innerText.split('\n')[1]
  })
  console.log(data);

    setSelectabel({
        clicked:data!==-1 ?'Your package will arrive on >>>'+' '+ arg.dateStr:'',
        title:data!==-1 ?'You have selected'+' '+arg.dayEl.innerText.split('\n')[1]+' '+'Shipping':'',
        color:data !== -1 ?
        arg.view.calendar.currentDataManager.currentCalendarOptionsInput.events[data].color:'',
        description:data !== -1 ?
        arg.view.calendar.currentDataManager.currentCalendarOptionsInput.events[data].description:'Sorry, we are not able to ship within the past, please choose another date'
       
      }); 
   

  }
  return (
    <div className="container">
     <Calender handleDateClick={handleDateClick}/>
     <Events selactabel={selactabel} handleDateClick ={handleDateClick}/>
    </div>
  );
}

export default App;
