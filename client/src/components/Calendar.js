import React, { Component} from 'react';
import styled from 'styled-components'

const Text = styled.div`
  text-align: center;
  font-size: 50px;
  margin: 30px auto;
  background: -webkit-linear-gradient(#faff00, #f437b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    font-family: 'Cookie', cursive;
`
const Body = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 80px;
   background: -webkit-linear-gradient(#faff00, #f437b9);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
`
export default class Calendar extends Component {

    render(){
      return (
        <div>

  <Text>Schedule a time to meet with me</Text>
          <Body>


            <iframe src="https://calendar.google.com/calendar/embed?src=bq8tbumq3kvfk101g83o1v66ls%40group.calendar.google.com&ctz=America%2FNew_York"  width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </Body>
          </div>


        );
    }
}
