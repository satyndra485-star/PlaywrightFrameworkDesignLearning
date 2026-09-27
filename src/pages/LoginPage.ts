import { Locator, Page } from '@playwright/test';
import { BasePage } from "./BasePage";
export class LoginPage extends BasePage
{
    //private locator
    private readonly emailid: Locator;
     private readonly password: Locator;
     private readonly loginBtn: Locator;
       private readonly forgottonPasswordLink: Locator;
       private readonly loginErrorMessage:Locator;
          constructor(page:Page){
            super(page);
            this.emailid = page.getByRole('textbox', { name: 'E-Mail Address' });
            this.password =page.getByLabel('Password');
            this.loginBtn =page.getByRole('button', { name: 'Login' });
            this.forgottonPasswordLink =page.getByRole('link', { name: 'Forgotten Password' }).first();
            this.loginErrorMessage = page.locator('#account-login > div.alert.alert-danger:nth-of-type(1)');

          }
          //public page action : behaviour
          async goToLoginPage() : Promise<void>
                    {
                       await this.page.goto('opencart/index.php?route=account/login');
                    }

          async getLoginPageTitle():Promise<String>
          {
            return await this.page.title();
          }

          async isForgottenPwdExist(): Promise<boolean>{
          return await this.forgottonPasswordLink.isVisible();
          }

async doLogin(username: string, password: string ): Promise<void>{
    console.log(`user creds: ${username} - ${password}`);
    await this.emailid.fill(username);
     await this.password.fill(password);
     //this.page.pause();
      await this.loginBtn.click( );
    

}
async isLoginErrorDisplayed(): Promise<boolean>
{
    return await this.loginErrorMessage.isVisible();
}

        }