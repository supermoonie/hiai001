import httpClient from "../util/HttpClient";

const PayOrderApi = {
    async getPayOrderStatus(orderCode, payType) {
        return await httpClient.asyncGet(`/fast-cut/pay/order/status?orderCode=${orderCode}&payType=${payType}`)
    },
    async createPayOrder(orderCode, payType) {
        return await httpClient.asyncPostForm('/fast-cut/pay/order/create', {
            'orderCode': orderCode,
            'payType': payType
        });
    },
    async getResult(orderCode) {
        return await httpClient.asyncGet(`/fast-cut/pay/result?orderCode=${orderCode}`)
    }
}

export default PayOrderApi
