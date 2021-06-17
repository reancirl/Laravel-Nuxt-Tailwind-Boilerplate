<template>
    <div class="">
        <div class="grid grid-cols-2 h-screen">
            <div id="bg-image" class="flex">
                <div class="mx-auto flex flex-col">
                    <div class="font-bold text-3xl text-white p-4 m-2 bg-black opacity-50 rounded-lg">
                        {{ day }} : <span class="text-2xl">{{ timestamp }}</span>
                    </div>
                </div>
            </div>
            <div class="flex-col flex items-center w-full m-auto">
                <span class="font-bold text-2xl text-black"> BizSmart HR </span>
                <span class="text-xl mb-3 text-black"> Human Resource Management System</span>
                <form action="" class="mt-2 flex flex-col w-7/12 shadow-2xl p-5">
                    <span class="font-bold text-2xl text-black m-auto mb-5"> Sign In </span>
                    <div class="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center mb-6 border-2 border-grey-light">
                        <div class="flex -mr-px justify-center w-15 p-2">
                            <span class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-xl text-gray-600">
                                <i class="fas fa-user-circle"></i>
                            </span>
                        </div>
                        <input type="email" class="outline-none" placeholder="Email" v-model="email" required/>
                    </div>
                    <div class="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center mb-4 border-2 border-grey-light">
                        <div class="flex -mr-px justify-center w-15 p-2">
                            <span class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-xl text-gray-600"> 
                                <i class="fas fa-lock"></i>
                            </span>
                        </div>
                        <input type="password" class="outline-none" placeholder="Password" v-model="password" required/>
                    </div>
                    <span class="text-red-700 font-black text-xs"> <i class="fa fa-exclamation-triangle" v-if="message !== ''"></i> {{ message }}</span>
                    <button @click.prevent="login()"
                    type="button"
                    class="py-2 text-center text-white leading-tight text-xl md:text-base font-sans mt-4" style="background-color:#d9504b;">
                    Sign In
                    </button>
                    <hr class="mt-10 border-1 border-grey-light">
                    <img src="~/assets/img/bizsmart.png" alt="Powered by BizSmart" class="m-auto h-2/4 w-2/4">
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        middleware: 'guest',
        layout: 'login',
        data() {
            return { 
                timestamp:'',
                day:'',
                email:'',
                password:'',
                message:'',
            }
        },
        created() {
            setInterval(this.getNow, 1000)
        },
        methods: {
            getNow: function() {
                const today = new Date()
                const day = today.getDay()
                var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
                const date = (month[today.getMonth()+1])+' '+today.getDate()+', '+today.getFullYear()
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
                const dateTime = date +' '+ time

                this.timestamp = dateTime
                
                var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
                this.day = daylist[day]
            },
            login() {
                this.$auth.loginWith('laravelJWT', {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                })
                this.$auth.onError((error, name, endpoint) => {
                    this.message = 'Invalid Credentials'
                })
            }
        }
    }
</script>
<style scope lang="css">
    #bg-image {
        background-image: url(~/assets/img/hr_banner.jpg);
        background-position: center center;
        background-repeat:  no-repeat;
        background-attachment: local;
        background-size:  cover;
        background-color: #999;
    }
</style>