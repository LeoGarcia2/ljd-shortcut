<template>
    <div class="projetshortcut column">

        <p><strong>{{ projectName }}</strong></p>

        <div class="input-container row">

            <div class="column env-container">
                <label for="local">Local</label>
                <div class="row env-item">
                    <input type="url" name="local" v-model="d_localUrl" placeholder="url">
                    <a :href="d_localUrl" target="_blank"><button class="arrow link">Go</button></a>
                </div>
                <div class="row env-item">
                    <input type="text" name="login" :id="getId('inputLocalLogin')" v-model="d_localLogin" placeholder="login">
                    <button @click="copy('inputLocalLogin')" class="pencil copy">Copie</button>
                </div>
                <div class="row env-item">
                    <input type="text" name="password" :id="getId('inputLocalPassword')" v-model="d_localPassword" placeholder="password">
                    <button @click="copy('inputLocalPassword')" class="pencil copy">Copie</button>
                </div>
            </div>

            <div class="column env-container">
                <label for="dev">Dev</label>
                <div class="row env-item">
                    <input type="url" name="dev" v-model="d_devUrl" placeholder="url">
                    <a :href="d_devUrl" target="_blank"><button class="pencil copy">Go</button></a>
                </div>
                <!-- <div class="column">
                    <div class="row">
                        <input type="text" placeholder="htaccess login">
                        <button>Copie</button>
                    </div>
                    <div class="row">
                        <input type="text" placeholder="htaccess password">
                        <button>Copie</button>
                    </div>
                </div> -->
                <div class="row env-item">
                    <input type="text" name="login" :id="getId('inputDevLogin')" v-model="d_devLogin" placeholder="login">
                    <button @click="copy('inputDevLogin')" class="pencil copy">Copie</button>
                </div>
                <div class="row env-item">
                    <input type="text" name="password" :id="getId('inputDevPassword')" v-model="d_devPassword" placeholder="password">
                    <button @click="copy('inputDevPassword')" class="pencil copy">Copie</button>
                </div>
            </div>

            <div class="env-container">
                <label for="preprod">Preprod</label>
                <div class="row env-item">
                    <input type="url" name="preprod" v-model="d_preprodUrl" placeholder="url">
                    <a :href="d_preprodUrl" target="_blank"><button class="pencil copy">Go</button></a>             
                </div>
                <!-- <div class="column">
                    <div class="row">
                        <input type="text" placeholder="htaccess login">
                        <button>Copie</button>
                    </div>
                    <div class="row">
                        <input type="text" placeholder="htaccess password">
                        <button>Copie</button>
                    </div>
                </div> -->
                <div class="row env-item">
                    <input type="text" name="login" :id="getId('inputPreprodLogin')" v-model="d_preprodLogin" placeholder="login">
                    <button @click="copy('inputPreprodLogin')" class="pencil copy">Copie</button>
                </div>
                <div class="row env-item">
                    <input type="text" name="password" :id="getId('inputPreprodPassword')" v-model="d_preprodPassword" placeholder="password">
                    <button @click="copy('inputPreprodPassword')" class="pencil copy">Copie</button>
                </div>
            </div>

            <div class="env-container">
                <label for="prod">Prod</label>
                <div class="row env-item">
                    <input type="url" name="prod" v-model="d_prodUrl" placeholder="url">
                    <a :href="d_prodUrl" target="_blank"><button class="pencil copy">Go</button></a>
                </div>
                <!-- <div class="column">
                    <div class="row">
                        <input type="text" placeholder="htaccess login">
                        <button>Copie</button>
                    </div>
                    <div class="row">
                        <input type="text" placeholder="htaccess password">
                        <button>Copie</button>
                    </div>
                </div> -->
                <div class="row env-item">
                    <input type="text" name="login" :id="getId('inputProdLogin')" v-model="d_prodLogin" placeholder="login">
                    <button @click="copy('inputProdLogin')" class="pencil copy">Copie</button>
                </div>
                <div class="row env-item">
                    <input type="text" name="password" :id="getId('inputProdPassword')" v-model="d_prodPassword" placeholder="password">
                    <button @click="copy('inputProdPassword')" class="pencil copy">Copie</button>
                </div>
            </div>

            <button @click="save"><p>S</p><p>A</p><p>V</p><p>E</p></button>
            <button @click="save"><p>D</p><p>E</p><p>L</p><p>E</p><p>T</p><p>E</p></button>

        </div>

    </div>
</template>

<script>
export default {
  name: 'ProjetShortcut',
  props: [ 'projectName', 'localUrl', 'localLogin', 'localPassword', 'devUrl', 'devLogin', 'devPassword', 'preprodUrl', 'preprodLogin', 'preprodPassword', 'prodUrl', 'prodLogin', 'prodPassword' ],

    data() {
        return {
            d_projectName: this.projectName,
            d_localUrl: this.localUrl,
            d_localLogin: this.localLogin,
            d_localPassword: this.localPassword,
            d_devUrl: this.devUrl,
            d_devLogin: this.devLogin,
            d_devPassword: this.devPassword,
            d_preprodUrl: this.preprodUrl,
            d_preprodLogin: this.preprodLogin,
            d_preprodPassword: this.preprodPassword,
            d_prodUrl: this.prodUrl,
            d_prodLogin: this.prodLogin,
            d_prodPassword: this.prodPassword,
        }
    },

    methods: {
        save() {
            this.$store.dispatch(
                "updateProject",
                {
                projectName: this.d_projectName,
                local:{
                    url: this.d_localUrl,
                    login: this.d_localLogin,
                    password: this.d_localPassword,
                },
                dev: {
                    url: this.d_devUrl,
                    login: this.d_devLogin,
                    password: this.d_devPassword,
                },
                preprod:{
                    url: this.d_preprodUrl,
                    login: this.d_preprodLogin,
                    password: this.d_preprodPassword,
                },
                prod: {
                    url: this.d_prodUrl,
                    login: this.d_prodLogin,
                    password: this.d_prodPassword,
                }
                },
            );
        },
        copy(arg) {
            let input = document.getElementById(this.projectName + arg);
            input.select();
            document.execCommand("copy");
        },
        getId(arg) {
            // console.log(arg);
            return this.projectName + arg;
        }
    },


}
</script>

<style scoped lang="scss">

.projetshortcut {
    border: 1px solid grey;
    padding: 10px;
    margin: 10px;
}

.input-container {
    justify-content: space-around;
}

.env_container {
    display:flex;
    flex-direction: column;
}

.env-item {
    margin: 4px;
}

</style>