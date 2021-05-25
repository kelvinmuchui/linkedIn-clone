import React from 'react'
import styled from 'styled-components'

function NetworkMain() {
    return (
        <Container>
            <MainTop>
                <p>No pending invitations</p>
                <p>Manage</p>
            </MainTop>
            <MainCenter>
                <Title>
                    <p>Online Events For you</p>
                    <p>See all</p>
                </Title>
                <CardOptions>
                <CardView>
                    <CardImg>
                        <img src="/images/card-bg.svg"/>
                    </CardImg>
                   

                    <ItemView>
                    <Photo src="https://media-exp1.licdn.com/dms/image/C561EAQFhDRZB1phoDQ/event-logo-shrink_400_400/0/1602237217128?e=1622055600&v=beta&t=zQp8pi9E996JCMXH1ulqfYB0BQwSfu3PccWfct2lMyk"/>

                        <h4>Youth-Driven and Youth Centred Development</h4>
                        <p>May 23 2021, 7:00 PM</p>
                        <p>633 attendees</p>
                        <ItemButton>View </ItemButton>
                    </ItemView>
                </CardView>
                <CardView>
                    <CardImg>
                        <img src="/images/card-bg.svg"/>
                    </CardImg>
                    <ItemView>
                    <Photo src="https://media-exp1.licdn.com/dms/image/C561EAQFw38IyCAkDww/event-logo-shrink_200_200/0/1611931272763?e=1622055600&v=beta&t=KVebjzdViMZpnHTSWjPwfLmZUq2R9wPx12UJiJXaM_g"/>

                        <h4>AI Expo Africa 2021 ONLINE (7th-9th September)</h4>
                        <p>Tue, Sep 7 - Thu, Sep 9</p>
                        <p>1000 attendees</p>
                        <ItemButton>View </ItemButton>
                    </ItemView>

                </CardView>
                <CardView>
                    <CardImg>
                        <img src="/images/card-bg.svg"/>
                    </CardImg>
                    <ItemView>
                    <Photo src="https://media-exp1.licdn.com/dms/image/C4E1EAQFiatvXxKp9Eg/event-logo-shrink_200_200/0/1585081722915?e=1622055600&v=beta&t=G5zhF3KOGzBTBJjcZX9cJ3YKGrtWRqZP3wdsp0hgR40"/>

                        <h4>2nd Annual Africa Solar Energy Forum</h4>
                        <p>Tue, Sep 7 - Wed, Sep 8</p>
                        <p>633 attendees</p>
                        <ItemButton>View </ItemButton>
                    </ItemView>
                </CardView>
                <CardView>
                    <CardImg>
                        <img src="/images/card-bg.svg"/>
                    </CardImg>
                    <ItemView>
                    <Photo src="https://media-exp1.licdn.com/dms/image/C4D1EAQFXNLXGBqJdTw/event-logo-shrink_200_200/0/1612541145657?e=1622055600&v=beta&t=R2CTU2W0ZapikCly54ATSDpDglK_jFXvNENq1yK5YwY"/>

                        <h4>World Mental Health Congress</h4>
                        <p>Mon, Jun 21 - Tue, Jun 22</p>
                        <p>888 attendees</p>
                        <ItemButton>View </ItemButton>
                    </ItemView>
                </CardView>
                <CardView>
                    <CardImg>
                        <img src="/images/card-bg.svg"/>
                    </CardImg>
                    <ItemView>
                    <Photo src="https://media-exp1.licdn.com/dms/image/C4D1EAQHBH4xuwwfoXQ/event-logo-shrink_400_400/0/1620256261976?e=1622055600&v=beta&t=g7aqZSW_zPE6Tl8Wdp3VX0ZftJKfmaY3wtKjGbm_6as"/>

                        <h4>Data Science Workshop</h4>
                        <p>Sat, May 29, 6:00 PM</p>
                        <p>733 attendees</p>
                        <ItemButton>View </ItemButton>
                    </ItemView>
                </CardView>
                <CardView>
                    <CardImg>
                        <img src="/images/card-bg.svg"/>
                    </CardImg>
                    <ItemView>
                    <Photo src="https://media-exp1.licdn.com/dms/image/D4E1EAQGkbnXoKTzHQQ/event-logo-shrink_200_200/0/1620814083035?e=1622055600&v=beta&t=LomijSwCQnX7ykLAzmcgK7RBVQ0xCjKHk8vKEMBbwZ8"/>

                        <h4>Webinar: Being a Software Product Manager by Microsoft Sr PM</h4>
                        <p>Fri, Jun 25, 4:30 PM</p>
                        <p>633 attendees</p>
                        <ItemButton>View </ItemButton>
                    </ItemView>
                </CardView>
                
                </CardOptions>
              
            </MainCenter>
        </Container>
    )
}


const Container = styled.div`
    margin-right: 20px;
`
const MainTop = styled.div`
    display: flex;
    background: white;
    padding:20px;
    border-radius:5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    justify-content: space-between;
    

`
const MainCenter = styled.div`
    background: white;
    width: 100;
    margin-top:20px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    border-radius:5px;
    padding:20px;
    


`
const CardOptions = styled.div`
display: grid;
grid-template: repeat(3, 1fr) / repeat(3, 1fr);
row-gap: 10px;
column-gap: 15px;
margin-top: 20px;



`
const Title = styled.div`
    display: flex;
    justify-content: space-between;

`

const CardView = styled.div`
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    border-radius:10px;


`

const CardImg = styled.div`

    & > img{
        height: 62px;
        width:242px;
    }
    


`
const ItemView = styled.div`
    margin:0px 10px;

    & > p{
        font-size :12px;
        margin:10px 0px;
        color: gray;
    }
    
`
const ItemButton = styled.button`
padding: 10px 20px;
border-radius:20px;
font-size: 15px;
color: #0A66C2;
background: white;
width: 100%;
font-weight: 700;
border: 1px solid #0A66C2;
margin-bottom: 20px;
`
const Photo = styled.img`
    
    width: 72px;
    height: 72px;;
    box-shadow: none;
    margin-top: -40px;
    z-index:1;
   
    `
export default NetworkMain
