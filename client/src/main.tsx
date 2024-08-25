import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import Index from "./Pages/Index.tsx";
import { PrimeReactProvider } from "primereact/api";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PrimeReactProvider>
			<BrowserRouter>
				<Index />
			</BrowserRouter>
		</PrimeReactProvider>
	</StrictMode>
);
