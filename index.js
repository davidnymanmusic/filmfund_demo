import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DatePicker } from 'antd';
import { Collapse } from 'antd';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends React.Component {
	state = {
		current: 'mail'
	};
	handleClick = e => {
		console.log('click ', e);
		this.setState({
			current: e.key
		});
	};
	render() {
		return (
			<div style={{ margin: 100 }}>
				<h1>FILMFUND</h1>
				<Menu
					onClick={this.handleClick}
					selectedKeys={[this.state.current]}
					mode="horizontal">
					<SubMenu title={<span>Trending</span>}>
						<MenuItemGroup title="United States">
							<Menu.Item key="setting:1">Option 1</Menu.Item>
							<Menu.Item key="setting:2">Option 2</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup title="Global">
							<Menu.Item key="setting:3">Option 3</Menu.Item>
							<Menu.Item key="setting:4">Option 4</Menu.Item>
						</MenuItemGroup>
					</SubMenu>
					<SubMenu title={<span>Genres</span>}>
						<MenuItemGroup title="United States">
							<Menu.Item key="setting:1">Option 1</Menu.Item>
							<Menu.Item key="setting:2">Option 2</Menu.Item>
						</MenuItemGroup>
						<MenuItemGroup title="Global">
							<Menu.Item key="setting:3">Option 3</Menu.Item>
							<Menu.Item key="setting:4">Option 4</Menu.Item>
						</MenuItemGroup>
					</SubMenu>
				</Menu>
				<hr />
				<br />
				<Row gutter={16}>
					<Col className="gutter-row" span={8}>
						<div className="gutter-box video-container">
							<iframe
								height="315"
								width="560"
								src="https://www.youtube.com/embed/HyophYBP_w4"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
						</div>
						<p>Director: Claudio Fragasso</p>
					</Col>
					<Col className="gutter-row" span={8}>
						<div className="gutter-box video-container">
							<iframe
								height="315"
								width="560"
								src="https://www.youtube.com/embed/HyophYBP_w4"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
						</div>
						<p>Director: Claudio Fragasso</p>
					</Col>
					<Col className="gutter-row" span={8}>
						<div className="gutter-box video-container">
							<iframe
								height="315"
								width="560"
								src="https://www.youtube.com/embed/HyophYBP_w4"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
						</div>
						<p>Director: Claudio Fragasso</p>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col className="gutter-row" span={8}>
						<div className="gutter-box video-container">
							<iframe
								height="315"
								width="560"
								src="https://www.youtube.com/embed/pjc4ZPTX1XQ"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
						</div>
						<p>Director: Tommy Wiseau</p>
					</Col>
					<Col className="gutter-row" span={8}>
						<div className="gutter-box video-container">
							<iframe
								height="315"
								width="560"
								src="https://www.youtube.com/embed/pjc4ZPTX1XQ"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
						</div>
						<p>Director: Tommy Wiseau</p>
					</Col>
					<Col className="gutter-row" span={8}>
						<div className="gutter-box video-container">
							<iframe
								height="315"
								width="560"
								src="https://www.youtube.com/embed/pjc4ZPTX1XQ"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
						</div>
						<p>Director: Tommy Wiseau</p>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col className="gutter-row" span={8}>
						<div className="gutter-box video-container">
							<iframe
								height="315"
								width="560"
								src="https://www.youtube.com/embed/EVCrmXW6-Pk"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
						</div>
						<p>Director:  Neil LaBute</p>

					</Col>
					<Col className="gutter-row" span={8}>
						<div className="gutter-box video-container">
							<iframe
								height="315"
								width="560"
								src="https://www.youtube.com/embed/EVCrmXW6-Pk"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
						</div>
						<p>Director:  Neil LaBute</p>

					</Col>
					<Col className="gutter-row" span={8}>
						<div className="gutter-box video-container">
							<iframe
								height="315"
								width="560"
								src="https://www.youtube.com/embed/EVCrmXW6-Pk"
								frameborder="0"
								allow="autoplay; encrypted-media"
								allowfullscreen
							/>
						</div>
						<p>Director:  Neil LaBute</p>

					</Col>
				</Row>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
