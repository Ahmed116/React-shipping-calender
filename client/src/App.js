import React,{useState} from 'react';
import Calender from './components/Calender';
import Events from './components/Events';
import './index.css';

function App() {
  const [selactabel,setSelectabel] = useState({title:'',clicked:'',description:'',color:''});
 
   
 const handleDateClick = (arg) => { 
  const data = arg.view.calendar.currentDataManager.currentCalendarOptionsInput.events.findIndex(item =>{
    console.log(item.description)
    console.log(arg.dayEl.innerText.split('\n')[1])
   return item.title === arg.dayEl.innerText.split('\n')[1]
  })
  console.log(data);

    setSelectabel({
        clicked: arg.dateStr,
        title:arg.dayEl.innerText.split('\n')[1],
        color:data !== -1 ?
        arg.view.calendar.currentDataManager.currentCalendarOptionsInput.events[data].color:'',
        description:data !== -1 ?
        arg.view.calendar.currentDataManager.currentCalendarOptionsInput.events[data].description:'We can not ship in this day, please choose another date'
       
      }); 
   console.log(arg);
   

  }
  return (
    <div className="container">
     <Calender handleDateClick={handleDateClick}/>
     <Events selactabel={selactabel}/>
    </div>
  );
}

export default App;
