import React from 'react';
import { Container, Header, Image, Menu, Icon, Dropdown, Grid, List } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const itemStyle = { color: "white" };
    return (
        <div className='black-background-color'>
          <Menu borderless icon size='mini' className="fixed navbar">
            <Container>
              <Menu.Item className="ui tiny image"><Image src="http://www.car-brand-names.com/wp-content/uploads/2015/03/Lamborghini-Logo.png"/></Menu.Item>
              <Menu.Item>MODELS</Menu.Item>
              <Menu.Item>BRAND</Menu.Item>
              <Menu.Item>OWNERSHIP</Menu.Item>
              <Menu.Item>EXPERIENCE</Menu.Item>
              <Menu.Item>MOTORSPORT</Menu.Item>
              <Menu.Item>STORE</Menu.Item>

              <Menu.Item position="right" style={itemStyle}><Icon size="large" inverted name="cog"/></Menu.Item>
              <Menu.Item position="right" style={itemStyle}><Icon size="large" inverted name="share alternate icon"/></Menu.Item>
              <Menu.Item position="right" style={itemStyle}><Icon size="large" inverted name="search icon"/></Menu.Item>
              <Menu.Item position="right" style={itemStyle}><Icon size="large" inverted name="audio description icon"/></Menu.Item>
            </Container>
          </Menu>
        </div>
    )
  }
}
