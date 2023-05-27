
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormData from 'form-data';
import { ImgInput } from "../../Utils/ImgInput";
import { Button as MyButton, Filter_Selector, LoadingIcon } from "../index";
import { BaseUrl, Coockies_name } from "../../constants";
import { useCookies } from "react-cookie";

const Banner_Dialog = ({ open, OnClick, setRefresh, selected, update = false }) => {
	const [cookies, setCookie, removeCookie] = useCookies([Coockies_name]);
	const [loading, setloading] = useState(false);
	const [data, setdata] = useState({
		Baniere_ordre: 0,
		Logo: "",
		Couverture: "",
		Offer: "",
		Adresse: "",
		Tel: "",
		statut: "activer"
	});

	const hadlerClose = () => {
		OnClick();
	};

	useEffect(() => {
		if (!loading) hadlerClose();
	}, [loading]);

	useEffect(() => {
		if (selected != undefined)
			setdata(selected);
	}, [selected]);

	const handle_request = async () => {
		setloading(true);
		const formData = new FormData();
		formData.append("images", data.cover);
		formData.append("images", data.logo);
		formData.append("data", JSON.stringify(data));

		try {
			const req = await fetch(`${BaseUrl}/banners/${(update) ? selected.id : ''}`, {
				method: (update) ? "PUT" : "POST",
				mode: "cors",
				cache: "no-cache",
				headers: {
					Authorization: `Bearer ${cookies.accesToken}`
				},
				referrerPolicy: "no-referrer",
				body: formData,
			});
			setRefresh((val) => val + 1);
			setloading(false);
		} catch (err) {
			setloading(false);
		}
	}

	return (
		<div>
			<Dialog
				open={open}
				keepMounted
				fullWidth={true}
				onClose={hadlerClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{"Banner"}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						<p className="text-gray-600 text-xs ">Remplissez les champs vides</p>
					</DialogContentText>
				</DialogContent>
				<div className="w-full grid place-content-center">
					<Fill_Form data={data} setdata={setdata} />
				</div>
				<div className="h-[60px]"></div>
				<DialogActions>
					<div className="flex flex-col w-full">
						<Button onClick={() => handle_request()}>
							<MyButton
								orientation={1}
								title="Valide"
								Icon={() => LoadingIcon(loading)}
								style="bg-red-500 p-[20px] font-bold text-xl !p-[1px]"
							/>
						</Button>
					</div>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const Fill_Form = ({ data, setdata }) => {
	return (
		<form className="w-full max-w-lg ">
			<div className="w-full flex flex-row justify-around p-5">
				<Button variant="contained" component="label">
					Upload LOGO
					<ImgInput width={500} height={500} call={(file) => { setdata({ ...data, logo: file, logo_selected: true }) }} />
				</Button>
				<Button variant="contained" component="label">
					Upload COVER
					<ImgInput width={500} height={500} call={(file) => { setdata({ ...data, cover: file, cover_selected: true }) }} />
				</Button>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">

				{Object.keys(data).map((key) => (
					(key == "Baniere_ordre" || key == "Offer" || key == "Adresse" || key == "Tel") && (
						<div className="w-full px-3">
							<label
								className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
								htmlFor="grid-name"
							>
								{key}
							</label>
							<input
								key={key}
								className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
								id={`grid-${key}`}
								value={data[key]}
								onChange={(e) => {
									setdata({ ...data, [key]: e.target.value });
								}}
								type="text"
							/>
						</div>
					)
				))}
				<div className="flex flex-wrap  flex- -mx-3 mb-2">
					<div className="w-full px-3 mb-6 md:mb-0">
						<Filter_Selector
							title={"statut"}
							Filter={data.statut}
							setFilter={(value) => setdata({ ...data, statut: value === '' || value === undefined ? 'activer' : value })}
							options={[{ value: "activer", name: "activer" }, { value: "Desactiver", name: "Desactiver" }]}
							styles={"!max-w-full"}
						/>
					</div>
				</div>
			</div>
		</form>
	);
};
export default Banner_Dialog;
