
import process from 'node:process';
import {test,expect} from '../src/fixture/pagefixture';

test.beforeEach(async ({loginPage})=>
{
   loginPage.goToLoginPage();
   loginPage.doLogin(process.env.username, process.env.password);
  
});

test('verify product search', async ({homePage})=> {
    await homePage.searhProduct('camera');
    

   });