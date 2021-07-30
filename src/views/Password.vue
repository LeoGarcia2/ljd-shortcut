<template>
    <div>

        <form v-on:submit.prevent="validateBeforeSubmit">
            <label class="custom-label control-label">Password</label>
            <input class="form-control password-field" type="password" name="password" v-model.trim="password">
            <span class="error help-block" ></span>
            <div class="text-danger" v-if="error"><p>Incorrect password.</p></div>
            <button class="btn btn-primary" type="submit">Log in</button>
        </form>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                error: null,
                password: null
            }
        },
        methods: {
            validateBeforeSubmit () {
                if (this.password === 'replace-this-with-your-password') {
                    this.error = false
                    router.push('/')
                } else {
                    this.error = true
                }
            }
        }
    }
</script>

<style scoped lang="scss">

.consigne {
    font-size: 12px;
}

</style>