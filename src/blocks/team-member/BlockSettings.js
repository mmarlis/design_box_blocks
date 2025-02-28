import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {ColorPalette, PanelBody, PanelRow} from "@wordpress/components";
import colors from "../../common/colors";

export default function BlockSettings({attributes, setAttributes}) {


	return (
		<InspectorControls>
			<PanelBody title="Basic" initialOpen={true}>
				<PanelRow>
					<h4>Card Background Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.backgroundColor}
						onChange={backgroundColor => setAttributes({backgroundColor})}
					/>
				</PanelRow>
				<PanelRow>
					<h4>Text Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.textColor}
						onChange={textColor => setAttributes({textColor})}
					/>
				</PanelRow>

				<PanelRow>
					<h4>button Background Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.buttonBackgroundColor}
						onChange={buttonBackgroundColor => setAttributes({buttonBackgroundColor})}
					/>
				</PanelRow>
				<PanelRow>
					<h4>button Text Color</h4>
				</PanelRow>
				<PanelRow>
					<ColorPalette
						colors={colors}
						value={attributes.buttonTextColor}
						onChange={buttonTextColor => setAttributes({buttonTextColor})}
					/>
				</PanelRow>
			</PanelBody>
		</InspectorControls>
	)
}
