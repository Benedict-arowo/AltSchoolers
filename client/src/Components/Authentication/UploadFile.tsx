import { SyntheticEvent, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import {
	FileUpload,
	FileUploadHeaderTemplateOptions,
	FileUploadSelectEvent,
	FileUploadUploadEvent,
	ItemTemplateOptions,
} from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";
import upload_icon from "../../assets/icons/upload.svg";

const UploadFile = () => {
	const toast = useRef<Toast>(null);
	const [totalSize, setTotalSize] = useState(0);
	const fileUploadRef = useRef<FileUpload>(null);

	const onTemplateSelect = (e: FileUploadSelectEvent) => {
		let _totalSize = totalSize;
		const files = e.files;

		for (let i = 0; i < files.length; i++) {
			_totalSize += files[i].size || 0;
		}

		setTotalSize(_totalSize);
	};

	const onTemplateUpload = (e: FileUploadUploadEvent) => {
		let _totalSize = 0;

		e.files.forEach((file) => {
			_totalSize += file.size || 0;
		});

		setTotalSize(_totalSize);
		toast.current?.show({
			severity: "info",
			summary: "Success",
			detail: "File Uploaded",
		});
	};

	const onTemplateRemove = (
		file: File,
		callback: (event?: SyntheticEvent) => void
	) => {
		setTotalSize(totalSize - file.size);
		callback();
	};

	const onTemplateClear = () => {
		setTotalSize(0);
	};

	const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
		const { className, chooseButton, uploadButton, cancelButton } = options;
		const value = totalSize / 10000;
		const formatedValue =
			fileUploadRef && fileUploadRef.current
				? fileUploadRef.current.formatSize(totalSize)
				: "0 B";

		return (
			<div
				className={className}
				style={{
					backgroundColor: "transparent",
					display: "flex",
					alignItems: "center",
				}}>
				{chooseButton}
				{uploadButton}
				{cancelButton}
				<div className="flex align-items-center gap-3 ml-auto">
					<span>{formatedValue} / 10 MB</span>
					<ProgressBar
						value={value}
						showValue={false}
						style={{
							width: "10rem",
							height: "12px",
						}}></ProgressBar>
				</div>
			</div>
		);
	};

	const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
		const file = inFile as File;
		return (
			<section className="w-full">
				<label htmlFor="identification_type">
					Picture or a scanned copy of identification document
				</label>
				<div className="w-full h-fit border border-accent rounded-md px-6 py-14 mt-2 flex flex-row items-center justify-between">
					<div className="flex flex-row gap-2 items-center">
						<img
							alt={file.name}
							role="presentation"
							src={
								(file as unknown as { objectURL: string })
									.objectURL
							}
							width={100}
						/>
						<span className="flex flex-column text-left ml-3">
							{file.name}
						</span>
					</div>

					<div className="flex flex-row gap-3 items-center">
						<Tag
							value={props.formatSize}
							severity="warning"
							className="px-3 py-2 h-fit w-fit"
						/>
						<Button
							type="button"
							icon="pi pi-trash"
							className="p-button-outlined p-button-rounded p-button-danger ml-auto h-fit w-fit"
							onClick={() =>
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								onTemplateRemove(file, (props as any).onRemove)
							}
						/>
					</div>
				</div>
			</section>
		);
	};

	const emptyTemplate = () => {
		return (
			<section>
				<label htmlFor="identification_type">
					Picture or a scanned copy of identification document
				</label>
				<div className="w-full h-[160px] border border-accent rounded-md flex flex-col gap-1.5 items-center justify-center mt-2">
					<img
						className="mx-auto"
						src={upload_icon}
						alt="Upload Identification document icon"
					/>
					<p className="font-normal text-accent">Drag and drop</p>
					<span className="text-gray-400 text-sm font-light w-full text-center">
						SVG, PNG, JPG or GIF (max. 10MB)
					</span>
				</div>
			</section>
		);
	};

	const chooseOptions = {
		icon: "pi pi-fw pi-images",
		iconOnly: true,
		className: "custom-choose-btn p-button-rounded p-button-outlined",
	};
	const uploadOptions = {
		icon: "pi pi-fw pi-cloud-upload",
		iconOnly: true,
		className:
			"custom-upload-btn p-button-success p-button-rounded p-button-outlined",
	};
	const cancelOptions = {
		icon: "pi pi-fw pi-times",
		iconOnly: true,
		className:
			"custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
	};

	return (
		<div>
			<Toast ref={toast}></Toast>

			<Tooltip
				target=".custom-choose-btn"
				content="Choose"
				position="bottom"
			/>
			<Tooltip
				target=".custom-upload-btn"
				content="Upload"
				position="bottom"
			/>
			<Tooltip
				target=".custom-cancel-btn"
				content="Clear"
				position="bottom"
			/>

			<FileUpload
				ref={fileUploadRef}
				name="Identification"
				url="/api/upload"
				multiple
				accept="image/*"
				maxFileSize={1000000}
				onUpload={onTemplateUpload}
				onSelect={onTemplateSelect}
				onError={onTemplateClear}
				onClear={onTemplateClear}
				headerTemplate={headerTemplate}
				itemTemplate={itemTemplate}
				emptyTemplate={emptyTemplate}
				chooseOptions={chooseOptions}
				uploadOptions={uploadOptions}
				cancelOptions={cancelOptions}
			/>
		</div>
	);
};

export default UploadFile;
