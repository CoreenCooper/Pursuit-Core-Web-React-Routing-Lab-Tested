import axios from 'axios'
import {Component} from 'react'

class RandomDog extends Component {
    state = { url: ""} 

    fetchDog = async () => {
        try {
const res = await axios.get("https://dog.ceo/api/breeds/image/random")
this.setState({url: res.data.message})
        } catch (error) {
            console.log(error)
            this.setState({url: ""})
        }
    }

<<<<<<< HEAD
    componentDidMount() {
        this.fetchDog();
=======
    componentDidMount(){
        this.fetchDog()
>>>>>>> 5b30ca605ec91a853f09fe60b278d09d22815d44
    }

    render(){
        const {url} = this.state
        return(
            <div>
<h2>Random Dog</h2>
<img src={url} alt="randomDog"/>
<button onClick={this.fetchDog}>Get Random Dog!</button>
            </div>
        )
    }
}

export default RandomDog;