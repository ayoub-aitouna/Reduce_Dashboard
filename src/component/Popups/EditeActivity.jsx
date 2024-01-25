
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Button as MyButton, LoadingIcon } from "../index";
import { BaseUrl } from "../../constants";
import { ImgInput } from "../../Utils/ImgInput";

import {
	Cities_table
} from "../index";

const RotatingLoadingIcon = () => {
	return ((
		<svg
			className="h-12 w-12 animate-spin text-blue-500"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle
				className="opacity-25"
				cx="12"
				cy="12"
				r="10"
				stroke="currentColor"
				strokeWidth="4"
			></circle>
			<path
				className="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			></path>
		</svg>
	));
}

const Fill_Form = ({ data, setdata }) => {
	return (
		<form className="w-full max-w-lg flex flex-col gap-2">
			<div className="w-full flex justify-center items-center">
				<Button variant="contained" component="label">
					Mettre à jour l'icône
					<ImgInput width={500} height={500} call={(file) => { setdata({ ...data, icon: file }) }} />
				</Button>
			</div>

			<div className="flex flex-wrap -mx-3 mb-6 mt-5">
				<div className="w-full px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 w-full"
						htmlFor="grid-name"
					>
						Nom de l'activité
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
		Activity: "",
		icon: ""
	});

	async function toggle_city(id) {
		const req_body = { cityId: id, activityId: data.value };
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
			console.error(err);
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
				setloading(false);
			}
		} catch (err) {
			alert("error loading data try again please");
		}
	}

	async function handle_edit() {
		try {
			setloading(true);
			const formData = new FormData();
			formData.append("images", data.icon);
			formData.append("data", JSON.stringify(data));
			await fetch(`${BaseUrl}/Activities/edit`, {
				method: "PUT",
				mode: "cors",
				cache: "no-cache",
				referrerPolicy: "no-referrer",
				body: formData,
			});
			setRefresh((val) => val + 1);
		} catch (err) {
			alert("error editing Activity")
		} finally {
			setloading(false);
			OnClick();
		}
	}

	useEffect(() => {
		if (open && activity != undefined) {
			get_Activity_villes();
			setloading(true);
			setdata(activity);
		}
		else
			setvilles([]);
	}, [open, activity]);

	return (
		<div>
			<Dialog
				open={open}
				keepMounted
				fullWidth={true}
				onClose={OnClick}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{"Modifier L'activité"}</DialogTitle>
				{loading ? <div className="w-full  h-[250px] flex justify-center items-center">
					<RotatingLoadingIcon />
				</div> : <>
					<DialogContent>
						<div className="w-full h-full overflow-hidden grid place-content-center">
							<Fill_Form data={data} setdata={setdata} />
							<div className="flex-1">
								<div className="flex flex-col items-start justify-start">
									<h6 className="text-[15px] font-bold text-gray-800">
										Villes d'activités
									</h6>
								</div>
								<Cities_table
									Data={villes}
									OnEdit={(item) => {
										toggle_city(item.value)
									}} />
							</div>
						</div>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={async (e) => {
								handle_edit();
							}}
						>
							<MyButton
								title="Confirmez"
								Icon={() => LoadingIcon(loading)}
								style="bg-red-500 p-[20px] font-bold text-xl !p-[1px]"
							/>
						</Button>
					</DialogActions>

				</>}

			</Dialog>
		</div >


	);
}

export default EditeActivity;
