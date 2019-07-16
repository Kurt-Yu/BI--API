1. 平台总览页
	1. 总收入
		1. 根据最后一次 update 的日期，获取截止日期: 
			function getLastDay(updateDate) -> lastDay
		2. 总执行收入:
			function getTotalExecutionIncome() -> totalExecutionIncome
		3. 总签单收入:
			function getTotalContractIncome() -> totalContractIncome
		4. 执行完成率:
			function getExecutionPercent() -> totalExecutionIncome / goalIncome * 100% -> executionPercent
		5. 签单完成率:
			function getContractPercent() -> totalContractIncome / goalIncome * 100% -> contractPercent


	2. 渠道执行收入看板
		1. 最近八周:
			function recentEightWeeks(updateDate) -> Array[eightWeeks]
		2. 计算周环比:
			function wow(thisWeekIncome, lastWeekIncome) -> wow
		3. 计算quarter完成率:
			function quarterPercent(quarterTotalIncome, quarterGoal) -> quarterPercent
		4. 计算年完成率:
			function yearPercent(yearTotalIncome, yearGoal) -> yearPercent

	3. 外部收入看板
		1. 计算周环比: 同上
		2. 计算quarter完成率: 同上
		3. 计算年完成率: 同上
	
	4. 内部收入看板
		1. 计算周环比: 同上
		2. 计算quarter完成率: 同上
		3. 计算年完成率: 同上

	5. CPA看板
		1. 计算周环比: 同上
		2. 计算quarter完成率: 同上
		3. 计算年完成率: 同上

	6. 资源看板
		1. 获取五大消费场景数据:
			function fetchCategoryData(database) -> Array[data]


2. 业务洞察页
	1. 总览页
		1. 获取今年截止目前的所有月份:
			function currentMonths(date) -> Array[months]
		2. 给定某个月，在数据库中获取该月数据(按渠道划分):
			function monthDataByChannel(database, month) -> json object
		3. 给定某个月，在数据库中获取该月数据(按产品划分):
			function monthDataByProduct(database, month) -> json object
		4. 计算渠道合计(月):
			function totalDataByChannel(json) -> json object
		5. 计算产品合计(月):
			function totalDataByProduct(json) -> json object

		6. 获取今年截止目前的所有周:
			function currentWeeks(date) -> Array[(start_time, end_time)]
		7. 给定某个周，在数据库中获取该周数据(按渠道划分):
			function monthDataByChannel(database, month) -> json object
		8. 给定某个周，在数据库中获取该周数据(按产品划分):
			function monthDataByProduct(database, month) -> json object
		4. 计算渠道合计(周):
			function totalDataByChannel(json) -> json object
		5. 计算产品合计(周):
			function totalDataByProduct(json) -> json object

	2. 销售业绩
		1. 给定某一周，返回该周全部渠道的全部数据:
			function allChannelData(week) -> Array[objects]
		1. 给定某个销售渠道和某一周，获取该销售渠道该周内的全部数据:
			function channelData(channel, week) -> Array[objects]
		2. 计算当前项目渠道签单收入合计:
			function totalChannelIncomeByProject(project) -> Integer
		3. 计算占比:
			function percent(totalChannelIncome, totalChannelIncomeByProject) -> percent

3. 数据监控
	1. 项目签单
		1. 搜索某个项目:
			function searchProject(project) -> json object
		2. 给定某个产品线(或者默认全部产品线)和某一周，返回该产品线的全部数据:
			function dataByProductLine(database, productLine) -> Array[objects]
		3. 给定某个投放状态(或者默认全部投放状态)和某一周，返回在该状态下的全部项目的全部数据:
			function dataByStatus(database, status) -> Array[objects]
		4. 新增项目:
			function addProject(project object) -> null (update database)
		5. 导入数据:
			function appendData(data) -> update database
		6. 根据项目开始时间和结束时间，计算状态:
			function status(project) -> Enum
		7. 修改某个项目的开始时间 / 结束时间:
			function updateStartTime(project) -> update database & update status & store recent two records
			function updateEndTime(project) -> update database & update status & store recent two records
		8. 操作: 编辑 / 删除 :
			function modify(project) -> update database
			function delete(project) -> udpate database
		9. 查看对比;
			function checkDifference(project) -> Array[objects]
		10. 数据检测:
			function dataValidation(parameters) -> null

	2. 渠道计提
		1. 新增计提:
			function add(...) -> update database
		2. 导入数据:
			function import(data) -> upate database 
		3. 数据检测;
			function dataValidation(parameters) -> null
		4. 编辑 / 删除:
			function modify(...) -> update database
			function delete(...) -> update database


4. 系统管理
	1. 用户管理 / 角色管理 (删除)
	
	2. 渠道管理：
		1. 新增渠道:
			function addChannel(channel) -> update database
		2. 获取所有的负责人:
			function getCharger() -> Array[chargers]
		3. 编辑 删除 设置KPI
			function modify(channel) -> update database
			function delete(channel) -> update database
			function setKPI(kpi) -> update database

	3. 产品管理:
		1. 新增产品:
			function addProduct(product object) -> update database
		2. 编辑 删除 设置KPI
			function modify(channel) -> update database
			function delete(channel) -> update database
			function setKPI(kpi) -> update database