import React from 'react';
import { Container, Header, Image, Menu, Icon, Dropdown, Grid, List } from 'semantic-ui-react';

export default class Footer extends React.Component {
  render() {
    const itemStyle = { color: "white" };
    const paddingTop = { paddingTop: "10px", marginTop: "14px" };
    return (
        <div className="footer-background">
          <div className="ui four column grid container">
            <List className="column" style = {paddingTop}>
              <List.Item>MODELS</List.Item>
              <hr/>

              <List.Item>Urus</List.Item>
              <List.Item>Huracan</List.Item>
              <List.Item>Aventador</List.Item>
              <List.Item>Few Off</List.Item>
              <List.Item>Concept</List.Item>
              <List.Item>Ad Personam</List.Item>

            </List>

            <List className="column">
              <List.Item>BRAND</List.Item>
              <hr/>

              <List.Item>People</List.Item>
              <List.Item>History</List.Item>
              <List.Item>Masterpieces</List.Item>
              <List.Item>Forged Compositions</List.Item>
              <List.Item>Carbon Fiber</List.Item>

            </List>

            <List className="column">
              <List.Item>OWNERSHIP</List.Item>
              <hr/>

              <List.Item>Financial Services</List.Item>
              <List.Item>Dealer Locator</List.Item>
              <List.Item>Service Locator</List.Item>
              <List.Item>Accessori Originali</List.Item>
              <List.Item>Spare Parts</List.Item>
              <List.Item>Services</List.Item>
              <List.Item>Polo Storico</List.Item>

            </List>

            <List className="column">
              <List.Item>EXPERIENCE</List.Item>
              <hr/>

              <List.Item>Lamborghini Lounge</List.Item>
              <List.Item>News</List.Item>
              <List.Item>Events</List.Item>
              <List.Item>Museum</List.Item>
              <List.Item>Esperienza Programs</List.Item>
              <List.Item>Mobile App</List.Item>

            </List>
          </div>
        </div>
    )
  }
}
