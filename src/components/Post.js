import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import styled from "styled-components";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import MyOption from './MyOption';

const Post = forwardRef(({name, description, message, photoUrl, timestamp }, ref) => {
    return (
        <Container>
            <PostHeader>
                <Avatar src ={photoUrl}>{name[0]}</Avatar>
                <PostInfo>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <p>5</p>
                </PostInfo>
            </PostHeader>
            <PostBody>
                <p>{message}</p>
            </PostBody>
            <PostButtons>
                <MyOption Icon = {ThumbUpAltIcon } title = "Like"
                color = "gray"/>
                <MyOption Icon = {ChatOutlinedIcon } title = "Coment"
                color = "gray"/>
                <MyOption Icon = {ShareOutlinedIcon} title = "Share"
                color = "gray"/>
                <MyOption Icon = {SendOutlinedIcon } title = "Send"
                color = "gray"/>
            </PostButtons>
        </Container>
    )
})

const Container = styled.div`
background-color:white;
padding:15px;
margin-bottom: 10px;
border-radius: 10px;
`
const PostHeader = styled.div`
display: flex;
margin-bottom: 10px;
`
const PostInfo = styled.div`
margin-left: 10px;
cursor: pointer;

    & > p {
        font-size : 12px;
        color: gray;
    }
    & > h2 {
        font-size: 12px;
        cursor: pointer;


        &:hover{
            color : #007ACC;
            text-decoration: underline;
        }
    }


`
const PostBody = styled.div`
    overflow-wrap: anywhere;
   
`
const PostButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
`

export default Post
