import {test,expect } from "../src/fixture/pagefixture";
import { CsvHelper } from "../src/utils/CsvHelper";
test.beforeEach(async({loginPage})=>
{
await loginPage.goToLoginPage();

});
test('login page title',async ({loginPage})=>{
let pageTitle = await loginPage.getLoginPageTitle();
console.log('Login page title', pageTitle);
expect(pageTitle).toBe('Account Login');


});
test('forgot pwd link exist',async ({loginPage})=>{
expect(await loginPage.isForgottenPwdExist()).toBeTruthy();

});
test('user is able to login',async ({loginPage,homePage})=>{
//expect(await loginPage.doLogin(process.env.username,process.env.password));
expect(await loginPage.doLogin(process.env.username!,process.env.password!));
 expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy(); //though our obje name is loginPageobj/homePageobj but we are calling it with fixture object name, becz the homePageobj is a local object variable passed to fixture object using use and it will be used accoress the proj. will never use homePageobj
expect.soft(await homePage.getHomePageTitle()).toBe('My Account');

});

let data = CsvHelper.readCSV('testdata/logindata.csv');
for(let row of data){
test(`INVALID USER LOGIN - ${row.username}-${row.password}`,async ({loginPage,homePage})=>{
await loginPage.doLogin(row.username, row.password);
console.log("sucess login");

});
};