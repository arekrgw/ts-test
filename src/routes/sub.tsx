import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sub")({
	component: RouteComponent,
	loader: async () => {
		console.log("Loading /sub route");
		return {
			title: "Sub Route",
		};
	},
});

function RouteComponent() {
	return <div>Hello "/sub"!</div>;
}
