(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ICON\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">사원관리(예제)</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">테스트1(실행가능)</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Form::Form_Work.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">1020</Col><Col id=\"MENU_NAME\">테스트2</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_KEY\"/><Col id=\"MENU_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">2</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">3</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_KEY\">Ctrl+B</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">4</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">5</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_openForm", this);
            obj._setContents("<ColumnInfo><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("App_Dataset", this);
            obj._setContents("<ColumnInfo><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"SALARY\">83000</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"SALARY\">76000</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"SALARY\">95000</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"SALARY\">60000</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("TopLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler

		this.checkLicense("");
        
        this.loadPreloadList();

    };
}
)();
