import React from 'react'
import styled from "styled-components";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import EditIcon from '@material-ui/icons/Edit';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
function Jobs() {
    return (
        <Container>
            <Top>
                <Topleft>
                <TopData>
                    <BookmarkIcon/>
                    <p> My Jobs</p>
                </TopData>
                <TopData>
                    <NotificationsIcon/>
                    <p> Job Alerts</p>
                </TopData>
                <TopData>
                    <LocalAtmIcon/>
                    <p>  Salary</p>
                </TopData>
                <TopData>
                    <EventAvailableIcon/>
                    <p> Skill Assessment</p>
                </TopData>
                <TopData>
                     <p> More</p>
                    <ArrowDropDownIcon/>
                    
                </TopData>
                </Topleft>
                

                <TopBtn>
                    <EditIcon/>
                    <p>Post a free Job</p>
                </TopBtn>
            </Top>

            <SreachSection>
                <p>Search for your next job</p>
                <Content>
                    <Sleft>

                <Search>
                    <div>
                        <input
                            type= "text" placeholder="Search by title, skill, or company"/>
                            <SearchIcon>
                                <img src="/images/search-icon.svg"/>
                            </SearchIcon>
                    </div>
                </Search>
                <Search>
                    <div>
                        <input
                            type= "text" placeholder="City, state, or zip code"/>
                            <SearchIcon>
                              <LocationOnIcon/>
                            </SearchIcon>
                    </div>
                </Search>
                </Sleft>
                <SRight>
                    <button> Search</button>
                </SRight>
                </Content>
                
            </SreachSection>

        </Container>
    )
}

const Container = styled.div`
    margin-top:80px;
`
const Top = styled.div`
    
    background: white;
    margin: 20px 40px;
    display: flex;
    justify-content: space-between;
    border-radius:10px;
    
`
const TopData = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    padding:20px;
    font-weight: 500;
    
    color: #666666;
    & > p{
        margin-left:10px;
    }


`
const Topleft = styled.div`
    display: flex;

`

const TopBtn = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    padding:10px;
    font-weight: 500;
    border: 2px solid #0A66C2;
    border-radius:25px;
    margin: 20px 40px;
    color: #0A66C2;
    & > p{
        margin-left: 10px;
    }
`
const SreachSection = styled.div`
    background: #DCE6F1;
    margin: 20px 40px;
    text-align: center;
    border-radius:10px;
    & > p {
        font-size :24px;
        padding:20px;
    }
    
    

`

const Content = styled.div`
    display: flex;
    justify-content:space-between;
    padding-bottom: 20px;
    
    
`

const Search = styled.div`
opacity: 1;
position: relative;
border-radius: 10px;
margin: 0px 20px;
& > div {
  max-width: 380px;
  input {
    border: none;
    box-shadow: none;
    background-color: white;
    border-radius: 2px;
    color: rgba(0, 0, 0, 0.9);
    width: 318px;
    padding: 0 8px 0 40px;
    line-height: 1.75;
    font-weight: 400;
    font-size: 14px;
    height: 34px;
    border-color: #dce6f1;
    vertical-align: text-top;
  }
}
`
const Sleft = styled.div`
    padding: 10px;
    display: flex;
    justify-content: space-between
    
`
const SearchIcon = styled.div`
width: 40px;
position: absolute;
z-index: 1;
top: 10px;
left: 2px;
border-radius: 0 2px 2px 0;
margin: 0;
pointer-events: none;
display: flex;
justify-content: center;
align-items: center;
`
const SRight = styled.div`

    & > button {
        margin-right:20px;
        font-size: 16px;
        background-color: #0A66C2;
        border-radius:25px;
        border: 2px solid #0A66C2;
        padding: 10px 20px;
        color: white;
        font-weight: 700;
        width: 150px;
    }

    


`
export default Jobs
