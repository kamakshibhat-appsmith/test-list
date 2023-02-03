export default {
	pageSize: () =>  List77000.currentItemsView?.[List77000.triggeredItem?.index]?.List2.pageSize || 1,
	offset: () => (( List77000.currentItemsView?.[List77000.triggeredItem?.index]?.List2.pageNo || 1) - 1) * (List77000.currentItemsView?.[List77000.triggeredItem?.index]?.List2.pageSize || 1),
	pageSize1: () =>  List77000.triggeredItemView?.List2.pageSize,
	pageNo1: () =>  List77000.triggeredItemView?.List2.pageNo,
	pageSizeApi: () =>  List77000.triggeredItemView?.List2.pageSize || 1,
	offsetApi: () => (( List77000.triggeredItemView?.List2.pageNo || 1) - 1) * (List77000.triggeredItemView?.List2.pageSize || 1),


}