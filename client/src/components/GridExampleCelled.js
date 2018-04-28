import React, {Component} from 'react';
import styled from 'styled-components'
import {Grid, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const TextContainer = styled.div`
    font-family: 'Satisfy', cursive;
`
const LandingImage = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
`;

const GridExampleCelled = () => (<Grid celled="celled" stackable="stackable">
  <Grid.Row>

    <Grid.Column computer={13}>
      <TextContainer>
      <h1>I'm a full-stack software developer</h1>
      {/* <Link to={`/cities/1`}><h3>See the city.</h3></Link> */}
      {/* <h2>I am a genuinely happy person who loves to drink cold beer and hang out with my husband!
        <br/>
        I love sitting in my hammock, coding and watching nature. I love bird watching.
        <br/>
      I love to travel and explore the world, weather it be in my own back yard or a far off country.
        <br/>
        I have a thirst for knowlege and I am always striving to be the best me I can be.
        <br/>I am not afraid of working hard or taking on new challanges. I once had a job as a crabber. No lie! Best. Job. Ever.
        <br/>I love everything
        <br/>
        I am aware of strengths and I do not get discouraged from weaknesses,
        <br/>
        as they will only lead to future success.
        <br/>I'm so excited to be in an industry where I have the ability to continue to
        <br/>grow and learn new languages and frameworks and build off the skills I have already gained.
        <br/>Let's grab a coffee and discuss how we can can work together.</h2>
      <p>Call me! 470-259-5099 </p> */}
      </TextContainer>
      <Grid.Column computer={3}>

      </Grid.Column>
    </Grid.Column>
  </Grid.Row>
<LandingImage>

  <Image src='https://i.imgur.com/BdkXTOg.jpg?2' width={600} height={600}/>
  <Image src='https://i.imgur.com/I6wdfHL.jpg' width={600} height={600}/>
  {/* <Image src='https://i.imgur.com/kmfup2k.jpg' width={400} height={600}/> */}
</LandingImage>
  {/* <Grid.Row> */}
    {/* <Grid.Column computer={3}>
      <LandingImage src='https://images.unsplash.com/photo-150488950631-d557a48f0d30?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e0bbe98f30034814a40c517f9d261b9&auto=format&fit=crop&w=638&q=800'/>
    </Grid.Column>
    <Grid.Column computer={10}> */}
      <TextContainer>
      <h1>Tech Stack</h1>
      </TextContainer>
      <div>
        <div>
          <Image alt='react logo' src='https://spin.atomicobject.com/wp-content/uploads/20171016145535/ReactJS.png' height={50} width={150}/> {/* //AngularJS: 'https://lh6.googleusercontent.com/-TlY7amsfzPs/T9ZgLXXK1cI/AAAAAAABK-c/Ki-inmeYNKk/w800-h800/AngularJS-Shield-large.png', */}
          <Image alt='Redux' src='https://i1.wp.com/technoetics.in/wp-content/uploads/2016/11/reduxlogo.png?fit=500%2C206' height={60} width={200}></Image>
        </div>

        {/* // neo4j: 'https://avatars3.githubusercontent.com/u/218965?v=3&s=150',
          // 'd3.js': 'https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Logo_D3.svg/1079px-Logo_D3.svg.png',
          // Leaflet: 'http://leafletjs.com/docs/images/logo.png', */
        }

        <br/>
        <div>
          <Image alt='ruby on rails logo' src='http://www.codercaste.com/wp-content/uploads/2013/03/railslogo.png' height={100} width={100}/>
          <Image alt='Ruby' src='http://www.goldenowl.asia/assets/banner-ruby-6a3952edc79e76c5f76fe43de54ca98a6f4df3db7e423c5886902f72d25b80f4.png' height={100} width={150}></Image>
          <Image alt='Rails' src='http://jmyersdev.com/images/rails.png' height={100} width={100}></Image>

        </div>
        <br/>
        <div>
        <Image alt='mongoDB' src='https://webassets.mongodb.com/_com_assets/cms/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png' height={75} width={100}></Image>

        <span>{' '}</span>
        <span>{' '}</span>
        <span>{' '}</span>
        <Image alt='express logo' src='http://mean.io/wp-content/themes/twentysixteen-child/images/express.png' height={50} width={100}/>
        <span>{' '}</span>
        <span>{' '}</span>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2000px-Node.js_logo.svg.png' height={50} width={100} alt='nodejs logo'></Image>
        <span>{' '}</span>
        <span>{' '}</span>
        <span>{' '}</span>
        </div>
        <br/>
        {/* <Image src='https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png' alt='express logo'></Image> */}
        <Image src='https://blog-assets.risingstack.com/2016/Apr/Node_js_database_example_PostgreSQL-1461672928728.png' height={75} width={150} alt='postgreSQL logo'></Image>
        <span>{' '}</span>
        <span>{' '}</span>
        <span>{' '}</span>
        <Image alrt='html css js' src='https://cdn-images-1.medium.com/max/1600/1*JS6rHA65p0RKGVLwH2cC4A.png' height={75} width={150} />
      </div>
    {/* </Grid.Column> */}
    <Grid.Column computer={3}>
      <Image src='https://images.unsplash.com/photo-1506834032040-36f9dcabe7ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7a9c1961a9020d95af82bd7e10dbf93&auto=format&fit=crop&w=500&q=60'/>
    </Grid.Column>
  {/* </Grid.Row> */}
</Grid>)

export default GridExampleCelled
