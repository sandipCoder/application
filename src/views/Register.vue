<template>
<div>

    <div class="container">
        <div class="row py-5 mt-4 align-items-center">
            <!-- For Demo Purpose -->
            <div class="col-md-7 col-lg-7 mb-5 mb-md-0">
                <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt="" class="img-fluid mb-3 d-none d-md-block">
                <h1>Create an Account</h1>
                <p class="font-italic text-muted mb-0">Create a minimal registeration page using Bootstrap 4 HTML form elements.</p>

            </div>

            <!-- Registeration Form -->
            <div class="col-md-5 col-lg-5 ml-auto">
                <form action="#" @submit.prevent="registerUser">
                    <div class="row">
                        <!-- First Name -->
                        <div class="input-group col-lg-6 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="firstName" type="text" v-model="fname" name="firstname" placeholder="First Name" class="form-control bg-white border-left-0 border-md" :class="`${errors.fname ? 'is-invalid':''}`">
                            <div class="invalid-feedback">{{ errors.fname }}</div>
                        </div>

                        <!-- Last Name -->
                        <div class="input-group col-lg-6 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="lastName" type="text" v-model="lname" name="lastname" placeholder="Last Name" class="form-control bg-white border-left-0 border-md" :class="`${errors.lname ? 'is-invalid':''}`">
                            <div class="invalid-feedback">{{ errors.lname }}</div>
                        </div>

                        <!-- Email Address -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <input id="email" type="email" v-model="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md" :class="`${errors.email?  'is-invalid' :''}`">
                            <div class="invalid-feedback">{{ errors.email }}</div>
                        </div>

                        <!-- Phone Number -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-phone-square text-muted"></i>
                                </span>
                            </div>
                            <!-- <select id="countryCode" name="countryCode" style="max-width: 80px" class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
                                <option value="">+91</option>
                            </select> -->
                            <input id="phoneNumber" type="tel" v-model="phoneNumber" name="phone" placeholder="Phone Number" class="form-control bg-white border-md border-left-0 pl-3" :class="`${errors.phoneNumber?  'is-invalid' :''}`">
                            <div class="invalid-feedback">{{ errors.phoneNumber }}</div>
                        </div>

                        <!-- Job -->
                        <!-- <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-black-tie text-muted"></i>
                                </span>
                            </div>
                            <select id="job" name="jobtitle" class="form-control custom-select bg-white border-left-0 border-md">
                                <option value="">Choose your job</option>
                                <option value="">Designer</option>
                                <option value="">Developer</option>
                                <option value="">Manager</option>
                                <option value="">Accountant</option>
                            </select>
                        </div> -->

                        <!-- Password -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="password" type="password" v-model="password" name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md" :class="`${errors.password?  'is-invalid' :''}`">
                            <div class="invalid-feedback">{{ errors.password }}</div>
                        </div>

                        <!-- Password Confirmation -->
                        <div class="input-group col-lg-12 mb-4">
                            <div class="input-group-prepend">
                                <span class="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="passwordConfirmation" type="password" v-model="cpassword" name="passwordConfirmation" placeholder="Confirm Password" class="form-control bg-white border-left-0 border-md" :class="`${errors.cpassword?  'is-invalid' :''}`">
                            <div class="invalid-feedback">{{ errors.cpassword }}</div>
                        </div>

                        <!-- Submit Button -->
                        <div class="form-group col-lg-12 mx-auto mb-0">
                            <button class="btn btn-primary btn-block py-2">
                                <span class="font-weight-bold">Create your account</span>
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
                    <p class="text-muted font-weight-bold">Already Registered? <router-link to="/login" class="text-primary ml-2">Login</router-link>
                    </p>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
import regiterValidator from '../validations/regiterValidator.js'
export default {
    name: "Register",

    data() {
        return {
            fname: "",
            lname: '',
            email: '',
            phoneNumber: '',
            password: '',
            cpassword: '',
            regiterUsers: [],
            errors: ""
        }
    },

    methods: {
        registerUser() {
            let resUser = {
                fname: this.fname,
                lname: this.lname,
                email: this.email,
                phoneNumber: this.phoneNumber,
                password: this.password,
                cpassword: this.cpassword
            }

            const {
                isInvalid,
                errors
            } = regiterValidator(resUser)

            if (isInvalid) {
                this.errors = errors
                console.log(errors)

            } else {
                this.errors = {}

                if (localStorage.registerUSER) {
                    let lt = localStorage.registerUSER
                    this.regiterUsers = JSON.parse(lt)
                }

                this.regiterUsers.push(resUser)
                localStorage.setItem('registerUSER', JSON.stringify(this.regiterUsers))

                this.fname = ""
                this.lname = ""
                this.email = ""
                this.phoneNumber = ""
                this.password = ""
                this.cpassword = ""

                this.$router.push('/login')
            }
        },

    }
}
</script>

<style scoped>
.border-md {
    border-width: 1px;
}

.btn-facebook {
    background: #405D9D;
    border: none;
}

.btn-facebook:hover,
.btn-facebook:focus {
    background: #314879;
}

.btn-twitter {
    background: #42AEEC;
    border: none;
}

.btn-twitter:hover,
.btn-twitter:focus {
    background: #1799e4;
}

.invalid-feedback {
    text-align: right;
}
</style>
