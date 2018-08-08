import React from 'react'
import {Segment, Image} from 'semantic-ui-react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Footer from './Footer'

const ImageOne = styled.img `
  height: 100vh;
  width: 40vw;
  float: left;
  padding:none;
  border-collapse: separate;
  @media (max-width: 320px) {
     display: none;
   }

`
const FirstLetter = styled.div `

  text-align: center
  font-family: 'Oswald', cursive;
  font-size: 40px;
  background: -webkit-linear-gradient(#006C84, #FFCCBB);
  -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
 @media (max-width: 320px) {
    display: none;
  }
`;
const BodyContainer = styled.div `
  font-family: 'Oswald', cursive;
    background-position: center;
    background-size: cover;
    text-align: center;
    background-repeat: no-repeat;
    text-align: center;
    padding: inherit;
    background: linear-gradient(to top, rgba(0, 108, 132,1),rgba(255, 204, 187, 1));
    font-weight: bold;
    justify-content:center;
  @media (max-width: 320px) {
     display: flex;
   }
    span{
      font-size: 12px;
    }
    h4{
      font-family: 'Cookie', cursive;
      font-size: 25px;
      color: black;
  ${ ''/* background: -webkit-linear-gradient( #faff00, rgb(240, 46, 156));
      -webkit-background-clip: text;
     -webkit-text-fill-color: transparent; */}

    }


`
const Main = styled.div `
    height: 100vh;
`

const ImageExampleFloated = () => (<div>
  <div id="parallax-container">
    <section class='background-one'>
      <section class='background-two'>
        <section class='background-three'>
          <div class="parallax-five">
            <h2>Hello</h2>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Scroll</h2>
          </div>
        </section>
      </section>
    </section>

  </div>
  <BodyContainer>
    <div id="parallax-container">
      <section>
        <div class="block">
          <p>
            <br/>
            <br/>
          <span class="first-character sc">H</span><br/>
          <br/>ELLO
        THERE, I'M COURTNEY! I AM AN EXTREMELY OUTGOING, POSITIVE PERSON. I LOVE TO SURROUND MYSELF WITH GOOD PEOPLE, GREAT BEER, AND GOOD FOOD. I LOVE CREATING THINGS,
WHETHER IT'S MAKING A NEW WEB APP OR REFINISHING SOME FURNITURE I FOUND AT A THRIFT STORE. I JUST LOVE MAKING THINGS BEAUTIFUL AND UNIQUE. MOST
DAYS, YOU CAN FIND ME WORKING IN MY HAMMOCK, LISTENING TO THE BIRDS AND TAKING IN THE BEAUTY OF NATURE. WHILE I AM NOT WORKING, YOU CAN
USUALLY FIND MY HUSBAND AND ME AT A NEARBY BREWERY, A LOCAL FESTIVAL, A MOVIE OR A SHOW AT THE FOX. I DO PARTAKE IN THE OCCASIONAL BINGEWATCHING
WEEKEND AS WELL.
I LOVE WORKING WITH A TEAM AND BEING A PART OF SOMETHING GREAT! I WILL ENCOURAGE TEAM MEMBERS TO REACH THEIR GOALS, CHALLENGE AND PUSH THEM
TO BE BETTER, BE A SHOULDER THEY CAN LEAN ON IF THEY'RE HAVING A ROUGH DAY, AND THEN I'LL BUY THEM A DRINK AFTERWARD TO CHEER THEM UP! I'LL BE
HONEST WITH THEM, EVEN IF I KNOW IT'S NOT WHAT THEY WANT TO HEAR AND I WILL ALWAYS PULL MY OWN WEIGHT.
I CAN MANAGE MULTIPLE THINGS AT ANY GIVEN TIME, KEEP MY COOL IN STRESSFUL SITUATIONS AND COME UP WITH SOLUTIONS THAT ARE NOT ALWAYS BLACK
AND WHITE. I LIVE IN THE GREY AREA. I AM ORGANIZED, MOTIVATED, EXTREMELY DETAIL ORIENTED, AND I CAN PRIORITIZE LIKE A MASTER. I AM LOGICAL, BUT I AM
ALSO THOROUGH AND I WILL MAKE SURE WHATEVER I AM DOING, I AM DOING IT RIGHT. I WILL NOT TAKE SHORT-CUTS. I WILL LEARN TO WORK "SMARTER" AS I
GAIN KNOWLEDGE OF THE COMPANY AND CULTURE TO MAKE SURE I AM MANAGING MY TIME TO THE BEST OF MY ABILITY, BUT FIRST, I WILL DO IT RIGHT. I WILL
ALWAYS WORK "HARDER" BECAUSE THAT IS JUST WHO I AM. I TAKE PRIDE IN WHAT I DO. I TAKE PRIDE IN THE TEAMS THAT I WORK WITH. I HAVE LEARNED THAT IN
ORDER TO BE SUCCESSFUL IN ANY ASPECT OF LIFE, YOU MUST UNDERSTAND THE WHY BEHIND EVERYTHING. UNDERSTANDING THE WHYS KEEPS ME EMPATHETIC AND
CURIOUS. IT GIVES ME THE OPPORTUNITY TO SEE THINGS THROUGH SOMEONE ELSE'S EYES AND ALLOWS ME TO VIEW THINGS FROM A DIFFERENT PERSPECTIVE. A
GOOD TEAM ASKS THE WHY'S TOGETHER, COLLABORATES WITH ONE ANOTHER, AND FINDS OUT OF THE BOX SOLUTIONS TO SOLVE PROBLEMS.
        </p>
        <br/>
        <br/>
          <p class="line-break margin-top-10"></p>
        </div>
                <div class="block">
</div>
</section>
      {/* <section>
        <div class="block">
          <p>
            <span class="first-character sc"></span>istory </p>
          <p class="line-break margin-top-10"></p>
          <p class="margin-top-10">
    </p>
  </div>
</section> */}
    </div>
    </BodyContainer>
  </div>
  )

export default ImageExampleFloated
