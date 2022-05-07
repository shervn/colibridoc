import './App.css';
import { Container, Divider, Grid, Image, Icon, Header, Segment, Embed, Label } from 'semantic-ui-react'

function App() {
  return (
    <div className="App">
      <div>
        <Container textAlign='center'> <h1>ColibriDoc</h1></Container>
        <Container textAlign='center'> <h3>An Eye-in-Hand Autonomous Trocar Docking System</h3></Container>
        <Container textAlign='center'> <h5>Shervin Dehghani*, Michael Sommersperger*, Junjie Yang, Benjamin Busam, Kai Huang, Peter Gehlbach, Iulian Iordachita, Nassir Navab and M. Ali Nasseri</h5>

          <Label color='blue' as='a' href="mailto:shervin.dehghani[at]tum.de">
            <Icon name='mail' /> shervin.dehghani@tum.de
          </Label>
          <Label color='red' as='a' href="https://arxiv.org/abs/2111.15373">
            <Icon name='copy' /> Arxiv
          </Label>
          <Label as='a' href="">
            <Icon name='github' /> Code
          </Label>
        </Container>
        <Container className='Images' textAlign='justified'>
          <Grid>
            <Grid.Row columns={5}>
              <Grid.Column>
                <Image size='small' circular src='images/authors/shervin.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src='images/authors/michi.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src='images/authors/yang.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src='images/authors/mehrdad.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src='images/authors/beni.jpeg' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={5} centered>
            <Grid.Row>
              <Grid.Column>
                <Image size='small' circular src='images/authors/huang.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src='images/authors/gehlbach.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src='images/authors/iordachita.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src='images/authors/navab.jpeg' />
              </Grid.Column>
              <Grid.Column>
                <Image size='small' circular src='images/authors/nasseri.jpeg' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>

        <Container className='Images' textAlign='justified'>

        <Divider horizontal>
            <Header as='h4'>
              <Icon name='search' />
              Abstract
            </Header>
          </Divider>

          <b>Abstract</b>
          {/* <Divider /> */}
          <p>
            Retinal surgery is a complex medical procedure that requires exceptional expertise and dexterity. For this purpose, several robotic platforms are currently being developed to enable or improve the outcome of microsurgical tasks. Since the control of such robots is often designed for navigation inside the eye in proximity to the retina, successful trocar docking and inserting the instrument into the eye represents an additional cognitive effort, and is, therefore, one of the open challenges in robotic retinal surgery. For this purpose, we present a platform for autonomous trocar docking that combines computer vision and a robotic setup. Inspired by the Cuban Colibri (hummingbird) aligning its beak to a flower using only vision, we mount a camera onto the endeffector of a robotic system. By estimating the position and pose of the trocar, the robot is able to autonomously align and navigate the instrument towards the Trocar's Entry Point (TEP) and finally perform the insertion. Our experiments show that the proposed method is able to accurately estimate the position and pose of the trocar and achieve repeatable autonomous docking. The aim of this work is to reduce the complexity of robotic setup preparation prior to the surgical task and therefore, increase the intuitiveness of the system integration into the clinical workflow.
          </p>

          <Divider horizontal>
            <Header as='h4'>
              <Icon name='video' />
              Videos
            </Header>
          </Divider>
        </Container>

        <Container textAlign='center'>
          <Segment placeholder>
            <Grid columns={2} relaxed='very'>
              <Grid.Column>
                <Header as='h4'>Demo</Header>

                <Embed
                  id='8IkLIuzEqgI'
                  source='youtube'
                />

              </Grid.Column>
              <Grid.Column verticalAlign='middle'>
                <Header as='h4'>Presentation</Header>

                <Embed
                  id='kos6Zlg37hw'
                  source='youtube' />
              </Grid.Column>
            </Grid>

            <Divider vertical />
          </Segment>


          <Grid>
            <Grid.Row columns={5} verticalAlign='middle'>
              <Grid.Column>
                <img src='images/sponsors/tum.jpeg' height={40} />
              </Grid.Column>
              <Grid.Column>
                <img src='images/sponsors/camp.jpeg' height={40} />
              </Grid.Column>
              <Grid.Column>
                <img src='images/sponsors/mri.jpeg' height={40} />
              </Grid.Column>
              <Grid.Column>
                <img src='images/sponsors/jhu.jpeg' height={40} />
              </Grid.Column>
              <Grid.Column>
                <img src='images/sponsors/nsk.jpeg' height={40} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

      </div>
    </div>
  );
}

export default App;
