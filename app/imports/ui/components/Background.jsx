import React from 'react';
import { Container, Header, Image, Menu, Icon, Dropdown, Grid, List } from 'semantic-ui-react';

export default class Background extends React.Component {
  render() {
    const itemStyle = { color: "orange" };
    return (
        <Menu borderless className="lambo-background">
          <Menu.Item position="center" style={itemStyle}> <h1> Lamborghini Hawaii </h1> </Menu.Item>
        </Menu>
    )
  }
}
