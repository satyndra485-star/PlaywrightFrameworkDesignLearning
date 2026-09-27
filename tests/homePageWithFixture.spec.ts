import{test,expect} from '..//src/fixture/pagefixture'; //here we dont need to import all other class as we alreday imprted in fixturefile and created the object. here we are using the fixture obj from fixturefile.

test.beforeEach(async({loginPage})=>
{

await loginPage.goToLoginPage();
await loginPage.doLogin('pwapril@pw.com', 'pw123');

});

test('home page title', async ({homePage})=>{
let pageTitle = await homePage.getHomePageTitle();
console.log('page tilte is:',pageTitle);
expect(pageTitle).toBe('My Account');
});
test('logout link existance', async ({homePage})=>
{
 expect(await homePage.isLogoutLinkExist()).toBeTruthy();
} );
test('home page header exist', async ({homePage})=>
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