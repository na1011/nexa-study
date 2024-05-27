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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ICON\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ENABLE\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_KEY\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">Application</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">Environment</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">EnvApp::EnvApp_Base.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">1020</Col><Col id=\"MENU_NAME\">App</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_KEY\"/><Col id=\"MENU_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">1030</Col><Col id=\"MENU_NAME\">System</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">Form</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">Hello</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::Hello.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NAME\">Employees</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"FORM_URL\">Form::Form_Emp.xfdl</Col><Col id=\"MENU_KEY\">Ctrl+E</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">Component</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_KEY\">Ctrl+B</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NAME\">List</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Comp::Comp_Base.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NAME\">Base</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020010</Col><Col id=\"MENU_NAME\">Button</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Button.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_button.png</Col><Col id=\"MENU_KEY\">Ctrl+C</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020020</Col><Col id=\"MENU_NAME\">Calendar</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Calendar.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_cal.png</Col><Col id=\"MENU_KEY\">Ctrl+B</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020030</Col><Col id=\"MENU_NAME\">CheckBox</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_CheckBox.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_check.png</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020040</Col><Col id=\"MENU_NAME\">Combo</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Combo.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_combo.png</Col><Col id=\"MENU_KEY\">Ctrl+G</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020050</Col><Col id=\"MENU_NAME\">Div</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_div.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_KEY\">Alt+E</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020060</Col><Col id=\"MENU_NAME\">Edit</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Edit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_edit.png</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020070</Col><Col id=\"MENU_NAME\">Grid</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Grid.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_grid.png</Col><Col id=\"MENU_KEY\">Alt+G</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020080</Col><Col id=\"MENU_NAME\">Grid Cell</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Grid_Cell.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020090</Col><Col id=\"MENU_NAME\">ImageViewer</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ImageViewer.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_image.png</Col><Col id=\"MENU_KEY\">Ctrl+Shift+G</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020100</Col><Col id=\"MENU_NAME\">ListBox</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ListBox.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_list.png</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020110</Col><Col id=\"MENU_NAME\">MaskEdit</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_MaskEdit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_mask.png</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020120</Col><Col id=\"MENU_NAME\">PopupDiv</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">0</Col><Col id=\"MENU_ICON\"/><Col id=\"MENU_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">3020130</Col><Col id=\"MENU_NAME\">ProgreeBar</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ProgressBar.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_progress.png</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020140</Col><Col id=\"MENU_NAME\">Radio</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Radio.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_radio.png</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020150</Col><Col id=\"MENU_NAME\">Spin</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Spin.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_spin.png</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020160</Col><Col id=\"MENU_NAME\">Static</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Static.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_static.png</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020170</Col><Col id=\"MENU_NAME\">Tab</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_tab.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020180</Col><Col id=\"MENU_NAME\">TexaArea</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_TextArea.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_ICON\">Images::img_comp_txt.png</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020190</Col><Col id=\"MENU_NAME\">Dataset</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_Dataset.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3020200</Col><Col id=\"MENU_NAME\">ListView</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">Comp::Comp_ListView.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3030</Col><Col id=\"MENU_NAME\">Extend</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\"/><Col id=\"MENU_ENABLE\">0</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3030010</Col><Col id=\"MENU_NAME\">File Up/Download</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_FileUpDown.xfdl</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3030020</Col><Col id=\"MENU_NAME\">Sketch</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompExt::CompExt_Sketch.xfdl</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3030030</Col><Col id=\"MENU_NAME\">WebBrowser</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_WebBrowser.xfdl</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3030040</Col><Col id=\"MENU_NAME\">GoogleMap</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_GoogleMap.xfdl</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3030050</Col><Col id=\"MENU_NAME\">Excel Object</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"MENU_ENABLE\">0</Col><Col id=\"FORM_URL\">CompExt::CompExt_Excel.xfdl</Col><Col id=\"MENU_FLAG\">0</Col></Row><Row><Col id=\"MENU_ID\">3040</Col><Col id=\"MENU_NAME\">Common</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3040010</Col><Col id=\"MENU_NAME\">Bind</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompCom::CompCom_Bind.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3040020</Col><Col id=\"MENU_NAME\">Event</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompCom::CompCom_Event.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">3040030</Col><Col id=\"MENU_NAME\">Position(Arrange)</Col><Col id=\"MENU_LEVEL\">2</Col><Col id=\"FORM_URL\">CompCom::CompCom_Arrange.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">Sample</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_NAME\">ArrangeFit</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::ArrangeFit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">4020</Col><Col id=\"MENU_NAME\">ArrangeSplit</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::ArrangeSplit.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">4030</Col><Col id=\"MENU_NAME\">Grid Sum</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::GridSum.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">4040</Col><Col id=\"MENU_NAME\">Grid Tree</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Smpl::GridTree.xfdl</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">1</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">Template</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"MENU_ENABLE\">1</Col><Col id=\"MENU_FLAG\">0</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_openForm", this);
            obj._setContents("<ColumnInfo><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("App_Dataset", this);
            obj._setContents("<ColumnInfo><Column id=\"FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SALARY\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FULL_NAME\">Olivia</Col><Col id=\"DEPT_CD\">01</Col><Col id=\"SALARY\">83000</Col></Row><Row><Col id=\"FULL_NAME\">John</Col><Col id=\"DEPT_CD\">02</Col><Col id=\"SALARY\">76000</Col></Row><Row><Col id=\"FULL_NAME\">Jackson</Col><Col id=\"DEPT_CD\">03</Col><Col id=\"SALARY\">95000</Col></Row><Row><Col id=\"FULL_NAME\">Maia</Col><Col id=\"DEPT_CD\">04</Col><Col id=\"SALARY\">60000</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gv_variable","nexacro patform");
            this._addVariable("App_Var1","App Variable Value1");
            this._addVariable("App_Var2","App Variable Value2");
            
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
            var mainframe = this.createMainFrame("mainframe","0","0","1024","768",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("넥사 연습");
            mainframe.set_statusbarheight("25");
            mainframe.set_titlebarbuttongap("4");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;        
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("50,*");
            frame0.set_showtitlebar("false");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"",frame0);
            frame1.set_showtitlebar("false");
            frame0.addChild(frame1.name, frame1);

            var frame2 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("200, *");
            frame2.set_showtitlebar("false");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame00",null,null,null,null,null,null,"",frame2);
            frame3.set_showtitlebar("false");
            frame2.addChild(frame3.name, frame3);

            var frame4 = new VFrameSet("VFrameSet01",null,null,null,null,null,null,frame2);
            frame4.set_separatesize("30,*");
            frame4.set_showtitlebar("false");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("MDIFrameSet",null,null,null,null,null,null,"",frame4);
            frame5.set_showtitlebar("false");
            frame4.addChild(frame5.name, frame5);

            var frame6 = new FrameSet("MainFrame",null,null,null,null,null,null,frame4);
            frame6.set_showtitlebar("false");
            frame4.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("MainForm",null,null,null,null,null,null,"",frame6);
            frame7.set_showtitlebar("false");
            frame7.set_openstatus("maximize");
            frame6.addChild(frame7.name, frame7);
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler

        this.checkLicense("");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::nexa_study.xcss");
        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
