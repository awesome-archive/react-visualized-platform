const cities = [{ "name": "北京", "value": 114 }, { "name": "天津", "value": 104 }, { "name": "石家庄", "value": 182 }, { "name": "唐山", "value": 91 }, { "name": "秦皇岛", "value": 65 }, { "name": "邯郸", "value": 133 }, { "name": "邢台", "value": 175 }, { "name": "保定", "value": 170 }, { "name": "承德", "value": 52 }, { "name": "沧州", "value": 128 }, { "name": "廊坊", "value": 110 }, { "name": "衡水", "value": 160 }, { "name": "张家口", "value": 55 }, { "name": "太原", "value": 81 }, { "name": "大同", "value": 54 }, { "name": "阳泉", "value": 144 }, { "name": "长治", "value": 80 }, { "name": "晋城", "value": 119 }, { "name": "朔州", "value": 60 }, { "name": "晋中", "value": 92 }, { "name": "运城", "value": 119 }, { "name": "忻州", "value": 67 }, { "name": "临汾", "value": 82 }, { "name": "吕梁", "value": 82 }, { "name": "呼和浩特", "value": 53 }, { "name": "包头", "value": 56 }, { "name": "乌海", "value": 49 }, { "name": "赤峰", "value": 45 }, { "name": "通辽", "value": 73 }, { "name": "鄂尔多斯", "value": 71 }, { "name": "呼伦贝尔", "value": 46 }, { "name": "巴彦淖尔", "value": 45 }, { "name": "乌兰察布", "value": 56 }, { "name": "兴安盟", "value": 57 }, { "name": "锡林郭勒盟", "value": 44 }, { "name": "阿拉善盟", "value": 57 }, { "name": "沈阳", "value": 108 }, { "name": "大连", "value": 94 }, { "name": "瓦房店", "value": 88 }, { "name": "鞍山", "value": 134 }, { "name": "抚顺", "value": 113 }, { "name": "本溪", "value": 97 }, { "name": "丹东", "value": 105 }, { "name": "锦州", "value": 75 }, { "name": "营口", "value": 88 }, { "name": "阜新", "value": 74 }, { "name": "辽阳", "value": 122 }, { "name": "盘锦", "value": 73 }, { "name": "铁岭", "value": 129 }, { "name": "朝阳", "value": 66 }, { "name": "葫芦岛", "value": 75 }, { "name": "长春", "value": 120 }, { "name": "吉林", "value": 150 }, { "name": "四平", "value": 128 }, { "name": "辽源", "value": 104 }, { "name": "通化", "value": 73 }, { "name": "白山", "value": 81 }, { "name": "松原", "value": 73 }, { "name": "白城", "value": 58 }, { "name": "延边州", "value": 77 }, { "name": "连云港", "value": 72 }, { "name": "淮安", "value": 64 }, { "name": "盐城", "value": 68 }, { "name": "扬州", "value": 72 }, { "name": "镇江", "value": 83 }, { "name": "句容", "value": 82 }, { "name": "泰州", "value": 65 }, { "name": "宿迁", "value": 77 }, { "name": "杭州", "value": 54 }, { "name": "富阳", "value": 77 }, { "name": "临安", "value": 78 }, { "name": "宁波", "value": 77 }, { "name": "温州", "value": 134 }, { "name": "嘉兴", "value": 62 }, { "name": "湖州", "value": 68 }, { "name": "诸暨", "value": null }, { "name": "金华", "value": 129 }, { "name": "义乌", "value": 107 }, { "name": "衢州", "value": 129 }, { "name": "舟山", "value": 64 }, { "name": "台州", "value": 75 }, { "name": "丽水", "value": 55 }, { "name": "绍兴", "value": 66 }, { "name": "合肥", "value": 128 }, { "name": "芜湖", "value": 107 }, { "name": "蚌埠", "value": 89 }, { "name": "淮南", "value": 113 }, { "name": "马鞍山", "value": 125 }, { "name": "淮北", "value": 89 }, { "name": "铜陵", "value": 124 }, { "name": "哈尔滨", "value": 80 }, { "name": "齐齐哈尔", "value": 43 }, { "name": "鸡西", "value": 89 }, { "name": "鹤岗", "value": 49 }, { "name": "双鸭山", "value": 80 }, { "name": "大庆", "value": 58 }, { "name": "伊春", "value": 44 }, { "name": "佳木斯", "value": 64 }, { "name": "七台河", "value": 110 }, { "name": "牡丹江", "value": 74 }, { "name": "黑河", "value": 62 }, { "name": "绥化", "value": 40 }, { "name": "大兴安岭地区", "value": 43 }, { "name": "上海", "value": 58 }, { "name": "南京", "value": 92 }, { "name": "无锡", "value": 73 }, { "name": "江阴", "value": 84 }, { "name": "宜兴", "value": 82 }, { "name": "徐州", "value": 88 }, { "name": "常州", "value": 72 }, { "name": "溧阳", "value": 89 }, { "name": "金坛", "value": 89 }, { "name": "苏州", "value": 78 }, { "name": "常熟", "value": 67 }, { "name": "张家港", "value": 65 }, { "name": "昆山", "value": 63 }, { "name": "吴江", "value": 70 }, { "name": "太仓", "value": 58 }, { "name": "南通", "value": 65 }, { "name": "海门", "value": 52 }, { "name": "安庆", "value": 122 }, { "name": "黄山", "value": 61 }, { "name": "滁州", "value": 103 }, { "name": "阜阳", "value": 127 }, { "name": "宿州", "value": 115 }, { "name": "六安", "value": 130 }, { "name": "亳州", "value": 87 }, { "name": "池州", "value": 112 }, { "name": "宣城", "value": 127 }, { "name": "福州", "value": 65 }, { "name": "厦门", "value": 87 }, { "name": "莆田", "value": 78 }, { "name": "三明", "value": 57 }, { "name": "泉州", "value": 90 }, { "name": "漳州", "value": 90 }, { "name": "南平", "value": 58 }, { "name": "龙岩", "value": 58 }, { "name": "宁德", "value": 69 }, { "name": "南昌", "value": 63 }, { "name": "景德镇", "value": 44 }, { "name": "萍乡", "value": 69 }, { "name": "九江", "value": 117 }, { "name": "新余", "value": 69 }, { "name": "鹰潭", "value": 83 }, { "name": "赣州", "value": 93 }, { "name": "吉安", "value": 69 }, { "name": "宜春", "value": 77 }, { "name": "抚州", "value": 62 }, { "name": "上饶", "value": 89 }, { "name": "济南", "value": 145 }, { "name": "章丘", "value": 195 }, { "name": "青岛", "value": 55 }, { "name": "胶州", "value": 63 }, { "name": "即墨", "value": 77 }, { "name": "平度", "value": 93 }, { "name": "胶南", "value": 77 }, { "name": "莱西", "value": 104 }, { "name": "淄博", "value": 143 }, { "name": "枣庄", "value": 108 }, { "name": "东营", "value": 134 }, { "name": "烟台", "value": 94 }, { "name": "莱州", "value": 119 }, { "name": "蓬莱", "value": 66 }, { "name": "招远", "value": 122 }, { "name": "潍坊", "value": 133 }, { "name": "寿光", "value": 135 }, { "name": "济宁", "value": 90 }, { "name": "泰安", "value": 132 }, { "name": "威海", "value": 82 }, { "name": "文登", "value": 93 }, { "name": "荣成", "value": 62 }, { "name": "乳山", "value": 65 }, { "name": "日照", "value": 73 }, { "name": "莱芜", "value": 176 }, { "name": "临沂", "value": 98 }, { "name": "德州", "value": 129 }, { "name": "聊城", "value": 132 }, { "name": "滨州", "value": 152 }, { "name": "菏泽", "value": 112 }, { "name": "郑州", "value": 218 }, { "name": "株洲", "value": 57 }, { "name": "湘潭", "value": 50 }, { "name": "衡阳", "value": 38 }, { "name": "邵阳", "value": 39 }, { "name": "岳阳", "value": 64 }, { "name": "常德", "value": 67 }, { "name": "张家界", "value": 59 }, { "name": "益阳", "value": 50 }, { "name": "郴州", "value": 51 }, { "name": "永州", "value": 34 }, { "name": "怀化", "value": 38 }, { "name": "娄底", "value": 40 }, { "name": "湘西州", "value": 38 }, { "name": "广州", "value": 84 }, { "name": "韶关", "value": 65 }, { "name": "深圳", "value": 59 }, { "name": "珠海", "value": 64 }, { "name": "汕头", "value": 73 }, { "name": "佛山", "value": 70 }, { "name": "江门", "value": 61 }, { "name": "湛江", "value": 49 }, { "name": "茂名", "value": 53 }, { "name": "肇庆", "value": 73 }, { "name": "惠州", "value": 62 }, { "name": "梅州", "value": 68 }, { "name": "汕尾", "value": 72 }, { "name": "河源", "value": 57 }, { "name": "阳江", "value": 55 }, { "name": "清远", "value": 95 }, { "name": "东莞", "value": 60 }, { "name": "开封", "value": 110 }, { "name": "洛阳", "value": 175 }, { "name": "平顶山", "value": 173 }, { "name": "安阳", "value": 180 }, { "name": "鹤壁", "value": 127 }, { "name": "新乡", "value": 137 }, { "name": "焦作", "value": 227 }, { "name": "濮阳", "value": 123 }, { "name": "许昌", "value": 158 }, { "name": "漯河", "value": 117 }, { "name": "三门峡", "value": 135 }, { "name": "南阳", "value": 145 }, { "name": "商丘", "value": 93 }, { "name": "信阳", "value": 129 }, { "name": "周口", "value": 107 }, { "name": "驻马店", "value": 114 }, { "name": "武汉", "value": 84 }, { "name": "黄石", "value": 84 }, { "name": "十堰", "value": 78 }, { "name": "宜昌", "value": 108 }, { "name": "襄阳", "value": 138 }, { "name": "鄂州", "value": 110 }, { "name": "荆门", "value": 70 }, { "name": "孝感", "value": 99 }, { "name": "荆州", "value": 104 }, { "name": "黄冈", "value": 99 }, { "name": "咸宁", "value": 54 }, { "name": "随州", "value": 93 }, { "name": "恩施州", "value": 52 }, { "name": "长沙", "value": 49 }, { "name": "乐山", "value": 54 }, { "name": "南充", "value": 52 }, { "name": "眉山", "value": 63 }, { "name": "宜宾", "value": 74 }, { "name": "广安", "value": 48 }, { "name": "达州", "value": 53 }, { "name": "雅安", "value": 62 }, { "name": "巴中", "value": 47 }, { "name": "资阳", "value": 61 }, { "name": "阿坝州", "value": 63 }, { "name": "甘孜州", "value": 45 }, { "name": "凉山州", "value": 48 }, { "name": "贵阳", "value": 48 }, { "name": "六盘水", "value": 65 }, { "name": "遵义", "value": 37 }, { "name": "安顺", "value": 45 }, { "name": "铜仁地区", "value": 38 }, { "name": "黔西南州", "value": 38 }, { "name": "毕节", "value": 40 }, { "name": "黔东南州", "value": 55 }, { "name": "黔南州", "value": 30 }, { "name": "昆明", "value": 72 }, { "name": "曲靖", "value": 68 }, { "name": "玉溪", "value": 80 }, { "name": "保山", "value": 79 }, { "name": "昭通", "value": 48 }, { "name": "丽江", "value": 48 }, { "name": "普洱", "value": 87 }, { "name": "临沧", "value": 88 }, { "name": "楚雄州", "value": 78 }, { "name": "中山", "value": 54 }, { "name": "潮州", "value": 92 }, { "name": "揭阳", "value": 83 }, { "name": "云浮", "value": 62 }, { "name": "南宁", "value": 51 }, { "name": "柳州", "value": 67 }, { "name": "桂林", "value": 74 }, { "name": "梧州", "value": 64 }, { "name": "北海", "value": 51 }, { "name": "防城港", "value": 54 }, { "name": "钦州", "value": 57 }, { "name": "贵港", "value": 75 }, { "name": "玉林", "value": 63 }, { "name": "百色", "value": 62 }, { "name": "贺州", "value": 64 }, { "name": "河池", "value": 65 }, { "name": "来宾", "value": 72 }, { "name": "崇左", "value": 52 }, { "name": "海口", "value": 40 }, { "name": "三亚", "value": 31 }, { "name": "重庆", "value": 64 }, { "name": "成都", "value": 63 }, { "name": "自贡", "value": 60 }, { "name": "攀枝花", "value": 74 }, { "name": "泸州", "value": 69 }, { "name": "德阳", "value": 57 }, { "name": "绵阳", "value": 43 }, { "name": "广元", "value": 50 }, { "name": "遂宁", "value": 49 }, { "name": "内江", "value": 51 }, { "name": "红河州", "value": 66 }, { "name": "文山州", "value": 49 }, { "name": "西双版纳州", "value": 75 }, { "name": "大理州", "value": 79 }, { "name": "德宏州", "value": 109 }, { "name": "怒江州", "value": 30 }, { "name": "迪庆州", "value": 41 }, { "name": "拉萨", "value": 50 }, { "name": "昌都地区", "value": 46 }, { "name": "山南地区", "value": 57 }, { "name": "日喀则地区", "value": 49 }, { "name": "那曲地区", "value": 95 }, { "name": "阿里地区", "value": 49 }, { "name": "林芝地区", "value": 47 }, { "name": "西安", "value": 60 }, { "name": "铜川", "value": 63 }, { "name": "宝鸡", "value": 60 }, { "name": "咸阳", "value": 65 }, { "name": "渭南", "value": 72 }, { "name": "延安", "value": 58 }, { "name": "汉中", "value": 61 }, { "name": "榆林", "value": 50 }, { "name": "安康", "value": 46 }, { "name": "商洛", "value": 48 }, { "name": "兰州", "value": 61 }, { "name": "嘉峪关", "value": 77 }, { "name": "金昌", "value": 51 }, { "name": "白银", "value": 47 }, { "name": "天水", "value": 64 }, { "name": "武威", "value": 47 }, { "name": "张掖", "value": 74 }, { "name": "平凉", "value": 60 }, { "name": "酒泉", "value": 69 }, { "name": "庆阳", "value": 58 }, { "name": "定西", "value": 47 }, { "name": "陇南", "value": 36 }, { "name": "临夏州", "value": 65 }, { "name": "甘南州", "value": 58 }, { "name": "西宁", "value": 57 }, { "name": "海东地区", "value": 68 }, { "name": "海北州", "value": 68 }, { "name": "黄南州", "value": 60 }, { "name": "海南州", "value": 66 }, { "name": "果洛州", "value": 70 }, { "name": "玉树州", "value": 64 }, { "name": "海西州", "value": 64 }, { "name": "银川", "value": 70 }, { "name": "石嘴山", "value": 63 }, { "name": "吴忠", "value": 59 }, { "name": "固原", "value": 57 }, { "name": "中卫", "value": 60 }, { "name": "乌鲁木齐", "value": 74 }, { "name": "克拉玛依", "value": 67 }, { "name": "吐鲁番地区", "value": 88 }, { "name": "哈密地区", "value": 65 }, { "name": "昌吉州", "value": 107 }, { "name": "博州", "value": 89 }, { "name": "库尔勒", "value": 123 }, { "name": "阿克苏地区", "value": 333 }, { "name": "克州", "value": 149 }, { "name": "喀什地区", "value": 348 }, { "name": "和田地区", "value": 333 }, { "name": "伊犁哈萨克州", "value": 76 }, { "name": "塔城地区", "value": 70 }, { "name": "阿勒泰地区", "value": 47 }, { "name": "石河子", "value": 92 }, { "name": "五家渠", "value": 78 }];

export default cities;