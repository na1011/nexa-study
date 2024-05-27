(function()
{
	return function()
	{
		nexacro._setCSSMaps(
		{
            "Form" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"contents" :
            					{
            					}
            				}
            			},
            			"ChildFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"FrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"HFrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"TileFrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"VFrameSet" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"MainFrame" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #1c2124")
            					},
            					"deactivate" :
            					{
            						"border" : nexacro.BorderObject("1px solid #5A677F")
            					}
            				}
            			},
            			"TitleBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#ffffff"),
            						"font" : nexacro.FontObject("bold 12px \"Verdana\""),
            						"padding" : nexacro.PaddingObject("0px 4px 0px 10px")
            					}
            				}
            			},
            			"minbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_min_N.png\")"),
            								"padding" : nexacro.PaddingObject("0px 0px 3px 0px")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_min_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_min_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"maxbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_max_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_max_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_max_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"normalbutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_normal_N.png\")")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_normal_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_normal_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"closebutton" :
            			{
            				"parent" :
            				{
            					"TitleBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_close_N.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_close_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_close_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Titlebar_btn_close_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"StatusBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none, 0px none"),
            						"padding" : nexacro.PaddingObject("3px 3px 3px 10px"),
            						"color" : nexacro.ColorObject("#30373b"),
            						"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            					}
            				}
            			},
            			"progressbar" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("2px")
            							}
            						}
            					}
            				}
            			},
            			"resizegrip" :
            			{
            				"parent" :
            				{
            					"StatusBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/Statusbar_img_grip.png\")")
            							}
            						}
            					}
            				}
            			},
            			"VScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"incbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/vscroll_incbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/vscroll_incbtn_M.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/vscroll_incbtn_P.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/hscroll_incbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/hscroll_incbtn_M.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/hscroll_incbtn_P.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"decbutton" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/vscroll_decbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/vscroll_decbtn_M.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/vscroll_decbtn_P.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/hscroll_decbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/hscroll_decbtn_M.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/hscroll_decbtn_P.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"trackbar" :
            			{
            				"parent" :
            				{
            					"VScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"HScrollBarControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"mouseover" :
            							{
            							},
            							"pushed" :
            							{
            							},
            							"disabled" :
            							{
            							}
            						}
            					},
            					"vscrollbar" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"HScrollBarControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none"),
            						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
            					},
            					"disabled" :
            					{
            					}
            				}
            			},
            			"Static" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\""),
            						"wordWrap" : "english"
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\""),
            						"wordWrap" : "english"
            					},
            					"disabled" :
            					{
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				},
            				"class" :
            				[
            					{
            						"sta_GA_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b8bbc3"),
            									"color" : nexacro.ColorObject("#30373b"),
            									"font" : nexacro.FontObject("bold 12px \"verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b8bbc3"),
            									"color" : nexacro.ColorObject("#30373b"),
            									"font" : nexacro.FontObject("bold 12px \"verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_GA_label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ccd0d9"),
            									"color" : nexacro.ColorObject("#30373b"),
            									"font" : nexacro.FontObject("12px \"verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ccd0d9"),
            									"color" : nexacro.ColorObject("#30373b"),
            									"font" : nexacro.FontObject("12px \"verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_GA_area" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ccd0d9")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #ccd0d9")
            								}
            							}
            						}
            					},
            					{
            						"sta_GA_selector" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"color" : nexacro.ColorObject("#746f6f"),
            									"font" : nexacro.FontObject("11px \"verdana\"")
            								},
            								"mouseover" :
            								{
            									"color" : nexacro.ColorObject("#746f6f"),
            									"font" : nexacro.FontObject("11px \"verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_MF_bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b4b4b4,0px none,1px solid #b4b4b4, 0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b4b4b4,0px none,1px solid #b4b4b4, 0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_emptitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("bold 16px \"Tahoma\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("bold 16px \"Tahoma\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_tablelabel" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_tablebg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
            									"padding" : nexacro.PaddingObject("5px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
            									"padding" : nexacro.PaddingObject("5px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_label" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal bold 12px/20px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("normal bold 12px/20px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_subtitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 15px")
            								}
            							}
            						}
            					},
            					{
            						"sta_TF_bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_CS_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#f44528"),
            									"font" : nexacro.FontObject("bold 13px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#f44528"),
            									"font" : nexacro.FontObject("bold 13px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_CS_detail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("bold 18px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("bold 18px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_CS_subdetail" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px dotted #c6cbce"),
            									"color" : nexacro.ColorObject("#f16e59"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px dotted #c6cbce"),
            									"color" : nexacro.ColorObject("#f16e59"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_CS_line_solid" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #30373b"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #30373b"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								}
            							}
            						}
            					},
            					{
            						"sta_CS_line_dot" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px dotted #30373b"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px dotted #30373b"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								}
            							}
            						}
            					},
            					{
            						"sta_CS_line_dashed" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #30373b"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px dashed #30373b"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								}
            							}
            						}
            					},
            					{
            						"sta_CS_line_none" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\""),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 8px")
            								}
            							}
            						}
            					},
            					{
            						"sta_WF_table_required" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #bdc2c9"),
            									"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
            									"color" : nexacro.ColorObject("#222222"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_Main_title" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#85919e"),
            									"font" : nexacro.FontObject("bold 36px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#85919e"),
            									"font" : nexacro.FontObject("bold 36px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_Main_text" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#323232"),
            									"font" : nexacro.FontObject("12px/22px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#323232"),
            									"font" : nexacro.FontObject("12px/22px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"sta_Main_img" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_Main_subtitle" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"sta_Main_bottomlogo" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Edit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				}
            			},
            			"MaskEdit" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\"")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				}
            			},
            			"TextArea" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("3px 3px 3px 3px"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px/18px \"Verdana\""),
            						"wordWrap" : "char"
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"nulltext" :
            					{
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				}
            			},
            			"Button" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\""),
            						"padding" : nexacro.PaddingObject("0px 5px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"selected" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528"),
            						"color" : nexacro.ColorObject("#ffffff")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				},
            				"class" :
            				[
            					{
            						"btn_MF_home" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b4b4b4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_home.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b4b4b4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_home.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b4b4b4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_home.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #b4b4b4"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_home.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_max" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_max.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_max.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_max.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_min" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_min.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_min.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_min.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_V" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_V.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_V.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_V.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_H" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_H.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_H.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_H.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_MF_allX" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_allX.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_allX.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_allX.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_TF_allmnu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_icon_allM.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_icon_allM.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_icon_allM.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_TF_icon_allM.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_search" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3d3d3d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchIcon.png\")")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3d3d3d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchIcon.png\")")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3d3d3d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchIcon.png\")")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #3d3d3d"),
            									"icon" : nexacro.UrlObject("URL(\"theme://images/btn_WF_searchIcon.png\")")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_save" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #263a7d"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #263a7d"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #263a7d"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #263a7d"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_WF_reset" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6c89c3"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6c89c3"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6c89c3"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("1px solid #6c89c3"),
            									"color" : nexacro.ColorObject("#333333"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								}
            							}
            						}
            					},
            					{
            						"btn_LF_mnu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#8b8b8b"),
            									"font" : nexacro.FontObject("12px \"Verdana\"")
            								},
            								"pushed" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            								},
            								"selected" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none"),
            									"color" : nexacro.ColorObject("#ffffff"),
            									"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            								}
            							}
            						}
            					}
            				]
            			},
            			"Spin" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					}
            				}
            			},
            			"spinedit" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Verdana\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("12px \"Verdana\"")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spinupbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_upbtn_D.png\")")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspinup_N.png\")")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspinup_M.png\")")
            											},
            											"pushed" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspinup_M.png\")")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspinup_D.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspinup_N.png\")")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspinup_M.png\")")
            											},
            											"pushed" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspinup_M.png\")")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspinup_D.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"spindownbutton" :
            			{
            				"parent" :
            				{
            					"Spin" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_dnbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_dnbtn_N.png\")")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_dnbtn_N.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_dnbtn_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/spn_dnbtn_D.png\")")
            							}
            						}
            					},
            					"yearspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspindn_N.png\")")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspindn_M.png\")")
            											},
            											"pushed" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspindn_M.png\")")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspindn_D.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"monthspin" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"DatePickerControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspindn_N.png\")")
            											},
            											"mouseover" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspindn_M.png\")")
            											},
            											"pushed" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspindn_M.png\")")
            											},
            											"disabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_Yspindn_D.png\")")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"CheckBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_N.png\")"),
            						"iconPosition" : "left",
            						"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\"")
            					},
            					"disabled" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_D.png\")"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					},
            					"mouseover" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_M.png\")")
            					},
            					"selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_S.png\")")
            					},
            					"mouseover_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_MS.png\")")
            					},
            					"disabled_selected" :
            					{
            						"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_DS.png\")"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				}
            			},
            			"Radio" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"radioitem" :
            			{
            				"parent" :
            				{
            					"Radio" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_N.png\")"),
            								"iconPosition" : "left",
            								"textPadding" : nexacro.PaddingObject("0px 42px 0px 6px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_D.png\")"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_M.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_S.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_MS.png\")")
            							},
            							"disabled_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_DS.png\")"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					}
            				}
            			},
            			"ListBox" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					}
            				}
            			},
            			"ListBoxControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					}
            				}
            			},
            			"listboxitem" :
            			{
            				"parent" :
            				{
            					"ListBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 5px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#f44528")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"ListBoxControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("5px 0px 5px 5px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"mouseover" :
            							{
            								"color" : nexacro.ColorObject("#f44528")
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"combolist" :
            					{
            						"parent" :
            						{
            							"Combo" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("5px 0px 5px 5px"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"mouseover" :
            									{
            										"color" : nexacro.ColorObject("#f44528")
            									},
            									"selected" :
            									{
            										"color" : nexacro.ColorObject("#ffffff")
            									}
            								}
            							},
            							"cellcombo" :
            							{
            								"parent" :
            								{
            									"cell" :
            									{
            										"parent" :
            										{
            											"row" :
            											{
            												"parent" :
            												{
            													"body" :
            													{
            														"parent" :
            														{
            															"Grid" :
            															{
            																"self" :
            																{
            																	"enabled" :
            																	{
            																		"border" : nexacro.BorderObject("0px none"),
            																		"padding" : nexacro.PaddingObject("5px 5px 5px 5px"),
            																		"color" : nexacro.ColorObject("#222222"),
            																		"font" : nexacro.FontObject("12px \"Verdana\"")
            																	},
            																	"mouseover" :
            																	{
            																		"color" : nexacro.ColorObject("#f44528")
            																	},
            																	"selected" :
            																	{
            																		"color" : nexacro.ColorObject("#ffffff")
            																	}
            																}
            															}
            														}
            													}
            												}
            											}
            										}
            									},
            									"ListViewCellControl" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none"),
            												"padding" : nexacro.PaddingObject("5px 5px 5px 5px"),
            												"color" : nexacro.ColorObject("#222222"),
            												"font" : nexacro.FontObject("12px \"Verdana\"")
            											},
            											"mouseover" :
            											{
            												"color" : nexacro.ColorObject("#f44528")
            											},
            											"selected" :
            											{
            												"color" : nexacro.ColorObject("#ffffff")
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Combo" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					}
            				}
            			},
            			"comboedit" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            																"color" : nexacro.ColorObject("#222222"),
            																"font" : nexacro.FontObject("12px \"Verdana\"")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dropbutton" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_D.png\")")
            							}
            						}
            					},
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_P.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_D.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
            															},
            															"pushed" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_P.png\")")
            															},
            															"disabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_D.png\")")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_N.png\")")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_P.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_dropbtn_D.png\")")
            									}
            								}
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")")
            															},
            															"pushed" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
            															},
            															"focused" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
            															},
            															"disabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_D.png\")")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_N.png\")")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_P.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cmb_dropbtn_D.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"combolist" :
            			{
            				"parent" :
            				{
            					"Combo" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							}
            						}
            					},
            					"cellcombo" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("1px solid #9c9c9c")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Calendar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f44528")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					}
            				},
            				"class" :
            				[
            					{
            						"cal_monthonly" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"mouseover" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"focused" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"calendaredit" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"disabled" :
            							{
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            																"color" : nexacro.ColorObject("#222222"),
            																"font" : nexacro.FontObject("12px \"Verdana\"")
            															},
            															"disabled" :
            															{
            																"color" : nexacro.ColorObject("#c1c1c1")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"disabled" :
            									{
            										"color" : nexacro.ColorObject("#c1c1c1")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspinupbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_M.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_M.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #cbcbcb"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_D.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_N.png\")")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_M.png\")")
            															},
            															"pushed" :
            															{
            																"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_M.png\")")
            															},
            															"disabled" :
            															{
            																"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #cbcbcb"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_D.png\")")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_N.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_M.png\")")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_M.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none , 0px none , 0px none , 1px solid #cbcbcb"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spinupbtn_D.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"calendarspindownbutton" :
            			{
            				"parent" :
            				{
            					"Calendar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_M.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_M.png\")")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb , 0px none , 0px none , 1px solid #cbcbcb"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_D.png\")")
            							}
            						}
            					},
            					"cellcalendar" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_N.png\")")
            															},
            															"mouseover" :
            															{
            																"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_M.png\")")
            															},
            															"pushed" :
            															{
            																"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_M.png\")")
            															},
            															"disabled" :
            															{
            																"border" : nexacro.BorderObject("1px solid #cbcbcb , 0px none , 0px none , 1px solid #cbcbcb"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_D.png\")")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_N.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_M.png\")")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c , 0px none , 0px none , 1px solid #9c9c9c"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_M.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cbcbcb , 0px none , 0px none , 1px solid #cbcbcb"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_type_spindnbtn_D.png\")")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"DatePickerControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					}
            				}
            			},
            			"prevbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_prevbtn_N.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_prevbtn_M.png\")")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_prevbtn_M.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_prevbtn_D.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d6d6d6"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_prevbtn_icon_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_prevbtn_icon_M.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #666666"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_prevbtn_icon_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_prevbtn_icon_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"nextbutton" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_nextbtn_N.png\")")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_nextbtn_M.png\")")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_nextbtn_M.png\")")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/cal_head_nextbtn_D.png\")")
            									}
            								}
            							}
            						}
            					},
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d6d6d6"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_nextbtn_icon_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_nextbtn_icon_M.png\")")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #666666"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_nextbtn_icon_P.png\")")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/tab_nextbtn_icon_D.png\")")
            							}
            						}
            					}
            				}
            			},
            			"yearstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthstatic" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"yearspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"monthspin" :
            			{
            				"parent" :
            				{
            					"head" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekband" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"weekitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#30373b"),
            										"font" : nexacro.FontObject("12px \"Verdana\",\"Dotum\"")
            									},
            									"saturday" :
            									{
            										"color" : nexacro.ColorObject("#252abf")
            									},
            									"sunday" :
            									{
            										"color" : nexacro.ColorObject("#ff5a00")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"dayitem" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"DatePickerControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"today" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#ffffff"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"saturday" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#252abf"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"sunday" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#ff5a00"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"trailingday" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#c2c4c6"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Tab" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				},
            				"class" :
            				[
            					{
            						"tab_MF_tab" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"tabpage" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528 , 1px solid #9c9c9c , 1px solid #9c9c9c")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MF_tab" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"color" : nexacro.ColorObject("#f7f7f7")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"tabbuttonitem" :
            			{
            				"parent" :
            				{
            					"Tab" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #f44528,1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("3px 5px 3px 5px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c , 1px solid #9c9c9c , 1px solid #f44528,1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("3px 5px 3px 5px"),
            								"color" : nexacro.ColorObject("#f44528"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528"),
            								"padding" : nexacro.PaddingObject("3px 5px 3px 5px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb , 1px solid #cbcbcb , 1px solid #f44528,1px solid #cbcbcb"),
            								"padding" : nexacro.PaddingObject("3px 5px 3px 5px"),
            								"color" : nexacro.ColorObject("#c1c1c1"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"focused_selected" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528"),
            								"padding" : nexacro.PaddingObject("3px 5px 3px 5px"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							}
            						},
            						"class" :
            						[
            							{
            								"tab_MF_tab" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #b4b4b4"),
            											"color" : nexacro.ColorObject("#222222"),
            											"font" : nexacro.FontObject("12px \"Verdana\""),
            											"padding" : nexacro.PaddingObject("6px 7px 6px 7px")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #b4b4b4"),
            											"color" : nexacro.ColorObject("#f44528"),
            											"font" : nexacro.FontObject("12px \"Verdana\""),
            											"padding" : nexacro.PaddingObject("6px 7px 6px 7px")
            										},
            										"selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #b4b4b4"),
            											"color" : nexacro.ColorObject("#ffffff"),
            											"font" : nexacro.FontObject("normal bold 12px \"Verdana\""),
            											"padding" : nexacro.PaddingObject("6px 7px 6px 7px")
            										},
            										"focused_selected" :
            										{
            											"border" : nexacro.BorderObject("1px solid #b4b4b4"),
            											"color" : nexacro.ColorObject("#ffffff"),
            											"font" : nexacro.FontObject("normal bold 12px \"Verdana\""),
            											"padding" : nexacro.PaddingObject("6px 7px 6px 7px")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"extrabutton" :
            			{
            				"parent" :
            				{
            					"tabbuttonitem" :
            					{
            						"parent" :
            						{
            							"Tab" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_extrabtn.png\")"),
            										"iconPosition" : "right",
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_extrabtn.png\")"),
            										"iconPosition" : "right",
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/tab_extrabtn.png\")"),
            										"iconPosition" : "right",
            										"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            									}
            								},
            								"class" :
            								[
            									{
            										"tab_MF_tab" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_tabextra.png\")"),
            													"iconPosition" : "right",
            													"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            												},
            												"mouseover" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_tabextra.png\")"),
            													"iconPosition" : "right",
            													"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            												},
            												"pushed" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_tabextra.png\")"),
            													"iconPosition" : "right",
            													"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            												},
            												"disabled" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_tabextra.png\")"),
            													"iconPosition" : "right",
            													"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            												},
            												"focused" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_tabextra.png\")"),
            													"iconPosition" : "right",
            													"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            												},
            												"selected" :
            												{
            													"border" : nexacro.BorderObject("0px none"),
            													"icon" : nexacro.UrlObject("URL(\"theme://images/btn_MF_tabextra.png\")"),
            													"iconPosition" : "right",
            													"padding" : nexacro.PaddingObject("0px 0px 0px 10px")
            												}
            											}
            										}
            									}
            								]
            							}
            						}
            					}
            				}
            			},
            			"Div" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					}
            				},
            				"class" :
            				[
            					{
            						"div_WF_searchArea" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("1px solid #c7c7c7")
            								}
            							}
            						}
            					},
            					{
            						"div_LF_bg" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					},
            					{
            						"div_WF_back" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								},
            								"disabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"groupboxcontents" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb")
            							}
            						}
            					}
            				}
            			},
            			"groupboxtitle" :
            			{
            				"parent" :
            				{
            					"GroupBox" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\""),
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"padding" : nexacro.PaddingObject("0px 3px 0px 3px"),
            								"color" : nexacro.ColorObject("#c1c1c1"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							}
            						}
            					}
            				}
            			},
            			"Menu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				},
            				"class" :
            				[
            					{
            						"mnu_TF_menu" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"menuitem" :
            			{
            				"parent" :
            				{
            					"Menu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"padding" : nexacro.PaddingObject("0px 20px 0px 20px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"mouseover" :
            							{
            							},
            							"selected" :
            							{
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            							}
            						},
            						"class" :
            						[
            							{
            								"mnu_TF_menu" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none"),
            											"padding" : nexacro.PaddingObject("0px 20px 0px 20px"),
            											"color" : nexacro.ColorObject("#ffffff"),
            											"font" : nexacro.FontObject("12px \"Verdana\"")
            										},
            										"mouseover" :
            										{
            											"font" : nexacro.FontObject("12px \"Verdana\""),
            											"color" : nexacro.ColorObject("#222222")
            										},
            										"selected" :
            										{
            											"color" : nexacro.ColorObject("#ffffff"),
            											"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            										}
            									}
            								}
            							}
            						]
            					}
            				}
            			},
            			"PopupMenu" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					}
            				}
            			},
            			"PopupMenuControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					}
            				}
            			},
            			"popupmenuitem" :
            			{
            				"parent" :
            				{
            					"PopupMenu" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\""),
            								"padding" : nexacro.PaddingObject("6px 3px 6px 3px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#f44528"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							}
            						}
            					},
            					"PopupMenuControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\""),
            								"padding" : nexacro.PaddingObject("6px 3px 6px 3px")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#f44528"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"selected" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"color" : nexacro.ColorObject("#ffffff"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemexpandimage" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/Popmnu_expand.png\")"),
            										"padding" : nexacro.PaddingObject("0px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/Popmnu_expand.png\")"),
            										"padding" : nexacro.PaddingObject("0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemcheckbox" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/Popmnu_check.png\")"),
            										"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/Popmnu_check.png\")"),
            										"padding" : nexacro.PaddingObject("0px 2px 0px 0px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemhotkeytext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#444444"),
            										"font" : nexacro.FontObject("11px \"Verdana\""),
            										"padding" : nexacro.PaddingObject("0px 4px 0px 8px")
            									}
            								}
            							},
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#444444"),
            										"font" : nexacro.FontObject("11px \"Verdana\""),
            										"padding" : nexacro.PaddingObject("0px 4px 0px 8px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"PopupDiv" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb")
            					}
            				}
            			},
            			"ProgressBar" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("0px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"padding" : nexacro.PaddingObject("0px")
            					}
            				}
            			},
            			"progressbaritem" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						},
            						"class" :
            						[
            							{
            								"pgb_normal" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"padding" : nexacro.PaddingObject("0px")
            										}
            									}
            								}
            							},
            							{
            								"pgb_gradient" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"padding" : nexacro.PaddingObject("0px")
            										}
            									}
            								}
            							}
            						]
            					},
            					"cellprogressbar" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"progressbartext" :
            			{
            				"parent" :
            				{
            					"ProgressBar" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("11px \"Verdana\"")
            							},
            							"disabled" :
            							{
            								"font" : nexacro.FontObject("11px \"Verdana\""),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					},
            					"cellprogressbar" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"color" : nexacro.ColorObject("#804000"),
            																"font" : nexacro.FontObject("12px \"Verdana\"")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							},
            							"ListViewCellControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"color" : nexacro.ColorObject("#787878"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"Grid" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #293943")
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_LF_mnutree" :
            						{
            							"self" :
            							{
            								"enabled" :
            								{
            									"border" : nexacro.BorderObject("0px none")
            								}
            							}
            						}
            					}
            				]
            			},
            			"cell" :
            			{
            				"parent" :
            				{
            					"row" :
            					{
            						"parent" :
            						{
            							"head" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("0px none , 1px solid #cbcbcb , 1px solid #cbcbcb , 0px none"),
            												"padding" : nexacro.PaddingObject("0px"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Verdana\"")
            											}
            										}
            									}
            								}
            							},
            							"body" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"color" : nexacro.ColorObject("#222222"),
            												"font" : nexacro.FontObject("12px \"Verdana\""),
            												"padding" : nexacro.PaddingObject("2px"),
            												"border" : nexacro.BorderObject("0px none , 1px solid #cbcbcb , 1px solid #cbcbcb , 0px none")
            											},
            											"mouseover" :
            											{
            											},
            											"selected" :
            											{
            												"color" : nexacro.ColorObject("#ffffff")
            											},
            											"blinked" :
            											{
            												"color" : nexacro.ColorObject("#ffffff")
            											}
            										},
            										"class" :
            										[
            											{
            												"grd_LF_mnutree" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"border" : nexacro.BorderObject("0px none , 0px none , 1px solid #546169,0px none"),
            															"color" : nexacro.ColorObject("#ffffff"),
            															"font" : nexacro.FontObject("12px \"Verdana\"")
            														},
            														"mouseover" :
            														{
            														},
            														"selected" :
            														{
            														}
            													}
            												}
            											}
            										]
            									}
            								}
            							},
            							"summary" :
            							{
            								"parent" :
            								{
            									"Grid" :
            									{
            										"self" :
            										{
            											"enabled" :
            											{
            												"border" : nexacro.BorderObject("1px solid #cbcbcb , 1px solid #cbcbcb , 1px solid #cbcbcb , 0px none"),
            												"color" : nexacro.ColorObject("#ffffff"),
            												"font" : nexacro.FontObject("bold 12px \"Verdana\""),
            												"padding" : nexacro.PaddingObject("0px")
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									}
            								}
            							}
            						}
            					},
            					"detail" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("0px none"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Malgun Gothic\"")
            									}
            								}
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"grd_cell_genderW" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#3da2df"),
            															"font" : nexacro.FontObject("bold italic 12px \"Verdana\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"grd_cell_genderM" :
            						{
            							"parent" :
            							{
            								"row" :
            								{
            									"parent" :
            									{
            										"body" :
            										{
            											"parent" :
            											{
            												"Grid" :
            												{
            													"self" :
            													{
            														"enabled" :
            														{
            															"color" : nexacro.ColorObject("#1b6e44"),
            															"font" : nexacro.FontObject("bold italic 12px \"Verdana\"")
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstV_bdcell_Name" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 20px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstV_bdcell_ID" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstV_bdcell_Gender" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstV_bdcell_label" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstV_bdcell_value" :
            						{
            							"parent" :
            							{
            								"body" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstV_dtcell_label" :
            						{
            							"parent" :
            							{
            								"detail" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 16px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstV_dtcell_value" :
            						{
            							"parent" :
            							{
            								"detail" :
            								{
            									"parent" :
            									{
            										"ListView" :
            										{
            											"self" :
            											{
            												"enabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"disabled" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"focused" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												},
            												"mouseover" :
            												{
            													"font" : nexacro.FontObject("bold 14px \"Malgun Gothic\"")
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"ImageViewer" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("0px none")
            					}
            				}
            			},
            			"cellbutton" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            														"color" : nexacro.ColorObject("#555555"),
            														"font" : nexacro.FontObject("12px \"Verdana\"")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #a0a0a0")
            													},
            													"pushed" :
            													{
            														"border" : nexacro.BorderObject("1px solid #c2c2c2")
            													},
            													"disabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #d9d9d9"),
            														"color" : nexacro.ColorObject("#bbbbbb")
            													}
            												}
            											}
            										}
            									},
            									"head" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cf270b"),
            														"color" : nexacro.ColorObject("#ffffff"),
            														"font" : nexacro.FontObject("12px \"Verdana\"")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #9a1a05")
            													},
            													"pushed" :
            													{
            														"border" : nexacro.BorderObject("1px solid #9a1a05")
            													},
            													"disabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #b4b4b4"),
            														"color" : nexacro.ColorObject("#e8e8e8")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c2c2c2"),
            								"color" : nexacro.ColorObject("#555555"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #a0a0a0")
            							},
            							"pushed" :
            							{
            								"border" : nexacro.BorderObject("1px solid #c2c2c2")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #d9d9d9"),
            								"color" : nexacro.ColorObject("#bbbbbb")
            							}
            						}
            					}
            				}
            			},
            			"cellcalendar" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #9c9c9c")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"disabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cbcbcb")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb")
            							}
            						}
            					}
            				}
            			},
            			"cellcheckbox" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none"),
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_N.png\")"),
            														"iconPosition" : "left",
            														"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("12px \"Verdana\"")
            													},
            													"disabled" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_D.png\")"),
            														"color" : nexacro.ColorObject("#c1c1c1")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_M.png\")")
            													},
            													"selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_S.png\")")
            													},
            													"mouseover_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_MS.png\")")
            													},
            													"disabled_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_DS.png\")"),
            														"color" : nexacro.ColorObject("#c1c1c1")
            													}
            												}
            											}
            										}
            									},
            									"head" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none"),
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_N.png\")"),
            														"iconPosition" : "left",
            														"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("12px \"Verdana\"")
            													},
            													"disabled" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_D.png\")"),
            														"color" : nexacro.ColorObject("#c1c1c1")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_M.png\")")
            													},
            													"selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_S.png\")")
            													},
            													"mouseover_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_MS.png\")")
            													},
            													"disabled_selected" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_DS.png\")"),
            														"color" : nexacro.ColorObject("#c1c1c1")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_N.png\")"),
            								"iconPosition" : "left",
            								"textPadding" : nexacro.PaddingObject("0px 0px 0px 6px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"disabled" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_D.png\")"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_M.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_S.png\")")
            							},
            							"mouseover_selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_MS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"celledit" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            														"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("12px \"Verdana\"")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"disabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            														"color" : nexacro.ColorObject("#c1c1c1")
            													},
            													"nulltext" :
            													{
            														"color" : nexacro.ColorObject("#c1c1c1")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					}
            				}
            			},
            			"cellmaskedit" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            														"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("12px \"Verdana\"")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"disabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            														"color" : nexacro.ColorObject("#c1c1c1")
            													},
            													"nulltext" :
            													{
            														"color" : nexacro.ColorObject("#c1c1c1")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px \"Verdana\"")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					}
            				}
            			},
            			"celltextarea" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            														"padding" : nexacro.PaddingObject("3px 3px 3px 3px"),
            														"color" : nexacro.ColorObject("#222222"),
            														"font" : nexacro.FontObject("12px/18px \"Verdana\""),
            														"wordWrap" : "char"
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"disabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            														"color" : nexacro.ColorObject("#c1c1c1")
            													},
            													"nulltext" :
            													{
            														"color" : nexacro.ColorObject("#c1c1c1")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("3px 3px 3px 3px"),
            								"color" : nexacro.ColorObject("#222222"),
            								"font" : nexacro.FontObject("12px/18px \"Verdana\""),
            								"wordWrap" : "char"
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            								"color" : nexacro.ColorObject("#c1c1c1")
            							}
            						}
            					}
            				}
            			},
            			"cellexpandbutton" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none"),
            														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_cell_expandbtn_N.png\")")
            													},
            													"mouseover" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_cell_expandbtn_P.png\")")
            													},
            													"focused" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_cell_expandbtn_P.png\")")
            													},
            													"pushed" :
            													{
            														"icon" : nexacro.UrlObject("URL(\"theme://images/grd_cell_expandbtn_P.png\")")
            													},
            													"disabled" :
            													{
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_cell_expandbtn_N.png\")")
            							},
            							"mouseover" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_cell_expandbtn_P.png\")")
            							},
            							"focused" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_cell_expandbtn_P.png\")")
            							},
            							"pushed" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/grd_cell_expandbtn_P.png\")")
            							},
            							"disabled" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"cellprogressbar" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none"),
            														"padding" : nexacro.PaddingObject("3px 0px")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            								"padding" : nexacro.PaddingObject("1px 0px 1px 0px")
            							}
            						}
            					}
            				}
            			},
            			"treeitembutton" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"expand" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_tree_expand.png\")")
            															},
            															"collapse" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_tree_collapse.png\")")
            															}
            														},
            														"class" :
            														[
            															{
            																"grd_LF_mnutree" :
            																{
            																	"self" :
            																	{
            																		"expand" :
            																		{
            																			"border" : nexacro.BorderObject("0px none"),
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_treeexpand.png\")")
            																		},
            																		"collapse" :
            																		{
            																			"border" : nexacro.BorderObject("0px none"),
            																			"icon" : nexacro.UrlObject("URL(\"theme://images/grd_LF_treecoll.png\")")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemimage" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"expand" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_tree_close.png\")")
            															},
            															"collapse" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_tree_open.png\")")
            															},
            															"leaf" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/grd_treeicon_leaf.png\")")
            															}
            														},
            														"class" :
            														[
            															{
            																"grd_LF_mnutree" :
            																{
            																	"self" :
            																	{
            																		"expand" :
            																		{
            																			"border" : nexacro.BorderObject("0px none"),
            																			"icon" : nexacro.UrlObject("none")
            																		},
            																		"collapse" :
            																		{
            																			"border" : nexacro.BorderObject("0px none"),
            																			"icon" : nexacro.UrlObject("none")
            																		},
            																		"leaf" :
            																		{
            																			"border" : nexacro.BorderObject("0px none"),
            																			"icon" : nexacro.UrlObject("none")
            																		}
            																	}
            																}
            															}
            														]
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"treeitemcheckbox" :
            			{
            				"parent" :
            				{
            					"celltreeitem" :
            					{
            						"parent" :
            						{
            							"cell" :
            							{
            								"parent" :
            								{
            									"row" :
            									{
            										"parent" :
            										{
            											"body" :
            											{
            												"parent" :
            												{
            													"Grid" :
            													{
            														"self" :
            														{
            															"enabled" :
            															{
            																"border" : nexacro.BorderObject("0px none"),
            																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_N.png\")"),
            																"iconPosition" : "left",
            																"textPadding" : nexacro.PaddingObject("0px 6px 0px 6px"),
            																"color" : nexacro.ColorObject("#222222"),
            																"font" : nexacro.FontObject("12px \"Verdana\"")
            															},
            															"disabled" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_D.png\")"),
            																"color" : nexacro.ColorObject("#c1c1c1")
            															},
            															"mouseover" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_M.png\")")
            															},
            															"selected" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_S.png\")")
            															},
            															"mouseover_selected" :
            															{
            																"icon" : nexacro.UrlObject("URL(\"theme://images/chk_btn_MS.png\")")
            															}
            														}
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"cellcombo" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"self" :
            												{
            													"enabled" :
            													{
            														"border" : nexacro.BorderObject("0px none")
            													},
            													"mouseover" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"focused" :
            													{
            														"border" : nexacro.BorderObject("1px solid #f44528")
            													},
            													"disabled" :
            													{
            														"border" : nexacro.BorderObject("1px solid #cbcbcb")
            													}
            												}
            											}
            										}
            									}
            								}
            							}
            						}
            					},
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #9c9c9c")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("1px solid #f44528")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("1px solid #cbcbcb")
            							}
            						}
            					}
            				}
            			},
            			"body" :
            			{
            				"parent" :
            				{
            					"Grid" :
            					{
            						"class" :
            						[
            							{
            								"grd_LF_mnutree" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("0px none")
            										}
            									}
            								}
            							}
            						]
            					},
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"disabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				},
            				"class" :
            				[
            					{
            						"lstV_bd_format1" :
            						{
            							"parent" :
            							{
            								"ListView" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"readonly" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff,1px solid #ffffff,1px solid #d6d6d6,1px solid #ffffff")
            										},
            										"selected" :
            										{
            										}
            									}
            								}
            							}
            						}
            					},
            					{
            						"lstV_bd_format2" :
            						{
            							"parent" :
            							{
            								"ListView" :
            								{
            									"self" :
            									{
            										"enabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"focused" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"mouseover" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"readonly" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"disabled" :
            										{
            											"border" : nexacro.BorderObject("1px solid #ffffff")
            										},
            										"selected" :
            										{
            										}
            									}
            								}
            							}
            						}
            					}
            				]
            			},
            			"celltreeline" :
            			{
            				"parent" :
            				{
            					"cell" :
            					{
            						"parent" :
            						{
            							"row" :
            							{
            								"parent" :
            								{
            									"body" :
            									{
            										"parent" :
            										{
            											"Grid" :
            											{
            												"class" :
            												[
            													{
            														"grd_LF_mnutree" :
            														{
            															"self" :
            															{
            																"enabled" :
            																{
            																	"border" : nexacro.BorderObject("0px none")
            																}
            															}
            														}
            													}
            												]
            											}
            										}
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"StepControl" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("0px none"),
            						"padding" : nexacro.PaddingObject("0px 0px 10px 0px")
            					}
            				}
            			},
            			"stepitem" :
            			{
            				"parent" :
            				{
            					"StepControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none"),
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_M.png\")")
            							},
            							"selected" :
            							{
            								"icon" : nexacro.UrlObject("URL(\"theme://images/rdo_btn_MS.png\")")
            							}
            						}
            					}
            				}
            			},
            			"popupmenuitemtext" :
            			{
            				"parent" :
            				{
            					"popupmenuitem" :
            					{
            						"parent" :
            						{
            							"PopupMenuControl" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            									}
            								}
            							},
            							"PopupMenu" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"padding" : nexacro.PaddingObject("0px 0px 0px 5px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"FileUpload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #f2f2f2")
            					}
            				}
            			},
            			"fileuploaditembutton" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\""),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_upload_icon_N.png\")"),
            										"iconPosition" : "left",
            										"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            										"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cf270b"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\""),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_upload_icon_N.png\")"),
            										"iconPosition" : "left",
            										"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            										"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            									},
            									"selected" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cf270b"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\""),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_upload_icon_N.png\")"),
            										"iconPosition" : "left",
            										"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            										"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cf270b"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\""),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_upload_icon_N.png\")"),
            										"iconPosition" : "left",
            										"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            										"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            									},
            									"pushed" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cf270b"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\""),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_upload_icon_N.png\")"),
            										"iconPosition" : "left",
            										"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            										"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            										"color" : nexacro.ColorObject("#c1c1c1"),
            										"font" : nexacro.FontObject("12px \"Verdana\""),
            										"icon" : nexacro.UrlObject("URL(\"theme://images/btn_upload_icon_D.png\")"),
            										"iconPosition" : "left",
            										"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            										"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"fileuploaditemedit" :
            			{
            				"parent" :
            				{
            					"fileuploaditem" :
            					{
            						"parent" :
            						{
            							"FileUpload" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"focused" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"mouseover" :
            									{
            										"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            										"color" : nexacro.ColorObject("#222222"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									},
            									"disabled" :
            									{
            										"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            										"color" : nexacro.ColorObject("#c1c1c1"),
            										"font" : nexacro.FontObject("12px \"Verdana\"")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"FileDownload" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\""),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/btn_dnload_icon_N.png\")"),
            						"iconPosition" : "left",
            						"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            						"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cf270b"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\""),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/btn_dnload_icon_N.png\")"),
            						"iconPosition" : "left",
            						"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            						"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            					},
            					"pushed" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cf270b"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\""),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/btn_dnload_icon_N.png\")"),
            						"iconPosition" : "left",
            						"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            						"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cf270b"),
            						"color" : nexacro.ColorObject("#222222"),
            						"font" : nexacro.FontObject("12px \"Verdana\""),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/btn_dnload_icon_N.png\")"),
            						"iconPosition" : "left",
            						"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            						"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1"),
            						"font" : nexacro.FontObject("12px \"Verdana\""),
            						"icon" : nexacro.UrlObject("URL(\"theme://images/btn_dnload_icon_D.png\")"),
            						"iconPosition" : "left",
            						"padding" : nexacro.PaddingObject("0px 9px 0px 9px"),
            						"textPadding" : nexacro.PaddingObject("0px 9px 0px 9px")
            					}
            				}
            			},
            			"ListView" :
            			{
            				"self" :
            				{
            					"enabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"readonly" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"focused" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"mouseover" :
            					{
            						"border" : nexacro.BorderObject("1px solid #9c9c9c"),
            						"color" : nexacro.ColorObject("#222222")
            					},
            					"disabled" :
            					{
            						"border" : nexacro.BorderObject("1px solid #cbcbcb"),
            						"color" : nexacro.ColorObject("#c1c1c1")
            					}
            				}
            			},
            			"expandbar" :
            			{
            				"parent" :
            				{
            					"body" :
            					{
            						"parent" :
            						{
            							"ListView" :
            							{
            								"self" :
            								{
            									"enabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstV_icon_expandbar_N.png')"),
            										"textPadding" : nexacro.PaddingObject("0px 0px 0px 10px")
            									},
            									"disabled" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstV_icon_expandbar_D.png')")
            									},
            									"focused" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstV_icon_expandbar_P.png')")
            									},
            									"mouseover" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstV_icon_expandbar_P.png')")
            									},
            									"pushed" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstV_icon_expandbar_P.png')")
            									},
            									"selected" :
            									{
            										"icon" : nexacro.UrlObject("url('theme://images/lstV_icon_expandbar_P.png')")
            									}
            								}
            							}
            						}
            					}
            				}
            			},
            			"detail" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"focused" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"mouseover" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"readonly" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,1px solid #d6d6d6,0px none")
            							},
            							"selected" :
            							{
            							}
            						}
            					}
            				}
            			},
            			"vscrollbar" :
            			{
            				"parent" :
            				{
            					"ListView" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #9b9c9c"),
            								"padding" : nexacro.PaddingObject("3px 1px")
            							}
            						}
            					}
            				}
            			},
            			"cellimage" :
            			{
            				"parent" :
            				{
            					"ListViewCellControl" :
            					{
            						"self" :
            						{
            							"enabled" :
            							{
            								"border" : nexacro.BorderObject("0px none")
            							}
            						}
            					}
            				}
            			}
		},
		{
            "includeStatusMap" : true
		}
		);
		var imgcache = nexacro._getImageCacheMaps();
        imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_D.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_N.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalDrop_P.png")] = { width:15, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinDown_N.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinDown_P.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinUp_N.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_CalHeadSpinUp_P.png")] = { width:6, height:4 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_D.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_N.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_close_O.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_D.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_N.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_drop_P.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_expand.png")] = { width:14, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_N.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_GridExpand_P.png")] = { width:13, height:13 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hdec_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_hinc_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_D.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_max_N.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menunext_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_D.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_N.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_menuprev_P.png")] = { width:8, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_D.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_min_N.png")] = { width:14, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_N.png")] = { width:11, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_next_P.png")] = { width:11, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_D.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_normal_N.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenunext_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_Pmenuprev_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_N.png")] = { width:11, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_prev_P.png")] = { width:11, height:16 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_D.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_N.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinDown_P.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_D.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_N.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_SpinUp_P.png")] = { width:8, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_D.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_N.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabExtra_O.png")] = { width:10, height:10 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_N.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabnext_P.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_N.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_tabprev_P.png")] = { width:5, height:7 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vdec_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_D.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_N.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/btn_vinc_P.png")] = { width:10, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_check.png")] = { width:12, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_expand.png")] = { width:9, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_title.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/ico_zoom.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_DS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_NS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_ON.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_check_OS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_grip.png")] = { width:11, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_groupboxtit_D.png")] = { width:8, height:8 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_DS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NN.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_NS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_ON.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Radio_OS.png")] = { width:18, height:18 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step_NN.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_Step_NS.png")] = { width:12, height:12 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCheck_N.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCheck_S.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeClose.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeCollapse.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeExpand.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeItem.png")] = { width:9, height:11 };
        		imgcache[nexacro._getImageLocation("theme://images/img_TreeOpen.png")] = { width:9, height:9 };
        		imgcache[nexacro._getImageLocation("theme://images/pop_menu_icon.png")] = { width:14, height:14 };
        		imgcache[nexacro._getImageLocation("theme://images/test01.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/test02.png")] = { width:7, height:5 };
        		imgcache[nexacro._getImageLocation("theme://images/titlebar_icon_nexacro17.ico")] = { width:16, height:16 };
	};
}
)();
