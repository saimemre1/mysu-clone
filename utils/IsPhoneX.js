import * as Device from 'expo-device';
let bottomLine = null

const iPhoneWithoutButtonModels = [
    'iPhone10,3', // 'iPhone X', // (model A1865, A1902)
    'iPhone10,6', //: 'iPhone X', // (model A1901)
    'iPhone11,2', //: 'iPhone XS', // (model A2097, A2098)
    'iPhone11,4', //: 'iPhone XS Max', // (model A1921, A2103)
    'iPhone11,6', //: 'iPhone XS Max', // (model A2104)
    'iPhone11,8', //: 'iPhone XR', // (model A1882, A1719, A2105)
    'iPhone12,1', //: 'iPhone 11',
    'iPhone12,3', //: 'iPhone 11 Pro',
    'iPhone12,5', //: 'iPhone 11 Pro Max',
]

const ipadWithoutButtonModels = [
    'iPad8,1', //: 'iPad Pro 11-inch (3rd generation)', // iPad Pro 11 inch (3rd generation) - Wifi
    'iPad8,2', //: 'iPad Pro 11-inch (3rd generation)', // iPad Pro 11 inch (3rd generation) - 1TB - Wifi
    'iPad8,3', //: 'iPad Pro 11-inch (3rd generation)', // iPad Pro 11 inch (3rd generation) - Wifi + cellular
    'iPad8,4', //: 'iPad Pro 11-inch (3rd generation)', // iPad Pro 11 inch (3rd generation) - 1TB - Wifi + cellular
    'iPad8,5', //: 'iPad Pro 12.9-inch (3rd generation)', // iPad Pro 12.9 inch (3rd generation) - Wifi
    'iPad8,6', //: 'iPad Pro 12.9-inch (3rd generation)', // iPad Pro 12.9 inch (3rd generation) - 1TB - Wifi
    'iPad8,7', //: 'iPad Pro 12.9-inch (3rd generation)', // iPad Pro 12.9 inch (3rd generation) - Wifi + cellular
    'iPad8,8', //: 'iPad Pro 12.9-inch (3rd generation)', // iPad Pro 12.9 inch (3rd generation) - 1TB - Wifi + cellular
    "iPad8,9", //: "iPad Pro 11 inch 2nd Gen (WiFi)",
    "iPad8,10", //: "iPad Pro 11 inch 2nd Gen (WiFi+Cellular)",
    "iPad8,11", //: "iPad Pro 12.9 inch 4th Gen (WiFi)",
    "iPad8,12", //: "iPad Pro 12.9 inch 4th Gen (WiFi+Cellular)",
]

const otherWithoutButtonModels = [

]

if  (
        iPhoneWithoutButtonModels.includes(Device.modelId) ||
        ipadWithoutButtonModels.includes(Device.modelId) || 
        otherWithoutButtonModels.includes(Device.modelId)
    ) 
    {
        bottomLine = true
    }
    
export default bottomLine