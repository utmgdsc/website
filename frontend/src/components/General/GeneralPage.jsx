import React, { useState} from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import dsc_utm from "../../assets/dsc_utm.png";
import AdminStyle from "../../css/admin/AdminPage.module.css";
import GeneralResources from "./GeneralResources/GeneralResources";
import GeneralProjects from "./GeneralProjects/GeneralProjects";
import GeneralEvents from "./GeneralEvents/GeneralEvents";
export default function GeneralPage() {
	// reference: https://gdscutm.com
	const [itemKey, setActive] = useState("1");

	const handleActive = (e) => {
		setActive(e);
	};

	// main frame of admin interface
	// includes nav bar and designated area to show content.
	return (
		<div>
			<div className={AdminStyle.admin_logo_box}>
				<h1>
					<img src={dsc_utm} alt="" className={AdminStyle.admin_logo}></img>
				</h1>
			</div>
			<div className="d-flex">
				<Nav
					variant="tabs"
					activeKey={itemKey}
					onSelect={handleActive}
					className={`flex-column pt-5 ${AdminStyle.admin_nav} ${AdminStyle.nav_tabs}`}
				>
					<Nav.Item>
						<Nav.Link eventKey="1" href="#">
							Applications
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="2" href="#">
							Resources
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="3" href="#">
							Events
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="4" href="#">
							Past Projects
						</Nav.Link>
					</Nav.Item>
				</Nav>
				<Accordion
					className={`w-100 ${AdminStyle.info_sec} mb-5`}
					defaultActiveKey={itemKey}
					activeKey={itemKey}
				>
					<Accordion.Collapse eventKey="1">
						<Card className={AdminStyle.container_width}>
							<Card.Header>Applications</Card.Header>
							<Card.Body></Card.Body>
						</Card>
					</Accordion.Collapse>
					<Accordion.Collapse eventKey="2">
						<Card className={AdminStyle.container_width}>
							<Card.Header>Resources</Card.Header>
							<Card.Body>
								<GeneralResources />
							</Card.Body>
						</Card>
					</Accordion.Collapse>
					<Accordion.Collapse eventKey="3">
						<Card className={AdminStyle.container_width}>
							<Card.Header>Events</Card.Header>
							<Card.Body>
								<GeneralEvents />
							</Card.Body>
						</Card>
					</Accordion.Collapse>
					<Accordion.Collapse eventKey="4">
						<Card className={AdminStyle.container_width}>
							<Card.Header>Past Projects</Card.Header>
							<Card.Body>
								<GeneralProjects />
							</Card.Body>
						</Card>
					</Accordion.Collapse>
				</Accordion>
			</div>
		</div>
	);
}
