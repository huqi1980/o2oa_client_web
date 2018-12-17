MWF.xAction.RestActions.Action["x_query_assemble_designer"] = new Class({
    Extends: MWF.xAction.RestActions.Action,
    getUUID: function(success){
        var id = "";
        this.action.invoke({"name": "getId","async": false, "parameter": {"count": "1"}, "success": function(ids){
            id = ids.data[0].id;
            if (success) success(id);
        },	"failure": null});
        return id;
    },
    listApplicationSummary: function(categoryName, success, failure, async){
        if (categoryName){
            this.action.invoke({"name": "listApplicationByCategorySummary","async": async, "parameter": {"queryCategory": categoryName}, "success": success,	"failure": failure});
        }else{
            this.action.invoke({"name": "listApplicationSummary","async": async, "success": success,	"failure": failure});
        }
    },
    saveApplication: function(applicationData, success, failure){
        if (applicationData.id){
            this.updateApplication(applicationData.id, applicationData, success, failure);
        }else{
            this.addApplication(applicationData, success, failure);
        }
    },
    saveView: function(viewData, success, failure){
        if (!viewData.isNewView){
            this.updateView(viewData, success, failure);
        }else{
            this.addView(viewData, success, failure);
        }
    },
    updateView: function(viewData, success, failure){
        var data =viewData.data;
        viewData.data = JSON.encode(viewData.data);
        viewData.query = viewData.application;
        viewData.queryName = viewData.applicationName;
        this.action.invoke({"name": "updateView","data": viewData,"parameter": {"id": viewData.id},"success": success,"failure": failure});
        viewData.data = data;
    },
    addView: function(viewData, success, failure){
        var data =viewData.data;
        viewData.data = JSON.encode(viewData.data);
        viewData.query = viewData.application;
        viewData.queryName = viewData.applicationName;
        if (!data.id){
            this.getUUID(function(id){
                viewData.id = id;
                this.action.invoke({"name": "addView","data": viewData, "success": function(json){
                    viewData.isNewView = false;
                    if (success) success(json);
                },"failure": failure});
                viewData.data = data;
            }.bind(this));
        }else{
            this.action.invoke({"name": "addView","data": viewData, "success": function(json){
                viewData.isNewView = false;
                if (success) success(json);
            },"failure": failure});
            viewData.data = data;
        }
    },
    saveStat: function(data, success, failure){
        if (!data.isNewView){
            this.updateStat(data, success, failure);
        }else{
            this.addStat(data, success, failure);
        }
    },
    updateStat: function(statData, success, failure){
        var data =statData.data;
        statData.data = JSON.encode(statData.data);
        statData.query = statData.application;
        statData.queryName = statData.applicationName;
        this.action.invoke({"name": "updateStat","data": statData,"parameter": {"id": statData.id},"success": success,"failure": failure});
        statData.data = data;
    },
    addStat: function(statData, success, failure){
        var data =statData.data;
        statData.data = JSON.encode(statData.data);
        statData.query = statData.application;
        statData.queryName = statData.applicationName;
        if (!data.id){
            this.getUUID(function(id){
                statData.id = id;
                this.action.invoke({"name": "addStat","data": statData, "success": function(json){
                    statData.isNewView = false;
                    if (success) success(json);
                },"failure": failure});
                statData.data = data;
            }.bind(this));
        }else{
            this.action.invoke({"name": "addView","data": statData, "success": function(json){
                statData.isNewView = false;
                if (success) success(json);
            },"failure": failure});
            statData.data = data;
        }
    },
    deleteView: function(id, success, failure, async){
        this.action.invoke({"name": "removeView", "async": async, "parameter": {"id": id}, "success": success, "failure": failure});
    },
    deleteStat: function(id, success, failure, async){
        this.action.invoke({"name": "removeStat", "async": async, "parameter": {"id": id}, "success": success, "failure": failure});
    }
});