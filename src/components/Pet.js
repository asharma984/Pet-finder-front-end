import React,{Component} from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

class Pet extends Component{
    constructor(props){
        super(props);
        this.state={
            animal:props.animal.animal
        }
    }


    render() {

        return (

        <div  style={{ background: "#EAE7DC"}} >
                {/*<section>*/}

                {/*    <img src={this.state.animal.primary_photo_cropped.medium}  />*/}
                {/*</section>*/}
            <div className="slide-container " style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Zoom scale={0.2} duration={500} >
                    {
                        this.state.animal.photos.map((each, index) => <img key={index} style={{width: "20%"}} src={each.small} />)
                    }
                </Zoom>
            </div>
                {/*<h1>{this.state.animal.name}</h1>*/}
               <h2 style={{ padding: "10px 20px", color: "#AC3B61"}}>Age: {this.state.animal.age}</h2>
                <h2 style={{ padding: "10px 20px", color: "#123C69"}}> Description:{this.state.animal.description}</h2>
                <h2 style={{ padding: "10px 20px", color: "#AC3B61"}}>Gender:{this.state.animal.gender}</h2>
                <h2 style={{ padding: "10px 20px", color: "#123C69"}}>Species: {this.state.animal.species}</h2>
                <a href={this.state.animal.url}><h2>View full profile</h2></a>

            </div>
        )
    }
}

export default Pet