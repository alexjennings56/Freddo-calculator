import React from "react";

class ClickForFredoPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bitCoin: 0,
            fredo: 0.25,
            numoffredos: 0
        }
        this.getBitCoin()
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.getBitCoin(),
            5000
        )
    }

    getBitCoin = () => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json')
            .then(data=>data.json())
            .then((data)=>{
                const rate_float = parseFloat(data.bpi.GBP.rate_float).toFixed(2)
                this.setState({bitCoin: rate_float, numoffredos: rate_float/0.25 })
            })
    }

    render() {
        return (
            <div>
                <h1>Price of a Freddo: £{ this.state.fredo }</h1>
                <h1>How much 1 Bitcoin is worth: £{ this.state.bitCoin }</h1>
                <h1>How many Freddos you can buy for one Bitcoin: { this.state.numoffredos }</h1>
                <img src='https://i2-prod.birminghammail.co.uk/news/midlands-news/article9784315.ece/ALTERNATES/s615b/Freddo.png'>
                </img>
            </div>
        )
    }
}

export default ClickForFredoPrice