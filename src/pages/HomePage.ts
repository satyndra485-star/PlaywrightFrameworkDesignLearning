import { Locator, Page } from '@playwright/test';
import { BasePage } from "./BasePage";
export class HomePage extends BasePage
{
    private readonly logoutLink: Locator;
    private readonly headers : Locator;
    private readonly searchBox:Locator;
    private readonly searhBtn:Locator;
//intialize the locator using contructor 
constructor (page: Page)
{
    super(page);
    this.logoutLink=page.getByRole('link', { name: 'Logout' });
    this.headers=page.getByRole('heading',{ level: 2 });
    this.searchBox= page.getByRole('textbox',{name:'search'});
    this.searhBtn=page.locator('#search button');
}

async isLogoutLinkExist(): Promise<Boolean>
{
    return await this.logoutLink.isVisible();
}
async getHomePageHeaders(): Promise<String[]>
{
    return await this.headers.allInnerTexts();
}
async getHomePageTitle(): Promise<String>
{
    return await this.page.title();
}
async searhProduct(searchKey:string):Promise<void>
{ console.log('search key is ', searchKey);

   
    await this.searchBox.fill(searchKey);
    await this.searhBtn.click();

}


}