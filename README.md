# MMM-Button
This an extension for the [MagicMirror](https://github.com/MichMich/MagicMirror). This Module based on the [MMM-Button Repository](https://github.com/PtrBld/MMM-Button) by [PtrBld](https://github.com/PtrBld). Because of some truigger problems with the [MMM-Buttons](https://github.com/Jopyth/MMM-Buttons) by [Jopyth](https://github.com/Jopyth), I extend the basic idea of the MMM-Button to handle multiple buttons.
## Installation
1. Navigate into your MagicMirror's `modules` folder and execute `git clone https://github.com/freequenzart/MMM-SimpleButtons.git`. A new folder will appear navigate into it.
2. Execute `npm install` to install the node dependencies.

## Using the module
First of all connect a button to your Raspberry PI: [How to connect a button.](http://razzpisampler.oreilly.com/ch07.html)

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: 'MMM-SimpleButtons',
		config: {
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:


<table width="100%">
	<thead>
		<tr>
			<th>Option</th>
			<th width="100%">Description</th>
		</tr>
	<thead>
	<tbody>
		<tr>
			<td><code>buttons</code></td>
			<td>an Object which contains the button configuration.<br>
				<b>object key<b> is the inputPin <br>
				<b>value<b> is the notification which send on trigger<br>
				<br>
				<pre>
					<code>
						buttons: {
							17: "BUTTON_17_CLICKED",
							27: "BUTTON_27_CLICKED"
						}
					</code>
				</pre>
			</td>
		</tr>
		<tr>
			<td><code>clickDelay</code></td>
			<td>The time in miliseconds before another button click is recognized<br>
				<br><b>Possible values:</b> <code>int</code>
				<br><b>Default value:</b> <code>2000</code>
			</td>
		</tr>
	</tbody>
</table>

## Developer Notes
Thank you [PtrBld](https://github.com/PtrBld) for the basic idea and code of [MMM-Button Repository](https://github.com/PtrBld/MMM-Button)!

## Dependencies
- [onoff](https://www.npmjs.com/package/onoff) (installed via `npm install`)

The MIT License (MIT)
=====================

Copyright © 2018 freequenzart

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

**The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.**
