
const { HYEventStore }  = require('./node_modules/hy-event-store')

class Car {
  constructor(){
    console.log('car');
  }
  onState(key, callBack){

    callBack.apply('hah',[key]);
  }
}

class People {
  constructor(){
    this.handleRecommendSongs('pp');
    console.log('Peple');
    const car = new Car();
    car.onState('car', this.handleRecommendSongs);
  }

  handleRecommendSongs(value){
    console.log('this = ', this, value);
  }
}

class Person {
  constructor(){
    console.log('HYEventStore = ', HYEventStore);
    const testStore = new HYEventStore({
      state:{
        testKey:{},  
      },
      actions:{
        testAction(ctx){}
      }
    });

    testStore.onState('testKey', this.handleRecommendSongs);
  }

  handleRecommendSongs(value){
    console.log('this = ', this,);
  }
}

const p = new Person();