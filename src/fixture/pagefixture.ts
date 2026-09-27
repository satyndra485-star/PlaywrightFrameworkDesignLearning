import {test as baseTest} from '@playwright/test'
import { BasePage } from '../pages/BasePage'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
type pageFixtures= // this is not mandatory we can skip this as we can skip defining clsaa properties and directly create inside the method /function/onject
{
 basePage: BasePage;
 loginPage: LoginPage;
 homePage:HomePage;
};
export let test = baseTest.extend<pageFixtures> // here we are reassigning the complete code(basePage.extend ->gives all code/functionality same as playwriht test and also it will custome thing called <pageFixtures>(since it carrey new value extend+custom so it has to be stored in a new variable)) to test 
({                          //also we can use other variable name if we want instead test (as it is same as playwright)but when we are using in any file like any class or anywhere we need to import this file test not from playwright , if we try to import both it will throw error. we can give new name and we can then import from this file and test from playwright but no use as here we alredy have all the playwright inbuilt test's funct/fixture+my custom fixture. so we can use  

basePage: async ({page}, use ) =>// remembere bagePage(which is refrennce of a anonymous arrow function should have same name as defined in Type fixture)
    {
        let basePageobj= new BasePage(page); 
        await use(basePageobj)
    },
      loginPage: async ({page}, use ) =>
    {
        let loginPageobj= new LoginPage(page);
        await use(loginPageobj) //though our obje name is loginPageobj/homePageobj but we are calling it with fixture object name, becz the homePageobj is a local object variable passed to fixture object using use and it will be used accoress the proj. will never use homePageobj
    },
      homePage: async ({page}, use ) =>
    {
        let homePageobj= new HomePage(page);
        await use(homePageobj)
    },
    

});
export {expect} from'@playwright/test';