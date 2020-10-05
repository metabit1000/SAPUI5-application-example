sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("pruebas.pruebas.controller.View", {
		onInit: function () {

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
		}
	});
});