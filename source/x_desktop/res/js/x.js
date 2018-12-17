/**
 * Created by TOMMY on 2015/11/14.
 */

layout = (window["layout"]) ? window["layout"] : {};
var locate = window.location;
layout.protocol = locate.protocol;
layout.session = layout.session || {};
var href = locate.href;
if (href.indexOf("debugger")!=-1) layout["debugger"] = true;

o2.addReady(function(){
    var loadingNode = $("browser_loadding");
    var errorNode = $("browser_error");

    if (Browser.name=="ie" && Browser.version<9){
        if (loadingNode) loadingNode.setStyle("display", "none");
        if (errorNode) errorNode.setStyle("display", "block");
        return false;
    }else{
        if (Browser.name=="ie" && Browser.version<10){
            layout["debugger"] = true;
        }
    }
    if (errorNode) errorNode.destroy();

    COMMON.setContentPath("/x_desktop");
    //COMMON.AjaxModule.load("ie_adapter", function(){
        o2.load("res/framework/mootools/plugin/mBox.Notice.js", function(){
            o2.load("res/framework/mootools/plugin/mBox.Tooltip.js", function(){

                o2.load("mwf", function(){
                    MWF.getJSON("res/config/config.json", function(config){
                        layout.config = config;

                        if (layout.config.app_protocol=="auto"){
                            layout.config.app_protocol = window.location.protocol;
                        }
                        layout.config.systemName = layout.config.systemName || layout.config.footer;
                        layout.config.systemTitle = layout.config.systemTitle || layout.config.title;

                        document.title = layout.config.title || layout.config.systemTitle || layout.config.footer || layout.config.systemName;

                        MWF.defaultPath = "/x_desktop"+MWF.defaultPath;
                        MWF.loadLP(MWF.language);
                        //MWF.loadLP("en");
                        MWF.require("MWF.xDesktop.Layout", function(){
                            layout.desktop = new MWF.xDesktop.Layout("layout", {
                                "style": "default",
                                "onLoad": function(){
                                    if (loadingNode){
                                        new Fx.Tween(loadingNode).start("opacity", 0).chain(function(){
                                            loadingNode.destroy();
                                        });
                                    }
                                },
                                "onLogin": function(){
                                    if (loadingNode){
                                        new Fx.Tween(loadingNode).start("opacity", 0).chain(function(){
                                            loadingNode.destroy();
                                        });
                                    }
                                }
                            });
                        });
                    }, false);
                });
            });
        });
    //});
});


