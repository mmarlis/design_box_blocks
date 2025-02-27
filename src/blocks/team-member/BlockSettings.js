import React from "react";
import {InspectorControls} from "@wordpress/block-editor";
import {PanelBody, PanelRow} from "@wordpress/components";

export default function BlockSettings() {

		const colors = [
			{name: 'grey', color: '#EDEDED'},
			{name: 'yellow', color: '#CBA454'},
			{name: 'blue', color: '#313C4C'},
		];


		return (
			<InspectorControls>
				<PanelBody title="Basic" initialOpen={true}>
					<PanelRow>
						Starter Demo!
					</PanelRow>
				</PanelBody>
			</InspectorControls>
		)
	}
}
