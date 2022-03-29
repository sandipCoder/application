<template>
<div>
    <div class="container">
        <div class="row py-5 mt-4 align-items-center">
            <!-- For Demo Purpose -->
            <div class="col-md-7 col-lg-7 mb-5 mb-md-0">
                <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt="" class="img-fluid mb-3 d-none d-md-block" />
                <h1>Login an Account</h1>
                <p class="font-italic text-muted mb-0">
                    login an account and access the Home page
                </p>
            </div>

            <!-- Registeration Form -->
            <div class="col-md-5 col-lg-5 ml-auto">
                <form action="#" @submit.prevent="loginUSer">
                    <div class="row">
                        <!-- Email Address -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <input id="email" v-model="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md" :class="`${errors.email ? 'is-invalid':''}`" />
                            <div class="invalid-feedback"> {{errors.email}}</div>
                        </div>
                        <!-- Password -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="password" type="password" v-model="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md" :class="`${errors.password ? 'is-invalid':''}`" />
                            <div class="invalid-feedback"> {{errors.password}}</div>
                        </div>
                        <!-- Submit Button -->
                        <div class="form-group col-lg-12 mx-auto mb-0">
                            <button class="btn btn-primary btn-block py-2">
                                <span class="font-weight-bold">Login</span>
                            </button>
                        </div>
                    </div>
                </form>
                <!-- Divider Text -->
                <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                    <div class="border-bottom w-100 ml-5"></div>
                    <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                    <div class="border-bottom w-100 mr-5"></div>
                </div>

                <!-- Social Login -->

                <!-- Already Registered -->
                <div class="text-center w-100">
                    <p class="text-muted font-weight-bold">
                        Don't have Login?
                        <router-link to="/register" class="text-primary ml-2">Register</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import loginUser from "../validations/login"
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            userLoginDetal: [],
            user: "",
            errors: {}
        };
    },

    mounted() {
        if (localStorage.registerUSER) {
            let lt = localStorage.registerUSER;
            this.user = JSON.parse(lt);
        }
    },

    methods: {
        loginUSer() {
            const userDetails = {
                email: this.email,
                password: this.password,
            };

            const {
                isInvalid,
                errors
            } = loginUser(userDetails)

            if (isInvalid) {
                this.errors = errors
                console.log(this.errors)
            } else {
                this.errors = {}

                ///access the value from localstore
                let lsuser = localStorage.registerUSER;
                lsuser = JSON.parse(lsuser);

                let findex = lsuser.findIndex((item) => item.email === userDetails.email);
                if (findex > -1) {
                    let passwordIndex = lsuser.findIndex(
                        (item) => item.password === userDetails.password
                    );
                    if (passwordIndex > -1) {
                        let activeUSer = lsuser.find(
                            (item) => item.email === userDetails.email
                        );
                        this.userLoginDetal.push(activeUSer);
                        this.$router.push("/");
                        window.location.reload()
                        localStorage.setItem("Activeusers", JSON.stringify(activeUSer));
                    }
                }
            }
        },
    },
};
</script>

<style scoped>
/*
*
* ==========================================
* CUSTOM UTIL CLASSES
* ==========================================
*
*/

.border-md {
    border-width: 1px;
}

.btn-facebook {
    background: #405d9d;
    border: none;
}

.btn-facebook:hover,
.btn-facebook:focus {
    background: #314879;
}

.btn-twitter {
    background: #42aeec;
    border: none;
}

.btn-twitter:hover,
.btn-twitter:focus {
    background: #1799e4;
}
</style>
