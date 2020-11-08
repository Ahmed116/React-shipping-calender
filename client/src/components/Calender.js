import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";

export default class Calender extends React.Component {

   
      
  render() {
    return (
        <div className='box-1'>
        <FullCalendar
        className='calender'
        plugins={[ dayGridPlugin,interactionPlugin  ]}
        dateClick={this.props.handleDateClick}
        weekends={true}
        selectable 
         
          
     
        events={ [
            {
              display: 'background',
              color: '#56a2d6',
              allDay: true,
              daysOfWeek: [2],
              title: 'Overnight',
              description: '$79.99',
              eventOpacity:1.0

            },
            {
              display: 'background',
              color: '#e17628',
              allDay: true,
              daysOfWeek: [3,4,5],
              title:'standard',
              description:'$9.99',
              eventOpacity:1.0

            },
              {
              display: 'background',
              color: (" #074375"),
              allDay: true,
              daysOfWeek: [6],
              title: 'Saturday',
              description: '$9.99',
              eventOpacity:1.0
                        

            },
          ]
        }
        

      />
          
     
      </div>
      
    )
  }
 
}
