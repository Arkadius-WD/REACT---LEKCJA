import { Outlet, useNavigation } from "react-router-dom";
import { FoldersList } from "./components/folders-list/FoldersList";
import { Layout } from "./components/layout/Layout";
import { Loader } from "./components/loader/Loader";

export function App() {
	const { state, formMethod } = useNavigation();

	return (
		<Layout>
			{(state === "loading" || state === "submiting") && <Loader />}
			{(state === "loading" || state === "submiting") &&
				formMethod !== "patch" && <Loader />}

			<FoldersList />
			<Outlet />
		</Layout>
	);
}
