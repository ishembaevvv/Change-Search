import React from "react";

export default function Card({ email, lastName, firstName }) {
	return (
		<div className="card">
			<div className="avatar"></div>

			<div className="data">
				<h3>
					{firstName} {lastName}
				</h3>
				<b>{email}</b>
			</div>
		</div>
	);
}
