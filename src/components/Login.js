import React, { Component } from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"


firebase.initializeApp({
    apiKey: "AIzaSyAsuJA8C0fd_lElBwW_25rpGf80J8BIw1U",
    authDomain:"apartfindr.firebaseapp.com"
})

export default class Login extends Component {
    state = { isSignedIn: false}
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
      };

      componentDidMount = () => {
         
          firebase.auth().onAuthStateChanged(user => {
              this.setState({isSignedIn: !!user})
          })
      }

    render() {
        return (
            <div className="App">
             {this.state.isSignedIn ? (
                 <span>
                 <div> Signed In! </div>
                 <button onClick={()=>firebase.auth().signOut()}>Sign Out!</button>
                 <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                 <img alt="profile picture" src={firebase.auth().currentUser.photoURL}/>
                 </span>
             ) : (
                 <StyledFirebaseAuth
                   uiConfig={this.uiConfig}
                   firebaseAuth={firebase.auth()}
                 />
                 )}        
            </div>
        )
    }
}
