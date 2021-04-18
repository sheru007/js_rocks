const obj = {
	someVar: "someVal",
	fun1: () => {
		console.log(this.someVar);
    },
    fun2: function(){
        console.log(this.someVar);
    },
    fun3: function() {
        return function() {
        console.log(this.someVar)
        }
    },
    fun4: function() {
        return () => {
        console.log(this.someVar)
        }
    }
}

obj.fun1()
obj.fun2() 
obj.fun3()()
obj.fun4()()