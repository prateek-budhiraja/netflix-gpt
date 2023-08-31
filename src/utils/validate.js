export const checkValidFormData = (name, email, password) => {
	const errorMessage = {
		name: null,
		email: null,
		password: null,
	};

	const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);
	const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
	const isPasswordValid =
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

	if (!isEmailValid) errorMessage.email = "Email id is not valid!";
	if (!isPasswordValid) errorMessage.password = "Password is not valid!";
	if (!isNameValid) errorMessage.name = "Name is not valid!";

	if (name.length === 0) errorMessage.name = "Name is required!";
	if (email.length === 0) errorMessage.email = "Email id is required!";
	if (password.length === 0) errorMessage.password = "Password is required!";

	return errorMessage;
};
