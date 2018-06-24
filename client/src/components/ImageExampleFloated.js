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
  font-family: 'Cookie', cursive;
  font-size: 40px;
  background: -webkit-linear-gradient(#006C84, #FFCCBB);
  -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
 @media (max-width: 320px) {
    display: none;
  }
`;
const BodyContainer = styled.div `
  font-family: 'The Girl Next Door', cursive;
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
          <span class="first-character sc">H</span>ELLO
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
          <p class="line-break margin-top-10"></p>
        </div>
      </section>
      <section>
                <div class="block">
                  <p>
                    <span class="first-character sc">W</span>HO Double Down United we stand murrica Budweiser little bighorn Tippecanoe and Tyler too. The south will rise again tombstone piledriver NASCAR grassy knoll war of northern aggression. Tom Cruise this is what we call the Muppet Show roll that beautiful bean footage. Nothing to fear but fear itself Monsanto propane and propane accessories tea party. CNN’s ratings are down smallpox blanket American football G.I. Joe blame Canada. Love it or leave it Brett Favre goodnight and goodluck I wanna be like Mike y’all come back now, hear. Bleed red white and blue vast right-wing conspiracy bulk data collection blonde haired, blue eyed Jesus. Hot dog these colors don’t run y’all don’t mess with Texas Mr. Gorbachev, tear down this wall.</p>
                  <p class="line-break margin-top-10"></p>
</div>
</section>
      <section>
        <div class="block">
          <p>
            <span class="first-character sc">W</span>ho am I?</p>
          <p class="line-break margin-top-10"></p>
          <p class="margin-top-10">
      <h4>Who am I?</h4>
      <p>
      </p>
    </p>
  </div>
</section>


      <br/>
      <h4>Who am I as a developer?</h4>
      <p>
        I thoroughly enjoy back-end development, but I am proficient on the front-end side as well. I really love problem solving and breaking things down step by step. I love being a part of an industry that is a team. I love knowing that if there is a problem I am having trouble solving, someone has been there before me, and are always more than willing to guide me in the right direction. Currently I am using my skills as a developer, building websites for non-profit organizations, while working on some of my own passion projects. Please feel free to check them out on my project page. They are still a work in progress, but I am so excited to be building them and hope to make them into something truly amazing.
        <br/>
        I am looking for a full-time position with a company that I can call my forever home, so if you are interested and think I may be a good fit for your team, please reach out! I would love to hear from you. I am also willing to have a mentor, or work on some projects with my fellow devs, so if there is anything I can help with, give me a call!
        <br/>Thank you so much for visiting! I hope to hear from you soon! Have an amazing day!!
      </p>
      <h6>If you are a non-profit organization, in need of a developer, please email me or call me to discuss how I may be of service.
      </h6>
      {/* <ImageThree src='https://i.imgur.com/QDOBXiV.jpg' size='small' floated='right' /> */}
    </div>
    </BodyContainer>
  </div>
  )

export default ImageExampleFloated
