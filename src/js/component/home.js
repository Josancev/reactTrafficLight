import React from "react";

//include images into your bundle

//create your first component
export class Traffic extends React.Component {
	constructor() {
		super();
		this.state = {
			lightC: null
		};
	}

	render() {
		//console.log(this.state);
		let redClass = "";
		if (this.state.lightC == "red") redClass = "on";
		let yellowClass = "";
		if (this.state.lightC == "yellow") yellowClass = "on";
		let greenClass = "";
		if (this.state.lightC == "green") greenClass = "on";
		return (
			<div>
				<div id="trafficTop" />
				<div id="container">
					<div
						className={"red light " + redClass}
						onClick={() => this.setState({ lightC: "red" })}
					/>
					<div
						className={"yellow light " + yellowClass}
						onClick={() => this.setState({ lightC: "yellow" })}
					/>
					<div
						className={"green light " + greenClass}
						onClick={() => this.setState({ lightC: "green" })}
					/>
				</div>
				<div>
					<h3>
						<p>Traffic Lights</p>
					</h3>
				</div>
			</div>
		);
	}
}
