import { test, expect, request } from '@playwright/test';

test('API Testing - GET request', async ({ request }) => {
    const response = await request.get('https://cd-r5.finwyze.com/api/v10/admin/onboarding/scheme?sectionType=poolAccount&entityId=F082BBAE-E962-4C02-B000-DF942D422275');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
   
});

test('API Testing - DELETE request', async ({ request }) => {
    const response = await request.delete('https://cd-r5.finwyze.com/api/v10/admin/onboarding/scheme?sectionType=schemeDetails&id=49BDB3BA-D898-4E96-8550-8FCC818F8E6&entityId=F082BBAE-E962-4C02-B000-DF942D422275');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);


});

