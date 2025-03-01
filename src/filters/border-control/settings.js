import { addFilter } from "@wordpress/hooks";

function addBorderAttributes(settings, name) {
  // settings is the object used to declare the block
  // name is the name of the block (if you wanted to apply this only certain blocks)

  // append the settings
  settings.attributes.bcBorderStyle = {
    type: "string",
    default: "",
  };

  // for padding
	settings.attributes.bcBorderPadding = {
		type: "number",
		default: 10,
	}

	//for margin
	settings.attributes.bcBorderMargin = {
		type: "number",
		default: 10,
	}

	//for border radius
	settings.attributes.bcBorderRadius = {
		type: "number",
		default: 0,
	}

	//for color
	settings.attributes.bcBorderColor = {
		type: "string",
		default: "#000000",
	}

	//for width
	settings.attributes.bcBorderWidth = {
		type: "number",
		default: 1,
	}

  // (modify any additional settings)

  return settings;
}

addFilter(
  "blocks.registerBlockType",
  "mm/border-control/add-border-attributes",
  addBorderAttributes,
);
