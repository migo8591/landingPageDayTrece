import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar.js";
import { Divcontainer } from "./container.js";
import { Piedepagina } from "./footer.js";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Divcontainer />
			<Piedepagina />
		</div>
	);
}
