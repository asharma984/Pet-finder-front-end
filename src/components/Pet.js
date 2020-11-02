import React,{Component} from 'react'


class Pet extends Component{
    constructor(props){
        super(props);
        this.state={
            animal:props.animal.animal
        }
    }


    render() {

        return (

            <div className="ui card" style={{ background: "#007bff"}}>
                <section>

                    <img src={this.state.animal.primary_photo_cropped.medium} />
                </section>
                {/*<h1>{this.state.animal.name}</h1>*/}
               <h2>Age: {this.state.animal.age}</h2>
                <h2> Description:{this.state.animal.description}</h2>
                <h2>Gender:{this.state.animal.gender}</h2>
                <h2>Species: {this.state.animal.species}</h2>
                <a href={this.state.animal.url}><h2>View full profile</h2></a>

            </div>
        )
    }
}

export default Pet