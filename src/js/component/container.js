import React from "react";

import { Jumbotron } from "./jumbo.js";
import { Tarjetas } from "./card.js";

export function Divcontainer() {
	return (
		<div className="row">
			<div className="col-sm-1"></div>
			<div className="col-sm-10">
				<Jumbotron />
				<Tarjetas />
			</div>
			<div className="col-sm-1"></div>
		</div>
	);
}
