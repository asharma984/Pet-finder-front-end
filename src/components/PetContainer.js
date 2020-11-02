import React,{Component} from "react"
import ReactDOM from "react-dom"

class pet extends Component{
    constructor(props){
        super(props)
       this.state={
            id:49667623,
            photos:[]
       };
        this.componentDidMount=this.componentDidMount.bind(this)
    }
  componentDidMount(){
     const apiKey='32prxQLwZTLo8zbqxaHYWCKAMQNS6FoHGXanw5GUddqBeBA8Uv'
      const secret='axL2RnyJMWCQQPovPu1BTIVLJA4UWVwdISLwHnzA'
      fetch('https://api.petfinder.com/v2/oauth2/token', {
          method: 'POST',
          body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })
      .then(resp=> resp.json())
          .then(data=>

                fetch(`https://api.petfinder.com/v2/animals/${this.state.id}`, {
          headers: {
              'Authorization':data.token_type+' '+ data.access_token,
              'Content-Type': 'application/x-www-form-urlencoded'
          }
      })

      .then(function (resp) {

        // Return the API response as JSON
        return resp.json();

    }).then(data=> {
        console.log('pets', data);
        this.setState({photos:data});
        // Log the pet data

        console.log('local pet',this.state.photos)
    }
    )
  )    .catch(function (err) {
          console.log('something went wrong', err);

      })
  }

    render(){
        return (
            <div>
              <h1>hello world!</h1>
                

            </div>
        )
    }
}
export default pet
