import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import Index from "./Pages/Index.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Index />
		</BrowserRouter>
	</StrictMode>
);
