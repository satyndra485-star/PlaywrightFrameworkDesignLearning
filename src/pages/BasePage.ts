import {  Page } from '@playwright/test';
//repo link https://github.com/satyndra485-star/PlaywrightFrameworkDesignLearning

export class BasePage{
    protected readonly page:Page;
    constructor (page:Page){
        this.page=page;
    }

}