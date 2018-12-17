MWF.widget = MWF.widget || {};
MWF.require("MWF.widget.Calendar", null, false);
MWF.widget.CalendarPage = MWF.CalendarPage = new Class({
	Extends: MWF.widget.Calendar,
	Implements: [Options, Events],

	initialize: function(node, options){

		Locale.use("zh-CHS");
		this.setOptions(options);

		this.path = MWF.defaultPath+"/widget/$Calendar/";
		this.cssPath = MWF.defaultPath+"/widget/$Calendar/"+this.options.style+"/css.wcss";
		
		this._loadCss();
	//	this.options.containerPath = this.path+this.style+"/container.html";
	//	this.options.dayPath = this.path+this.style+"/day.html";
	//	this.options.monthPath = this.path+this.style+"/month.html";
	//	this.options.yearPath = this.path+this.style+"/year.html";
	//	this.options.timePath = this.path+this.style+"/time.html";

		if (this.options.isTime){
			//this.options.format = Locale.get("Date").shortDate + " " + Locale.get("Date").shortTime;
			this.options.format = Locale.get("Date").shortDate + " " + "%H:%M";
		}else{
			this.options.format = Locale.get("Date").shortDate;
		}
		
		this.options.containerPath = this.options.path+this.options.style+"/container.html";
		this.options.dayPath = this.options.path+this.options.style+"/day.html";
		this.options.monthPath = this.options.path+this.options.style+"/month.html";
		this.options.yearPath = this.options.path+this.options.style+"/year.html";
		this.options.timePath = this.options.path+this.options.style+"/time.html";
	
		this.today = new Date();
		
		this.currentView = this.options.defaultView;
		
		this.node = $(node);

		this.visible = false;
		
		this.container = this.createContainer();
		this.container.inject(this.node);
		this.contentTable = this.createContentTable();
		this.contentTable.inject(this.contentDateNode);

		this.addEvents();

		this.fireEvent("init");
	},
	addEvents: function(){
		this.prevNode.addEvent("click", function(){
			this.getPrev();
		}.bind(this));

		this.nextNode.addEvent("click", function(){
			this.getNext();
		}.bind(this));

		this.currentTextNode.addEvent("click", function(){
			this.changeView();
		}.bind(this));
	},
	show: function(){
		if (!this.visible){
			var dStr = this.node.get("value");
			if (dStr){
				this.options.baseDate = Date.parse(dStr.substr(0,10));
			}
			this.currentView = this.options.defaultView;

			switch (this.currentView) {
				case "day" :
					this.changeViewToDay();
					break;
				case "month" :
					this.showMonth();
					break;
				case "year" :
					this.showYear();
					break;
				case "time" :
					this.showTime(this.options.baseDate);
					break;
				default :
					this.showDay();
			}

//			if (!this.morph){
//				this.morph = new Fx.Morph(this.container, {"duration": 200});
//			}
			this.container.setStyle("display", "block");
			this.visible = true;

			this.fireEvent("show");
		}
	},
	_selectDate: function(dateStr, el){
		var date = new Date(dateStr);
		var dv = date.format(this.options.format);
		if (this.options.isTime){
			this.changeViewToTime(date);
		}else{
			if (this.fireEvent("queryComplate", dateStr)){
				
				var thisYaer = this.currentTextNode.retrieve("year");
				var thisMonth = this.currentTextNode.retrieve("month");
				
				baseDate = new Date();
				baseDate.setFullYear(thisYaer);
				baseDate.setMonth(thisMonth-1);
				
				var selectDate =new Date(dateStr);
				
				//var baseDate = this.options.baseDate;
//				var firstDate = baseDate.clone();
//				firstDate.setDate(1);
//				var day = firstDate.getDay();
//
//				firstDate.getMonth();
//				var tmpDate = firstDate.clone();


				var tbody = el.getParent("tbody");
				var tds = tbody.getElements("td");

				for (var i=0; i<tds.length; i++){
					var thisDate = new Date(tds[i].retrieve("dateValue"));
					thisDate.clearTime();
					if (thisDate.clearTime().toString() == this.today.clearTime().toString()){
						tds[i].setStyles(this.css["today_"+this.options.style]);
						tds[i].setStyle("border", "0px solid #AAA");
					}else if (thisDate.toString() == selectDate.toString()){
						tds[i].addClass("current_"+this.options.style);
						tds[i].setStyles(this.css["current_"+this.options.style]);
						tds[i].removeClass("gray_"+this.options.style);
						tds[i].setStyle("border", "1px solid #FFF");
					}else if(baseDate.getMonth()!=thisDate.getMonth()){
						tds[i].addClass("gray_"+this.options.style);
						tds[i].setStyles(this.css["gray_"+this.options.style]);
						tds[i].removeClass("current_"+this.options.style);
						tds[i].setStyle("border", "1px solid #FFF");
					}else{
						tds[i].setStyles(this.css["normal_"+this.options.style]);
						tds[i].removeClass("current_"+this.options.style);
						tds[i].removeClass("gray_"+this.options.style);
						tds[i].setStyle("border", "1px solid #FFF");
					}
					
					

				//	tds[i].set("text", firstDate.getDate());
//					if (firstDate.toString() == this.options.baseDate.toString()){
//						tds[i].addClass("current_"+this.options.style);
//						tds[i].setStyles(this.css["current_"+this.options.style]);
//						tds[i].removeClass("gray_"+this.options.style);
//						tds[i].setStyle("border", "1px solid #FFF");
//					}else if (firstDate.getMonth()!=baseDate.getMonth()){
//						tds[i].addClass("gray_"+this.options.style);
//						tds[i].setStyles(this.css["gray_"+this.options.style]);
//						tds[i].removeClass("current_"+this.options.style);
//						tds[i].setStyle("border", "1px solid #FFF");
//					}else{
//						tds[i].setStyles(this.css["normal_"+this.options.style]);
//						tds[i].removeClass("current_"+this.options.style);
//						tds[i].removeClass("gray_"+this.options.style);
//						tds[i].setStyle("border", "1px solid #FFF");
//					}
//					var tmp = firstDate.clone();
//					if (tmp.clearTime().toString() == this.today.clearTime().toString()){
//						//tds[i].addClass("today_"+this.options.style);
//						tds[i].setStyles(this.css["today_"+this.options.style]);
//						tds[i].setStyle("border", "0px solid #AAA");
//					}
//					//tds[i].retrieve("dateValue")
//					tds[i].store("dateValue", firstDate.toString());
//					firstDate.increment("day", 1);
				}


				el.setStyles(this.css["current_"+this.options.style]);
			//	this.node.set("value", dv);
			//	this.hide();
				this.fireEvent("complate");
			}
		}
	}
	
});