;
(function(method){
	method(window,jQuery,document)
})(function(win,$,doc){
	$.fn.superStar=function(options){
			var defaults={
				//默认星的个数
				size:5,
				//打完分的回调方法
				callback:null,
				//样式
				cssClass:"superStar"
			};
			//覆盖参数
			$.extend(defaults,options);
			//给容器添加css样式
			this.toggleClass(defaults.cssClass);
			for(var i=1;i<=defaults.size;i++)
			{
				var star=$("<a/>").addClass("starItem").addClass("empty").appendTo(this);
				
				star.mouseover(function(){
					var parent=star.closest("."+defaults.cssClass);
					parent.find(".starItem").removeClass("fill");
					var index=parent.find(".starItem").index($(this));
					parent.find(".starItem:lt("+(index+1)+")").addClass("fill");
				});
				
				star.mouseleave(function(){
					var parent=star.closest("."+defaults.cssClass);
					parent.find(".starItem").removeClass("fill");
				});
			}
			
			return this;
	};
});