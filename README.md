# TiExplorer Module

The TiExplorer module enables you to read files from Internal/External storage and save in your application specific folder which you selected.

This project can be found on github at [https://github.com/wecobi/TiExplorer](here).

##Before you start

* This is an Android module designed to work with Titanium SDK 7.0.0 or greater.

##Accessing the TiExplorer Module

To access this module from JavaScript, you would do the following:
<pre><code>
var TiExplorer = require("ti.explorer");
</pre></code>

###Method

###selectFile

<pre><code>
TiExplorer.selectFile({
	mimeType: "application/vnd.ms-excel",
	location: TiExplorer.EXTERNAL_STORAGE,
	onSuccess: function(e) {
		if(e.status == TiExplorer.EXTERNAL_STORAGE) {
			// Success Received
			var fileObj = file || null;
			if(fileObj != null) {
				alert("File Created Successfully!");
			}
		}
	},
	onError: function(e) {
		Ti.API.info("onError>>>> " + JSON.stringify(e));
	}
});
</pre></code>

You can create an request for SelectFile using below properties

*<b>mimeType</b> (Optional) (String) MimeType of file you want to read. (Default, */*)
*<b>location</b> (Optional) (Constant) TiExplorer Defined Constant used to give location of file. (Default, <span>CACHE_DIRECTORY</span>)
*<b>onSuccess</b> (Required) (Function) Successful response, then you can get response in here.
*<b>onSuccess</b> (Required) (Function) An Error response you get here.

###Constant

###Result Response status
<pre><code>RESULT_OK</pre></code>
<pre><code>RESULT_CANCELED</pre></code>
<pre><code>RESULT_ERROR</pre></code>

###Storage location
<pre><code>EXTERNAL_STORAGE</pre></code>
<pre><code>CACHE_DIRECTORY</pre></code>
<pre><code>DATA_DIRECTORY</pre></code>
<pre><code>EXTERNAL_CACHE_DIRECTORY</pre></code>

##Author
*Abidhusain Chidi
*[mailto:abidhusain.wecobi@gmail.com](abidhusain.wecobi@gmail.com)

##Licensing & Support

This project is licensed under the MIT approved License. For details please see the license associated with each project.
