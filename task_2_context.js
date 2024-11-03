function logger() {
    console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };

//bind
const boundLogger = logger.bind(obj);
boundLogger(); //'I output only external context: some value'

//call
logger.call(obj); //'I output only external context: some value'

//apply
logger.apply(obj); //'I output only external context: some value'
