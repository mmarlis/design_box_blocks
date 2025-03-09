import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";

export default function BlockSettings({ attributes, setAttributes }) {
	return (
		<InspectorControls>
			<PanelBody title="Book List Settings">
				<RangeControl
					label="Number of Books per Page"
					value={attributes.numBooks}
					onChange={(value) => setAttributes({ numBooks: value })}
					min={1}
					max={20}
				/>
				<SelectControl
					label="Order"
					value={attributes.order}
					options={[
						{ label: "Ascending", value: "ASC" },
						{ label: "Descending", value: "DESC" }
					]}
					onChange={(value) => setAttributes({ order: value })}
				/>
			</PanelBody>

			<PanelColorSettings
				title="Colors"
				colorSettings={[
					{
						value: attributes.cardColor,
						onChange: (cardColor) => setAttributes({ cardColor }),
						label: "Card Color",
					},
					{
						value: attributes.headingColor,
						onChange: (headingColor) => setAttributes({ headingColor }),
						label: "Heading Color",
					},
					{
						value: attributes.textColor,
						onChange: (textColor) => setAttributes({ textColor }),
						label: "Text Color",
					},
				]}
			/>
		</InspectorControls>
	);
}
