//---------behaviour of this keyword
const random = {
    name: 'welcome to Tutorial',
    video: ['javascript','this','keyword'],
    info(){
        console.log("Hi My name is: " + this.name);
        //-----usage of this in method
        // this.video.forEach(function(tag){       
        //     console.log(tag);
        // })
        //----reference global object in local object by using this
        this.video.forEach(function(tag){
                console.log(this.name, tag);
            },this)
        }
    }
    random.info();
    //---output---
    // Hi My name is: welcome to Tutorial
    // javascript
    // this
    // keyword

    //----output
    // Hi My name is: welcome to Tutorial
    // welcome to Tutorial javascript
    // welcome to Tutorial this
    // welcome to Tutorial keyword

 