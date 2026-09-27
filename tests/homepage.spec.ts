import test, { expect } from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";
import { HomePage } from "../src/pages/HomePage";

let loginPage :LoginPage;
let homePage: HomePage;
test.beforeEach(async({page})=>
{
loginPage = new LoginPage(page);
await loginPage.goToLoginPage();
await loginPage.doLogin('pwapril@pw.com', 'pw123');
homePage= new HomePage(page);

});

test.skip('home page title', async ()=>{
let pageTitle = await homePage.getHomePageTitle();
console.log('page tilte is:',pageTitle);
expect(pageTitle).toBe('My Account');
});
test.skip('logout link existance', async ()=>
{
 expect(await homePage.isLogoutLinkExist()).toBeTruthy();
} );
test.skip('home page header exist', async ()=>
{
 let allHeaders=await homePage.getHomePageHeaders();
console.log('all headers are', allHeaders);
expect.soft(allHeaders).toHaveLength(4);
expect.soft(allHeaders).toEqual([
    'My Account',
    'My Orders',
    'My Affiliate Account',
    'Newsletter'

]);

});