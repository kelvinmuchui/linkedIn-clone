import styled from "styled-components";
import React , { useState, useEffect} from 'react'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import ImageIcon from '@material-ui/icons/Image';
import CreateIcon from '@material-ui/icons/Create';
import MyOption from './MyOption';
import Post from './Post';
import {db} from "../Firebase"
import firebase from "firebase"
import FlipMove from "react-flip-move"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
function Main() {

    const [input, setInput] = useState(''); 
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser)
    useEffect(() => {

        db.collection("posts").orderBy('timestamp',"desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id:doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [])
    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })


        setInput("");

        
    }

    return (
        <Container>
            <InputContainer>
                <FeedInput>
                    <CreateIcon/>
                    <form>
                        <input value ={input} nChange = {e =>setInput(e.target.value)} type="text" placeholder = "Enter post here"/>
                        <button onClick = {sendPost}  type = "Submit">Send</button>
                    </form>
                </FeedInput>
                <InputOptions>
                    <MyOption Icon = {ImageIcon} title ="Photo" color = "#70B5F9"/>
                    <MyOption Icon = {SubscriptionsIcon} title ="Video"
                    color = "#E7A33E"/>
                    <MyOption Icon = {EventNoteIcon} title ="Event"
                    color = "#C0CBCD"/>
                    <MyOption Icon = {CalendarViewDayIcon} title ="Write article"
                    color = "#7FC15E"/>
                    </InputOptions>

            </InputContainer>
            <FlipMove>
            {posts.map(({id, data: {name, description, message, photoUrl, timestamp}}) =>(
                    <Post
                    key = {id}
                    name = {name}
                    description = {description}
                    message = {message}
                    photoUrl = {photoUrl}
                    timestamp ={timestamp}/>
                ))}
            </FlipMove>
        </Container>
    )
}


const Container = styled.div`
    margin: 0 20px;
`;
const InputContainer = styled.div`
    background-color:#fff;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    margin-bottom: 20px;


`;

const FeedInput = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 30px;
    padding: 10px;
    color:gray;
    padding-left: 15px;

    & > form {
        display: flex;
        width: 100%;
    
    }
    & > form > input {
        border: none;
        flex: 1;
        margin-left: 10px;
        outline-width: 0;
        font-weight: 600;
    }
    & > form > button  {
        display: none;
    }

`

const InputOptions = styled.div`

    display: flex;
    justify-content: space-evenly;
`

export default Main
