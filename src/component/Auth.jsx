import React from "react";

const Input = ({ OnChange, value, hint, title }) => {
	return (
		<>
			<div className='flex flex-col justify-start items-center'>
				<h1>{title}</h1>
				<input placeholder={hint} onChange={onchange()} value={value} />
			</div>
		</>
	);
};
const AuthForm = () => {
	return (
		<>
			<form>
				<div className='w-full h-full w-black flex justify-center items-center'>
					<h1>Reduc</h1>
					<p>Merci d'entrer vos informations de connexion</p>
					<Input title='Email' hint={"Example@email.com"} />
					<Input title='mode de pass' hint={"********"} />
				</div>
			</form>
		</>
	);
};

function Auth() {
	return (
		<div className='w-full h-[100vh] bg-red-500'>
			<AuthForm />
		</div>
	);
}

export default Auth;
