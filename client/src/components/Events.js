import React from 'react'
export default class Events extends React.Component {
constructor(props) {
    super(props)

    this.state = {
         
    }
    
}


    render(){
        return(
            <div className='box-2'>
                <h2 className='delivary-heading'>DELIVERY DATE</h2>
                <br/>
                <hr/>
                <p>Select the day you wish to receive your order. Our products ship frozen- please make sure you plan ahead and save time for thawing</p>
                <br/>
                <div className='main-date'>
               <div className='date'><span className='date-standard'></span>Standard - $9.99</div>
               <div className='date'><span className='date-express'></span>Express - $24.99</div>
               <div className='date'><span className='date-overnight'></span>Overnight - $79.99</div>
               <div className='date'><span className='date-saturday'></span>Saturday - $0.00 Upgrade Free*</div>
            </div>
            <br/>
            <br/>
            <br/>
            <hr/>
        <div className='result'><span style={{background:this.props.selactabel.color, height: '27px',
    width: '55px',
    display: 'block',
        marginRight: '3px'}}></span>{'You have selected'}{' '}{this.props.selactabel.title}{' '}{'Shipping'}{'-'}{this.props.selactabel.description}{' '}{'Your package will arrive on'}{' >>'}{this.props.selactabel.clicked}</div>

            </div>
        )
    }
}