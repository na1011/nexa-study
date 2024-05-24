(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("form");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"eno\" type=\"INT\" size=\"256\"/><Column id=\"ename\" type=\"STRING\" size=\"256\"/><Column id=\"job\" type=\"STRING\" size=\"256\"/><Column id=\"manager\" type=\"STRING\" size=\"256\"/><Column id=\"hiredate\" type=\"DATE\" size=\"256\"/><Column id=\"salary\" type=\"INT\" size=\"256\"/><Column id=\"commission\" type=\"INT\" size=\"256\"/><Column id=\"dno\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dno\" type=\"INT\" size=\"256\"/><Column id=\"dname\" type=\"STRING\" size=\"256\"/><Column id=\"loc\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"searchType\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Combo("Combo00","30","60","132","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">eno</Col><Col id=\"datacolumn\">사번</Col></Row><Row><Col id=\"codecolumn\">ename</Col><Col id=\"datacolumn\">이름</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_text("eno");
            obj.set_value("eno");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","172","60","246","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","454","55","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("검 색");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","30","104","554","313",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"사번\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"직급\"/><Cell col=\"3\" text=\"사수\"/><Cell col=\"4\" text=\"입사일\"/><Cell col=\"5\" text=\"급여\"/><Cell col=\"6\" text=\"보너스\"/><Cell col=\"7\" text=\"부서번호\"/></Band><Band id=\"body\"><Cell text=\"bind:eno\"/><Cell col=\"1\" text=\"bind:ename\"/><Cell col=\"2\" text=\"bind:job\"/><Cell col=\"3\" text=\"bind:manager\"/><Cell col=\"4\" text=\"bind:hiredate\"/><Cell col=\"5\" text=\"bind:salary\"/><Cell col=\"6\" text=\"bind:commission\"/><Cell col=\"7\" text=\"bind:dno\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {
        this.form_onload = function(obj,e)
        {
        	this.fnSearch();
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.fnSearch = function ()
        {
        	// 조회조건 세팅
        	this.ds_search.setColumn(0, "searchType", this.Combo00.value);
        	this.ds_search.setColumn(0, "keyword", this.Edit00.text);

        	var svcID = "search";
        	var svcURL = "Svc::employee";
        	var inData = "input=ds_search";
        	var outData = "ds_emp=output";
        	var arg = "";
        	var callBack = "fnCallback";
        	var isAsync = true;

        	this.transaction(
        		svcID,
        		svcURL,
        		inData,
        		outData,
        		arg,
        		callBack,
        		isAsync
        	);
        };

        this.fnCallback = function (svcID, errCode, errMsg)
        {
        	// 에러 시 회면처리
        	if (errCode != 0)
        	{
        		this.alert(errCode + " : " + errMsg);
        		return
        	}

        	switch(svcID) {
        		case "search":
        			if (this.ds_emp.rowcount < 1)
        			{
        				this.alert("조회된 결과가 없습니다.");
        			}
        			break;
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.Combo00.addEventHandler("onitemchanged",this.Combo00_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
