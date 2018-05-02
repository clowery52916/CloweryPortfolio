import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarRightSlideOut extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle</Button>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='slide out'
            width='thin'
            direction='right'
            visible={visible}
            icon='labeled'
            vertical
            inverted
          >
            <Menu.Item name='home'>
              <Link to='/'/>
              <Icon name='home' color='blue'/>
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' color='white' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarRightSlideOut
