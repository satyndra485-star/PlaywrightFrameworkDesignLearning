class XyZ{
    #username;
    #Password;
    constructor(username,Password){
        this.#username= username;
        this.#Password=Password;
    }

  display()
  {
   console.log(this.#Password);
     console.log(this.#username);
  }
}

  let objj1= new XyZ('abc@gmail.com','Abcd1234');
objj1.display( );