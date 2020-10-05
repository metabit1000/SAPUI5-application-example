sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Fragment"
], function (Controller, Filter, FilterOperator, JSONModel, Fragment ) {
	"use strict";

	return Controller.extend("pruebas.pruebas.controller.View", {
		onInit: function () {
			
			// set data model on view 
        	var oData = {
            	recipient : {
            		name : "prueba"
            	}
        	};
        	
        	var oModel = new JSONModel(oData);
        	this.getView().setModel(oModel);
		},
		
		onFilterProducts: function(oEvent) {
			var prodFilter = [];
			var sQuery = oEvent.getParameter("query"); //cuando el usuario introduzca un valor a filtrar, genera una query
			
			if (sQuery) {
				prodFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}
			
			var oList = this.byId("productList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(prodFilter);
			//prueba
		}, 
		
		onShow : function() {
			var oView = this.getView();

			// create dialog lazily
			if (!this.byId("Dialog")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
					name: "pruebas.pruebas.view.Dialog",
					controller: this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("Dialog").open();
			}
		},
		
		onCloseDialog : function () {
			this.byId("Dialog").close();
		}
	});
});