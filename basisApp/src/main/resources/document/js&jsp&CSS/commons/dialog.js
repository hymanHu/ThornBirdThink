var msgDialog,loadDialog,confirmDialog;
$(function(){
	//init dialog
	msgDialog = new Dialog("dialog-message");
	msgDialog.init();
	loadDialog = new Dialog("dialog-load");
	loadDialog.initLoad();
	confirmDialog = new Dialog("dialog-confirm");
});
var Dialog = function(did) {
	this.dialogId = did;
	var self = this;
	
	//init normal dialog
	this.init = function() {
		$("#" + self.dialogId).dialog({
			autoOpen: false,
			modal: true,
			height: 100,
			width: 350,
			hide: "fade",
			closeOnEscape: true,
			resizable: false
		});
	};
	
	//init load dialog
	this.initLoad = function(){
		$("#" + self.dialogId).dialog({
			autoOpen: false,
			modal: true,
			height: 100,
			width: 380,
			hide: "fade",
			closeOnEscape: true,
			resizable: false
		});
		/*$(".ui-dialog-titlebar > a").hide();*/
	};
	
	/*
	 * init ok & cancel buttons dialog
	 * 调用回调函数，如果没有定义传入undefined
	 * confirmDialog.initConfirm(undefined, ajaxDelete);
	 */
	this.initConfirm = function(okClickCallBack, cancelCallBack) {
		$("#" + self.dialogId).dialog({
			autoOpen: false,
			modal: true,
			height: 200,
			width: 380,
			buttons: {
				"Ok": function() {
					$(this).dialog("close");
					if (okClickCallBack != undefined) {
						okClickCallBack();
					}
				},
				"Cancel": function() {
					$(this).dialog("close");
					if (cancelCallBack != undefined) {
						cancelCallBack();
					}
				}
			}
		});
	};
	
	//open dialog with msg & set length
	this.open = function(messageInfo, width, height){
		if(messageInfo != ""){
			$("#" + self.dialogId).html(messageInfo);
		}
		$("#" + self.dialogId).dialog("open");
		$("#" + self.dialogId).dialog({ position: "center" });
		$("#" + self.dialogId).dialog( "option", "width", width );
		$("#" + self.dialogId).dialog( "option", "height", height );
	};
	
	//open dialog with msg
	this.openMsg = function(messageInfo){
		if(messageInfo != ""){
			$("#" + self.dialogId).html(messageInfo);
		}
		$("#" + self.dialogId).dialog("open");
		$("#" + self.dialogId).dialog({ position: "center" });
		$("#" + self.dialogId).dialog( "option", "width", 350 );
		$("#" + self.dialogId).dialog( "option", "height", 100 );
	};
	
	//close dialog
	this.close = function() {
		$("#" + self.dialogId).dialog("close");
	};
	
	//set button
	this.setButton = function () {
		$("#" + self.dialogId).dialog( 
			"option", "buttons", { "Ok": function() { $(this).dialog("close"); } } 
		);
	};
};