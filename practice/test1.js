class MyHome
{
    constructor(age,height,name='lalu')
    {
this.name=name;
this.age=age;
this.height=height;
    }

    activity(){
        console.log(this.height);
        console.log(this.name);
    }
};
let obj1 =new MyHome(20,5.5);
obj1.activity();
