import React from 'react'
import styled from 'styled-components'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import EventIcon from '@material-ui/icons/Event';
import GroupIcon from '@material-ui/icons/Group';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
function NetworkSidebar() {
    return (
        <Container>
            <p>Manage My Network</p>
            <Stats>
            <Stat>
                
                <Statdata>
                <BusinessCenterIcon/>
                    <p>Connections</p>
                    
                </Statdata>
                <StatNumber>1615</StatNumber>
            </Stat>

            <Stat>
            <Statdata>
                <PermContactCalendarIcon/>
                    <p>Contact</p>
                    
                </Statdata>
                <StatNumber>297</StatNumber>
            </Stat>
            <Stat>
            <Statdata>
                <PeopleAltIcon/>
                <p>People| Follow</p>
                </Statdata>
                <StatNumber>8</StatNumber>
            </Stat>
            <Stat>
            <Statdata>
                <GroupIcon/>
                <p>Group</p>
            </Statdata>   
                <StatNumber>16</StatNumber>
            </Stat>
            <Stat>
            <Statdata>
                <EventIcon/>
                <p>Events</p>
                </Statdata>
                <StatNumber>10</StatNumber>
            
            </Stat>
            <Stat>
            <Statdata>
                <MenuBookIcon/>
                <p>Pages</p>
            </Statdata>
                <StatNumber>23</StatNumber>
            </Stat>
            <Stat>
            <Statdata>
            <FiberNewIcon/>
                <p>Newsletter</p>
                
            </Statdata>
            <StatNumber>4</StatNumber>
            </Stat>
            <Stat>
                {/* <BusinessCenterIcon/> */}
                <p># Hashtags</p>
                <StatNumber>16</StatNumber>
            </Stat>
                <ShowLess>
                    <p>Show less</p>
                    <ExpandLessIcon/>
                </ShowLess>
            </Stats>
          
            <Bottom>
                <h4>Add Personal Contacts</h4>
                <p>We’ll periodically import and store your contacts to help you and others connect. You choose who to connect to and who to invite.<span>Learn more</span> </p>
                <InputBox>
                    <p>Muchuikelvin@gmail.com</p>
                </InputBox>

                <InputButton>Continue</InputButton>
                <p>More options</p>
            </Bottom>
        </Container>
    )
}
const Container = styled.div`
  background: white ;
  margin-left: 30px;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  & > p {
      margin: 10px 10px;
      font-size:20px;
      font-weight: 700px
  }

`
const StatNumber = styled.p`
    
`

const Stats = styled.div``
const Statdata = styled.div`
display: flex;
align-items: center;
  & > p {
      margin-left: 10px;
  }

`
const Stat = styled.div`
display: flex;
flex:1;

color: gray;
margin: 10px 30px;
justify-content: space-between;
  & > p {
      font-size:16px;
  }

`

const ShowLess = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: center;
  color: gray;
  font-size:16px;
  font-weight: 700;
  & > p {
    margin-right: 10px;

  }
`

const Bottom = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 10px;
  text-align:center;
  & > h4 {
      margin-top:10px;
      margin-bottom: 10px;
      font-weight: 500;

  }
  & > p {
      font-size :12px;
      margin: 10px 40px;
      color: gray;

      & > span {
          color:#0A66C2;

          &:hover {
              text-decoration: underline;
          }
      }
      
  }

`
const InputBox = styled.div`
    padding:10px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 100%), 0 0 0 rgb(0 0 0 / 20%);
    margin: 10px 20px;

    & > p {
        font-size : 12px;
        letter-spacing:0.8px;
    }
`

const InputButton = styled.button`
    padding: 10px 20px;
    border-radius:20px;
    font-size: 18px;
    color: #0A66C2;
    background: white;
    border: 1px solid #0A66C2;
`
export default NetworkSidebar
