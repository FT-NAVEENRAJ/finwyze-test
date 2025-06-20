import { test, expect, request } from '@playwright/test';

test('Fetch pool account details', async({request})=>{
const response = await request.get('https://cd-r5.finwyze.com/api/v10/admin/onboarding/scheme?sectionType=poolAccount&entityId=F082BBAE-E962-4C02-B000-DF942D422275');
expect(response.status()).toBe(200);
const responseBody = await response.json();

});

test("Add the Pool Account Details",async({request})=>{
    const response = await request.post('https://cd-r5.finwyze.com/api/v10/admin/onboarding/scheme?sectionType=poolAccount',{
     data:{
        "accountNumber": "3988767870068",
        "bankName": "OIYU",
        "nameOnAccount": "NAVEENRAJ",
        "accountType": "CURRENT",
        "ifsc": "ICIC0000005",
        "micr": "983295832",
        "bankBranch": "Chennai",
        "defaultAccount": 1,
        "bankAddress": {
            "addressLine1": "srinagar Colony",
            "addressLine2": "near saidapet court",
            "cityTownVillage": "little Mount Metro Station",
            "office": "Chennai",
            "state": "TamilNadu",
            "country": "INDIA",
            "pinCode": "600015",
            "district": "chennai"
        },
        "entityUserId": "7F8FD629-6E8C-492F-A78A-81212C0E5284",
        "entityId": "F082BBAE-E962-4C02-B000-DF942D422275",
        "sectionType": "POOLACCOUNT",
        "id": "BEB95B27-40FD-4437-8B25-2023FFAC1C42"
    }
    })
   expect(response.status()).toBe(200);
});

test('Delete the pool Account details', async ({request})=>{

    const response = await request.delete('https://cd-r5.finwyze.com/api/v10/admin/onboarding/scheme?sectionType=poolAccount&id=BEB95B27-40FD-4437-8B25-2023FFAC1C42&entityId=F082BBAE-E962-4C02-B000-DF942D422275');
    expect(response.status()).toBe(400);
});
