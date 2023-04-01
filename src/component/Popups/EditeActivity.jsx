
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";

import {
	Cities_table
} from "../index";

const Fill_Form = ({ data, setdata }) => {
	return (
		<form className="w-full max-w-lg ">
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-full"
						htmlFor="grid-name"
					>
						Activity Name
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-name"
						type="text"
						value={data.name}
						onChange={(e) => {
							setdata({ ...data, name: e.target.value });
						}}
						placeholder="Jane Doe"
					/>
				</div>
			</div>
		</form>
	);
};

function EditeActivity({ open, OnClick, setRefresh, activity }) {
	const [villes, setvilles] = useState([]);
	const [loading, setloading] = useState(false);
	let [data, setdata] = useState({
		id: 0,
		Activity: ""
	});

	const hadlerClose = () => {
		OnClick();
	};

	useEffect(() => {
		console.log(activity);
		if (activity != undefined)
			setdata(activity);
	}, [activity]);

	useEffect(() => {
		if (!loading) hadlerClose();
	}, [loading]);

	async function toggle_city(id) {
		const req_body = { cityId: id, activityId: data.value };
		console.log(req_body);
		try {
			const req = await fetch(`${BaseUrl}/Activities/toggle_city`, {
				method: "POST",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(req_body),
				referrerPolicy: "no-referrer",
			});
			if (req.ok)
				setvilles(await req.json());
		} catch (err) {
			console.log(err);
		}

	}

	async function get_Activity_villes() {
		setvilles([]);
		try {
			const req = await fetch(`${BaseUrl}/Activities/cities?id=${data.value}`, {
				method: "GET",
				mode: "cors",
				cache: "no-cache",
				headers: {
					"Content-Type": "application/json",
				},
				referrerPolicy: "no-referrer",
			});
			if (req.ok) {
				let data = await req.json();
				data.map((item) => {
					setvilles((v) => [...v, { value: item.id, name: item.ville_name, status: item.status }]);
				});
			}
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		get_Activity_villes();
	}, [open, activity]);

	return (
		<div>
			<Dialog
				open={open}
				keepMounted
				fullWidth={true}
				onClose={hadlerClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{"Ajoutez une Activity"}</DialogTitle>
				<DialogContent>
					<div className="w-full grid place-content-center">
						<Fill_Form data={data} setdata={setdata} />
						<div className="flex-1">
							<div className="flex flex-col items-start justify-start">
								<h6 className="text-[15px] font-bold text-gray-800">
									Activity Villes
								</h6>
							</div>
							<Cities_table
								Data={villes}
								OnEdit={(item) => {
									toggle_city(item.value)
								}}
							/>
						</div>
					</div>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={async (e) => {
							setloading(true);
							try {
								await fetch(`${BaseUrl}/Activities/edit`, {
									method: "PUT",
									mode: "cors",
									cache: "no-cache",
									headers: {
										"Content-Type": "application/json",
									},
									referrerPolicy: "no-referrer",
									body: JSON.stringify(data),
								});
								setRefresh((val) => val + 1);
								setloading(false);
							} catch (err) {
								setloading(false);
							}
						}}
					>
						<MyButton
							title="Confirmez"
							Icon={() => LoadingIcon(loading)}
							style="bg-red-500 p-[20px] font-bold text-xl !p-[1px]"
						/>
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default EditeActivity;
