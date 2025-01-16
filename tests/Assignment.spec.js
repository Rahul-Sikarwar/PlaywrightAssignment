import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Login';
import { DashboardPage } from '../pages/Dashboard';

test('Assignment test 1', async ({ page })=> {

    // Page loaded completely
    const login= new LoginPage(page);
    await login.navigatetoLoginPage();
    await page.waitForTimeout(2000);
    await login.assertion1();
    await expect(page).toHaveTitle('OrangeHRM');
    
    }
    )

test('Assignment test 2', async ({ page })=> {

// Login test with invalid credentials

const login= new LoginPage(page);
await login.navigatetoLoginPage();
await login.login('Admin','admin124');
await page.waitForTimeout(2000);
await login.invalidError();
await login.assertionError();
await expect(page).toHaveTitle('OrangeHRM');

}
)

test('Assignment test 3', async ({ page })=> {
// Login test with valid credential

const login= new LoginPage(page);
await login.navigatetoLoginPage();
await login.assertion1();
await login.login('Admin','admin123');
await page.waitForTimeout(3000)
await expect(page).toHaveTitle('OrangeHRM');
const Dash= new DashboardPage(page);
await Dash.assertion2();

}
)

test('Assignment test 4', async ({ page })=> {
    // Print labels
    
    const login=new LoginPage(page);
    await login.navigatetoLoginPage();
    await login.login('Admin','admin123');
    await page.waitForTimeout(2000);
    const Dash=new DashboardPage(page);
    await page.waitForTimeout(3000)
    await Dash.assertion3();
    await Dash.labelNameDisplay();
    await Dash.assertion4();
    
    })
    
    test('Assignment test 5', async ({ page })=> {
    // Logout
    
    const login=new LoginPage(page);
    await login.navigatetoLoginPage();
    await login.login('Admin','admin123');
    await page.waitForTimeout(2000);
    const Dash=new DashboardPage(page)
    await Dash.assertion2();
    await Dash.logoutFlow();
    await page.waitForTimeout(3000)
    
    }
    )