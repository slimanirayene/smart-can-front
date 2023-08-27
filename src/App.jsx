import { useState } from "react";
import "./App.css";
import Main from "./Containers/main";

function App() {
	return (
		<>
			<div className="App">
				<Main />
				{/* <div
					style={{
						height: "10rem",
						width: "100%",
						backgroundColor: "#142b01",
						position: "absolute",
						left: 0,
					}}
				>
					Footer
				</div>{" "} */}
			</div>
		</>
	);
}

export default App;
