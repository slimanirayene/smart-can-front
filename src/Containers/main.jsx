import React from "react";
import { Card, Col, Row } from "antd";
import Navbar from "../components/navbar";

export default function Main() {
	const numCols = 8; // Number of columns you want

	const cols = [];
	for (let i = 1; i <= numCols; i++) {
		cols.push(
			<Col key={i} xs={24} sm={12} md={8} lg={6}>
				<Card
					hoverable={true}
					title={`Poubelle ${i}`}
					bordered={false}
					style={{
						width: "100%",
						margin: 10,
						height: 250,
						maxWidth: 250,
						background: `linear-gradient(to top, #fff56b ${10}%, #fcfcfc ${40}%)`,
						border: "2px solid #142b01",
						color: "#142b01",
					}}
				>
					<b>30%</b>
				</Card>
			</Col>
		);
	}

	const iconStyle = {
		width: "100px",
		height: "100px",
		background: `linear-gradient(to top, red ${40}%, white ${60}%)`,
		borderRadius: "10%",
	};

	return (
		<div className="main">
			<Navbar />
			<Row gutter={[16, 16]}>{cols}</Row>
		</div>
	);
}
